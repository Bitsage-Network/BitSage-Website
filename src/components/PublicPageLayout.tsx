'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FloatingChat } from '@/components/FloatingChat';
import { AnnouncementBanner } from '@/components/AnnouncementBanner';

interface PublicPageLayoutProps {
  children: React.ReactNode;
  showAnnouncementBanner?: boolean;
  className?: string;
}

export function PublicPageLayout({ 
  children, 
  showAnnouncementBanner = false,
  className = ""
}: PublicPageLayoutProps) {
  return (
    <>
      {showAnnouncementBanner && <AnnouncementBanner />}
      <Navigation />
      <main className={`min-h-screen ${className}`}>
        {children}
      </main>
      <Footer />
      <FloatingChat />
    </>
  );
}
