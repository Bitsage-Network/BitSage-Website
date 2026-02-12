// User & Authentication Types

export interface User {
  id: string;

  // Traditional Auth (Primary)
  email: string;
  name: string;
  avatar?: string;
  emailVerified: boolean;
  createdAt: Date;
  authProvider?: 'email' | 'github' | 'google';
  
  // Wallet Connection (Optional, for payments)
  walletAddress?: string; // Starknet wallet (Braavos, ArgentX)
  walletConnectedAt?: Date;
  walletProvider?: 'braavos' | 'argentx' | 'starknet';
  
  // Reputation & Stats
  reputation: number; // 0-100
  totalJobs: number;
  totalSpent: number; // In USD
  
  // Plan & Features
  plan: 'free' | 'pro' | 'enterprise';
  features: string[];
  
  // API Access
  apiKeys: ApiKey[];
  
  // Preferences
  preferences: UserPreferences;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: Date;
  lastUsed?: Date;
  enabled: boolean;
  permissions: string[];
}

export interface UserPreferences {
  defaultPaymentToken: 'SAGE' | 'BTC' | 'USDT';
  defaultGpuTier: string;
  notifications: {
    email: boolean;
    jobComplete: boolean;
    jobFailed: boolean;
    lowBalance: boolean;
  };
  theme: 'light' | 'dark' | 'auto';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

