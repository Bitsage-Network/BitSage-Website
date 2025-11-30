import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingChat } from "@/components/FloatingChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bitsage.network'),
  title: "BitSage | Decentralized GPU Compute Network",
  description: "Access professional GPU compute power for rendering, AI training, and game development. Powered by Sage AI assistants and the $SAGE token.",
  keywords: ["GPU compute", "decentralized", "rendering", "AI training", "machine learning", "blockchain", "SAGE token"],
  authors: [{ name: "BitSage Network" }],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "BitSage | Decentralized GPU Compute Network",
    description: "Professional GPU compute for creators, developers, and AI builders",
    type: "website",
    siteName: "BitSage Network",
    images: [
      {
            url: '/bitsage-hero-social.svg',
        width: 1216,
        height: 640,
        alt: 'BitSage Network - Decentralized GPU Compute Network',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BitSage | Decentralized GPU Compute Network",
    description: "Professional GPU compute for creators, developers, and AI builders",
    images: ['/bitsage-hero-social.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
