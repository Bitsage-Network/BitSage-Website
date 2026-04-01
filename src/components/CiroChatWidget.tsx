'use client';

import Script from 'next/script';

const BOT_ID = process.env.NEXT_PUBLIC_CIRO_BOT_ID || '3';
const API_KEY = process.env.NEXT_PUBLIC_CIRO_API_KEY || 'ck_live_b876c468a5cfa3dedfc7bd5c4c68d8192f43adca7c7e9f2df1201e09d54f408f';
const API_URL = process.env.NEXT_PUBLIC_CIRO_API_URL || 'https://api.ciroai.us';

export function CiroChatWidget() {
  return (
    <>
      <Script
        src="https://widget.ciroai.us/v1/chatbot.js"
        strategy="afterInteractive"
      />
      <Script
        id="ciro-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function initCiro() {
              if (typeof window.CiroChatbot !== 'undefined') {
                window.CiroChatbot.init({
                  botId: '${BOT_ID}',
                  apiKey: '${API_KEY}',
                  apiUrl: '${API_URL}'
                });
              } else {
                setTimeout(initCiro, 500);
              }
            })();
          `,
        }}
      />
    </>
  );
}
