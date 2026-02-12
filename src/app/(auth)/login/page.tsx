'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Github, Chrome, Wallet, ArrowRight, Zap, Shield, Eye, EyeOff, X } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useWalletStore } from '@/store/walletStore';

// OAuth error messages
const OAUTH_ERRORS: Record<string, string> = {
  github_not_configured: 'GitHub authentication is not configured. Please contact support.',
  missing_code: 'Authentication failed. Please try again.',
  invalid_state: 'Security verification failed. Please try again.',
  oauth_failed: 'Authentication failed. Please try again.',
  auth_failed: 'Could not complete authentication. Please try again.',
  no_verified_email: 'Please verify your GitHub email address and try again.',
  access_denied: 'Authentication was cancelled.',
};

// Wallet selection modal component
function WalletModal({
  isOpen,
  onClose,
  onSelectWallet,
  isConnecting,
  walletError
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelectWallet: (provider: 'braavos' | 'argentx') => void;
  isConnecting: boolean;
  walletError: string | null;
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 border border-white/20 rounded-2xl p-6 w-full max-w-md shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Connect Wallet</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              disabled={isConnecting}
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {walletError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm"
            >
              {walletError}
            </motion.div>
          )}

          <p className="text-slate-400 text-sm mb-4">
            Select a wallet to connect. You'll be asked to sign a message to verify ownership.
          </p>

          <div className="space-y-3">
            <button
              onClick={() => onSelectWallet('braavos')}
              disabled={isConnecting}
              className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🦊</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Braavos</p>
                <p className="text-sm text-slate-400">Smart Contract Wallet</p>
              </div>
              {isConnecting && (
                <div className="ml-auto w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
            </button>

            <button
              onClick={() => onSelectWallet('argentx')}
              disabled={isConnecting}
              className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-400 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">ArgentX</p>
                <p className="text-sm text-slate-400">Security-First Wallet</p>
              </div>
              {isConnecting && (
                <div className="ml-auto w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
            </button>
          </div>

          <p className="text-xs text-slate-500 text-center mt-4">
            Don't have a wallet?{' '}
            <a
              href="https://braavos.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Get Braavos
            </a>
            {' '}or{' '}
            <a
              href="https://www.argent.xyz/argent-x/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Get ArgentX
            </a>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Wrapper component to handle search params
function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, isLoading, error, clearError } = useAuthStore();
  const { connect, signMessage, wallet, isConnecting, error: walletStoreError } = useWalletStore();
  const [oauthError, setOauthError] = useState<string | null>(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [walletError, setWalletError] = useState<string | null>(null);

  // Check for OAuth errors in URL
  useEffect(() => {
    const errorParam = searchParams.get('error');
    if (errorParam) {
      setOauthError(OAUTH_ERRORS[errorParam] || `Authentication error: ${errorParam}`);
      // Clear the error from URL without navigation
      window.history.replaceState({}, '', '/login');
    }
  }, [searchParams]);

  // Handle wallet connection and signature
  const handleWalletConnect = async (provider: 'braavos' | 'argentx') => {
    setWalletError(null);

    try {
      // Step 1: Connect wallet (triggers wallet popup)
      await connect(provider);

      // Step 2: Request signature to verify ownership
      const message = `Sign this message to verify your wallet ownership for BitSage Network.\n\nTimestamp: ${Date.now()}`;

      try {
        await signMessage(message);

        // Step 3: Success - navigate to dashboard
        setShowWalletModal(false);
        router.push('/dashboard/jobs');
      } catch (signError) {
        // User rejected signature or error occurred
        const errorMessage = signError instanceof Error ? signError.message : 'Signature rejected';
        setWalletError(`Signature verification failed: ${errorMessage}`);
      }
    } catch (connectError) {
      const errorMessage = connectError instanceof Error ? connectError.message : 'Failed to connect wallet';
      setWalletError(errorMessage);
    }
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    try {
      await login(formData.email, formData.password);
      // Redirect to dashboard on successful login
      router.push('/dashboard/jobs');
    } catch (err) {
      // Error is handled by the store
      console.error('Login error:', err);
    }
  };

  const handleSocialLogin = (provider: string) => {
    clearError();

    switch (provider) {
      case 'GitHub':
        // Redirect to GitHub OAuth
        window.location.href = '/api/auth/github';
        break;
      case 'Google':
        // Google OAuth not yet implemented
        alert('Google login coming soon! Use GitHub or email for now.');
        break;
      case 'Wallet':
        // Show wallet selection modal
        setWalletError(null);
        setShowWalletModal(true);
        break;
      default:
        alert(`${provider} login not available`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Login Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">BitSage</h1>
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-slate-400">Sign in to access your compute dashboard</p>
        </div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl"
        >
          {/* Error Message */}
          {(error || oauthError) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm"
            >
              {oauthError || error}
              {oauthError && (
                <button
                  onClick={() => setOauthError(null)}
                  className="ml-2 text-red-300 hover:text-white underline"
                >
                  Dismiss
                </button>
              )}
            </motion.div>
          )}

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white hover:bg-slate-50 text-slate-800 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
            >
              <Chrome className="w-5 h-5" />
              Continue with Google
            </button>
            <button
              onClick={() => handleSocialLogin('GitHub')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
            <button
              onClick={() => handleSocialLogin('Wallet')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
            >
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-slate-400 bg-transparent">Or continue with email</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-11 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0"
                />
                <span className="text-slate-300">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Security Badge */}
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Shield className="w-4 h-4" />
            <span>Secured by TEE & Zero-Knowledge Proofs</span>
          </div>
        </motion.div>

        {/* Sign Up Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-slate-400">
            Don't have an account?{' '}
            <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
              Sign up for free
            </Link>
          </p>
        </motion.div>

        {/* Demo Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-center"
        >
          <p className="text-sm text-cyan-200">
            <strong>Demo Mode:</strong> Use any email and password (6+ characters) to test
          </p>
        </motion.div>
      </motion.div>

      {/* Wallet Selection Modal */}
      <WalletModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onSelectWallet={handleWalletConnect}
        isConnecting={isConnecting}
        walletError={walletError}
      />
    </div>
  );
}

// Main export with Suspense boundary for useSearchParams
export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
