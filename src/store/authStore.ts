// Authentication Store (Email/Password)

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, AuthState } from '@/lib/types/user';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  linkWallet: (walletAddress: string, provider: 'braavos' | 'argentx' | 'starknet') => void;
  error: string | null;
  clearError: () => void;
}

// Mock API delay
const mockDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock authentication function
const mockLogin = async (email: string, password: string): Promise<User> => {
  await mockDelay(800); // Simulate API call
  
  // Simple validation
  if (!email.includes('@')) {
    throw new Error('Invalid email address');
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }
  
  // Mock user data
  return {
    id: `user_${Date.now()}`,
    email,
    name: email.split('@')[0],
    emailVerified: true,
    createdAt: new Date(),
    reputation: 85,
    totalJobs: 12,
    totalSpent: 450.00,
    plan: 'free',
    features: ['basic-gpu', 'template-access', 'sage-chat'],
    apiKeys: [],
    preferences: {
      defaultPaymentToken: 'SAGE',
      defaultGpuTier: 'RTX-4090',
      notifications: {
        email: true,
        jobComplete: true,
        jobFailed: true,
        lowBalance: true,
      },
      theme: 'dark',
    },
  };
};

const mockSignup = async (email: string, password: string, name: string): Promise<User> => {
  await mockDelay(1000); // Simulate API call
  
  // Validation
  if (!email.includes('@')) {
    throw new Error('Invalid email address');
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }
  if (name.length < 2) {
    throw new Error('Name must be at least 2 characters');
  }
  
  // Mock new user
  return {
    id: `user_${Date.now()}`,
    email,
    name,
    emailVerified: false,
    createdAt: new Date(),
    reputation: 0,
    totalJobs: 0,
    totalSpent: 0,
    plan: 'free',
    features: ['basic-gpu', 'template-access'],
    apiKeys: [],
    preferences: {
      defaultPaymentToken: 'SAGE',
      defaultGpuTier: 'RTX-4090',
      notifications: {
        email: true,
        jobComplete: true,
        jobFailed: true,
        lowBalance: true,
      },
      theme: 'dark',
    },
  };
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        
        try {
          const user = await mockLogin(email, password);
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Login failed',
            isLoading: false,
          });
          throw error;
        }
      },

      signup: async (email: string, password: string, name: string) => {
        set({ isLoading: true, error: null });
        
        try {
          const user = await mockSignup(email, password, name);
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Signup failed',
            isLoading: false,
          });
          throw error;
        }
      },

      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false,
          error: null,
        });
      },

      updateUser: (updates: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, ...updates } });
        }
      },

      linkWallet: (walletAddress: string, provider: 'braavos' | 'argentx' | 'starknet') => {
        const currentUser = get().user;
        if (currentUser) {
          set({ 
            user: { 
              ...currentUser, 
              walletAddress,
              walletProvider: provider,
              walletConnectedAt: new Date(),
            } 
          });
        }
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'bitsage-auth',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

