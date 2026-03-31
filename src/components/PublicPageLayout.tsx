'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

interface PublicPageLayoutProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function PublicPageLayout({
  children,
  className = "",
  dark = false,
}: PublicPageLayoutProps) {
  return (
    <>
      <Navigation dark={dark} />
      <main className={`min-h-screen ${dark ? 'bg-slate-950' : 'bg-white'} ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
