// Sage AI Assistant Types

export type SageType = 'render' | 'compute' | 'game' | 'studio';

export interface Sage {
  id: SageType;
  name: string;
  title: string;
  description: string;
  avatar: string;
  specialty: string[];
  personality: string;
  color: string; // Hex color for UI theme
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'sage';
  content: string;
  timestamp: Date;
  sageType?: SageType;
  attachments?: ChatAttachment[];
  codeBlocks?: CodeBlock[];
}

export interface ChatAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
}

export interface CodeBlock {
  language: string;
  code: string;
}

export interface ChatSession {
  id: string;
  sageType: SageType;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
  context?: ChatContext;
}

export interface ChatContext {
  currentJob?: string; // Job ID
  files?: string[]; // File IDs
  codebase?: string; // Project context
}

