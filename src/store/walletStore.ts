// Starknet Wallet Store
// Real wallet integration with Braavos and ArgentX

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Wallet, TokenBalance, WalletState, WalletProvider } from '@/lib/types/wallet';

// Starknet wallet window types
declare global {
  interface Window {
    starknet?: StarknetWindowObject;
    starknet_braavos?: StarknetWindowObject;
    starknet_argentX?: StarknetWindowObject;
  }
}

interface StarknetWindowObject {
  id: string;
  name: string;
  version: string;
  icon: string;
  isConnected: boolean;
  selectedAddress?: string;
  account?: {
    address: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider?: any;
  enable: (options?: { starknetVersion?: 'v4' | 'v5' }) => Promise<string[]>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: (call: { type: string; params?: any }) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on: (event: string, callback: (...args: any[]) => void) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off: (event: string, callback: (...args: any[]) => void) => void;
}

// Supported wallet providers for connection
type SupportedWalletProvider = 'braavos' | 'argentx';

interface WalletStore extends WalletState {
  // Connection
  connect: (provider: SupportedWalletProvider) => Promise<void>;
  disconnect: () => void;

  // Balance
  refreshBalances: () => Promise<void>;

  // Status
  checkConnection: () => Promise<void>;

  // Signing
  signMessage: (message: string) => Promise<string>;

  // Provider access
  getProvider: () => StarknetWindowObject | null;
}

// Contract addresses (from Rust backend)
const CONTRACTS = {
  SAGE_TOKEN: '0x04321b7282ae6aa354988eed57f2ff851314af8524de8b1f681a128003cc4ea5',
  RENTAL_ESCROW: '0x02f667f323624695626dcffef7115abfc87f468d10166d6a8d1c5c7a9c7e9d63',
};

// Get the wallet provider object
const getWalletObject = (provider: WalletProvider): StarknetWindowObject | null => {
  if (typeof window === 'undefined') return null;

  if (provider === 'braavos') {
    return window.starknet_braavos || null;
  } else if (provider === 'argentx') {
    return window.starknet_argentX || null;
  } else if (provider === 'starknet') {
    return window.starknet || null;
  }
  return null;
};

// Check if wallet extension is installed
const isWalletInstalled = (provider: SupportedWalletProvider): boolean => {
  return getWalletObject(provider) !== null;
};

// Format address for display
const formatAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const useWalletStore = create<WalletStore>()(
  persist(
    (set, get) => ({
      wallet: null,
      balances: [],
      transactions: [],
      isConnecting: false,
      error: null,

      connect: async (provider: SupportedWalletProvider) => {
        set({ isConnecting: true, error: null });

        try {
          // Check if wallet is installed
          if (!isWalletInstalled(provider)) {
            const installUrl = provider === 'braavos'
              ? 'https://braavos.app/'
              : 'https://www.argent.xyz/argent-x/';
            throw new Error(`${provider === 'braavos' ? 'Braavos' : 'ArgentX'} wallet not installed. Install from: ${installUrl}`);
          }

          const walletObject = getWalletObject(provider);
          if (!walletObject) {
            throw new Error('Wallet object not found');
          }

          // Request connection
          const addresses = await walletObject.enable({ starknetVersion: 'v5' });

          if (!addresses || addresses.length === 0) {
            throw new Error('No accounts found. Please unlock your wallet.');
          }

          const address = addresses[0];

          // Create wallet state
          const wallet: Wallet = {
            address,
            provider,
            chain: 'starknet', // Mainnet, change to 'starknet-testnet' for Sepolia
            isConnected: true,
          };

          set({
            wallet,
            isConnecting: false,
            error: null,
          });

          // Fetch balances after connection
          await get().refreshBalances();

          // Listen for account changes
          walletObject.on('accountsChanged', (accounts: string[]) => {
            if (accounts.length === 0) {
              get().disconnect();
            } else {
              set((state) => ({
                wallet: state.wallet ? { ...state.wallet, address: accounts[0] } : null,
              }));
              get().refreshBalances();
            }
          });

          // Listen for network changes
          walletObject.on('networkChanged', () => {
            get().refreshBalances();
          });

        } catch (error) {
          const message = error instanceof Error ? error.message : 'Failed to connect wallet';
          set({
            error: message,
            isConnecting: false,
            wallet: null,
          });
          throw error;
        }
      },

      disconnect: () => {
        const { wallet } = get();
        if (wallet) {
          const walletObject = getWalletObject(wallet.provider);
          if (walletObject) {
            // Remove listeners
            walletObject.off('accountsChanged', () => {});
            walletObject.off('networkChanged', () => {});
          }
        }

        set({
          wallet: null,
          balances: [],
          transactions: [],
          error: null,
        });
      },

      refreshBalances: async () => {
        const { wallet } = get();
        if (!wallet) return;

        try {
          // Fetch SAGE token balance from coordinator API
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_COORDINATOR_URL || 'http://localhost:8080'}/api/v1/billing/escrow?wallet=${wallet.address}`
          );

          if (response.ok) {
            const data = await response.json();

            const sageBalance: TokenBalance = {
              token: 'SAGE',
              balance: (data.available || 0).toString(),
              balanceUSD: (data.available || 0) * 0.01, // Mock price
              symbol: 'SAGE',
              decimals: 18,
              icon: '/tokens/sage.svg',
            };

            set({ balances: [sageBalance] });
          }
        } catch (error) {
          console.error('Failed to refresh balances:', error);
        }
      },

      checkConnection: async () => {
        const { wallet } = get();
        if (!wallet) return;

        const walletObject = getWalletObject(wallet.provider);
        if (!walletObject) {
          get().disconnect();
          return;
        }

        // Check if still connected
        if (!walletObject.isConnected) {
          get().disconnect();
        }
      },

      signMessage: async (message: string): Promise<string> => {
        const { wallet } = get();
        if (!wallet) {
          throw new Error('Wallet not connected');
        }

        const walletObject = getWalletObject(wallet.provider);
        if (!walletObject) {
          throw new Error('Wallet provider not found');
        }

        try {
          // Sign message using wallet
          const signature = await walletObject.request({
            type: 'wallet_signTypedData',
            params: {
              message: {
                domain: {
                  name: 'BitSage Network',
                  version: '1',
                  chainId: '0x534e5f4d41494e', // SN_MAIN
                },
                primaryType: 'Message',
                types: {
                  Message: [
                    { name: 'content', type: 'felt' },
                  ],
                },
                message: {
                  content: message,
                },
              },
            },
          });

          return JSON.stringify(signature);
        } catch (error) {
          throw new Error(`Failed to sign message: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      },

      getProvider: (): StarknetWindowObject | null => {
        const { wallet } = get();
        if (!wallet) return null;
        return getWalletObject(wallet.provider);
      },
    }),
    {
      name: 'bitsage-wallet',
      partialize: (state) => ({
        wallet: state.wallet,
      }),
    }
  )
);

// Helper hooks
export const useWalletAddress = () => {
  const wallet = useWalletStore((state) => state.wallet);
  return wallet?.address || null;
};

export const useWalletConnected = () => {
  const wallet = useWalletStore((state) => state.wallet);
  return wallet?.isConnected || false;
};

export const useSageBalance = () => {
  const balances = useWalletStore((state) => state.balances);
  const sageBalance = balances.find((b) => b.token === 'SAGE');
  return sageBalance?.balance || '0';
};

export { formatAddress, isWalletInstalled, CONTRACTS };
