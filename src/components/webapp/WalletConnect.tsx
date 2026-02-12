'use client';

import { useState } from 'react';
import { useWalletStore, formatAddress, isWalletInstalled } from '@/store/walletStore';

interface WalletConnectProps {
  className?: string;
  showBalance?: boolean;
}

export function WalletConnect({ className = '', showBalance = true }: WalletConnectProps) {
  const { wallet, balances, isConnecting, error, connect, disconnect } = useWalletStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showWalletPicker, setShowWalletPicker] = useState(false);

  const sageBalance = balances.find((b) => b.token === 'SAGE')?.balance || '0';

  const handleConnect = async (provider: 'braavos' | 'argentx') => {
    try {
      await connect(provider);
      setShowWalletPicker(false);
    } catch (err) {
      console.error('Connection error:', err);
    }
  };

  if (wallet?.isConnected) {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition-colors"
        >
          {/* Wallet icon */}
          <div className="w-2 h-2 rounded-full bg-green-500" />

          {showBalance && (
            <span className="text-sm font-medium text-white">
              {Number(sageBalance).toLocaleString()} SAGE
            </span>
          )}

          <span className="text-sm text-gray-400">
            {formatAddress(wallet.address)}
          </span>

          <svg
            className={`w-4 h-4 text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg border border-gray-600 shadow-xl z-50">
            <div className="p-4 border-b border-gray-700">
              <p className="text-xs text-gray-400 mb-1">Connected with {wallet.provider}</p>
              <p className="text-sm font-mono text-white break-all">{wallet.address}</p>
            </div>

            {showBalance && (
              <div className="p-4 border-b border-gray-700">
                <p className="text-xs text-gray-400 mb-1">SAGE Balance</p>
                <p className="text-lg font-bold text-white">
                  {Number(sageBalance).toLocaleString()} SAGE
                </p>
              </div>
            )}

            <div className="p-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(wallet.address);
                  setShowDropdown(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Address
              </button>

              <a
                href={`https://sepolia.starkscan.co/contract/${wallet.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View on Explorer
              </a>

              <button
                onClick={() => {
                  disconnect();
                  setShowDropdown(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Disconnect
              </button>
            </div>
          </div>
        )}

        {/* Click outside to close */}
        {showDropdown && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowDropdown(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setShowWalletPicker(true)}
        disabled={isConnecting}
        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 disabled:cursor-not-allowed rounded-lg font-medium text-white transition-colors"
      >
        {isConnecting ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Connecting...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Connect Wallet
          </>
        )}
      </button>

      {/* Wallet picker modal */}
      {showWalletPicker && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => setShowWalletPicker(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-xl border border-gray-600 shadow-2xl w-full max-w-md">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Connect Wallet</h3>
                <button
                  onClick={() => setShowWalletPicker(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-4 space-y-3">
                {/* Braavos */}
                <button
                  onClick={() => handleConnect('braavos')}
                  disabled={isConnecting}
                  className="w-full flex items-center gap-4 p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg border border-gray-600 transition-colors disabled:opacity-50"
                >
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-white">Braavos</p>
                    <p className="text-sm text-gray-400">
                      {isWalletInstalled('braavos') ? 'Detected' : 'Not installed'}
                    </p>
                  </div>
                  {isWalletInstalled('braavos') && (
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  )}
                </button>

                {/* ArgentX */}
                <button
                  onClick={() => handleConnect('argentx')}
                  disabled={isConnecting}
                  className="w-full flex items-center gap-4 p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg border border-gray-600 transition-colors disabled:opacity-50"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-white">ArgentX</p>
                    <p className="text-sm text-gray-400">
                      {isWalletInstalled('argentx') ? 'Detected' : 'Not installed'}
                    </p>
                  </div>
                  {isWalletInstalled('argentx') && (
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  )}
                </button>
              </div>

              {error && (
                <div className="px-4 pb-4">
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                </div>
              )}

              <div className="p-4 border-t border-gray-700">
                <p className="text-xs text-gray-400 text-center">
                  By connecting, you agree to our Terms of Service
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WalletConnect;
