import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { MobileActionBar } from './MobileActionBar';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Allow page paint before scrolling to hash targets
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="flex min-h-dvh flex-col bg-ivory text-charcoal">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-sm focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-28 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
