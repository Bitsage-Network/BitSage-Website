import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/Toast";

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
  title: "BitSage | Verifiable GPU Cloud",
  description: "Run AI on GPUs you can verify. Hardware-secured compute with TEE enclaves, cryptographic proofs, and enterprise-grade privacy.",
  keywords: ["GPU compute", "verifiable AI", "TEE", "confidential computing", "GPU cloud", "AI inference", "zero knowledge proofs"],
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
    title: "BitSage | Verifiable GPU Cloud",
    description: "Run AI on GPUs you can verify. Hardware-secured compute with enterprise-grade privacy.",
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
    title: "BitSage | Verifiable GPU Cloud",
    description: "Run AI on GPUs you can verify. Hardware-secured compute with enterprise-grade privacy.",
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
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
