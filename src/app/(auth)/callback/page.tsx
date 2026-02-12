'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { Zap, Loader2, CheckCircle, XCircle } from 'lucide-react';

export default function AuthCallbackPage() {
  const router = useRouter();
  const { loginWithOAuth } = useAuthStore();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const processCallback = async () => {
      try {
        // Fetch session data from the API
        const response = await fetch('/api/auth/session');

        if (!response.ok) {
          throw new Error('Failed to fetch session');
        }

        const sessionData = await response.json();

        if (!sessionData.user) {
          throw new Error('No user data in session');
        }

        // Update auth store with OAuth user
        await loginWithOAuth(sessionData.user);

        setStatus('success');

        // Redirect to dashboard after brief delay
        setTimeout(() => {
          router.push('/dashboard/jobs');
        }, 1000);
      } catch (error) {
        console.error('Auth callback error:', error);
        setStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'Authentication failed');

        // Redirect to login after brief delay
        setTimeout(() => {
          router.push('/login?error=auth_failed');
        }, 2000);
      }
    };

    processCallback();
  }, [loginWithOAuth, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">BitSage</h1>
        </div>

        {/* Status Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
          {status === 'loading' && (
            <>
              <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">
                Completing Sign In
              </h2>
              <p className="text-slate-400">
                Please wait while we verify your authentication...
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">
                Welcome to BitSage!
              </h2>
              <p className="text-slate-400">
                Redirecting you to the dashboard...
              </p>
            </>
          )}

          {status === 'error' && (
            <>
              <XCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">
                Authentication Failed
              </h2>
              <p className="text-red-300 mb-2">{errorMessage}</p>
              <p className="text-slate-400">
                Redirecting you back to login...
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
