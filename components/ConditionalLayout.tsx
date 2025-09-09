'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isProfilePage = pathname.startsWith('/profile');
  const isBlogDetailPage = pathname.startsWith('/blog/') && pathname !== '/blog';

  if (isProfilePage || isBlogDetailPage) {
    // For profile pages and blog detail pages, only render children (no navbar, no footer)
    return <>{children}</>;
  }

  // For all other pages, render with navbar and footer
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-8 transition-all duration-300 ease-in-out" id="main-content">
        {children}
      </main>
      <div className="mt-4 sm:mt-6">
        <Footer />
      </div>
    </>
  );
}
