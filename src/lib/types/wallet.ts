// Wallet & Web3 Types

export type WalletProvider = 'braavos' | 'argentx' | 'starknet';
export type PaymentToken = 'SAGE' | 'BTC' | 'USDT';
export type NetworkChain = 'starknet' | 'starknet-testnet';

export interface Wallet {
  address: string;
  provider: WalletProvider;
  chain: NetworkChain;
  ens?: string; // ENS name if available
  avatar?: string;
  isConnected: boolean;
}

export interface TokenBalance {
  token: PaymentToken;
  balance: string; // As string to handle big numbers
  balanceUSD: number;
  symbol: string;
  decimals: number;
  icon: string;
}

export interface Transaction {
  id: string;
  hash: string;
  type: 'deposit' | 'withdraw' | 'payment' | 'reward';
  token: PaymentToken;
  amount: string;
  amountUSD: number;
  from: string;
  to: string;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'failed';
  confirmations?: number;
  gasUsed?: string;
  gasFee?: string;
  explorerUrl: string;
}

export interface PaymentOption {
  token: PaymentToken;
  available: boolean;
  balance: string;
  estimatedCost: string;
  estimatedCostUSD: number;
  discount?: number; // % discount for using $SAGE
  icon: string;
}

export interface SmartContract {
  name: string;
  address: string;
  chain: NetworkChain;
  abi: any[]; // Contract ABI
}

export interface WalletState {
  wallet: Wallet | null;
  balances: TokenBalance[];
  transactions: Transaction[];
  isConnecting: boolean;
  error: string | null;
}

