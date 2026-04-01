'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    CiroChatbot?: {
      init: (config: {
        botId: string;
        apiKey: string;
        apiUrl: string;
        mode?: 'bubble' | 'bar';
        bottomOffset?: number;
      }) => void;
    };
  }
}

export function CiroChatWidget() {
  useEffect(() => {
    const botId = process.env.NEXT_PUBLIC_CIRO_BOT_ID;
    const apiKey = process.env.NEXT_PUBLIC_CIRO_API_KEY;
    const apiUrl = process.env.NEXT_PUBLIC_CIRO_API_URL;

    if (!botId || !apiKey || !apiUrl) return;

    // Don't load twice
    if (document.querySelector('script[src*="ciroai.us"]')) {
      if (window.CiroChatbot) {
        window.CiroChatbot.init({ botId, apiKey, apiUrl });
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://widget.ciroai.us/v1/chatbot.js';
    script.async = true;
    script.onload = () => {
      if (window.CiroChatbot) {
        window.CiroChatbot.init({ botId, apiKey, apiUrl });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup not strictly needed since the widget persists across navigations
    };
  }, []);

  return null;
}
