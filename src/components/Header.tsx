import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data/business';
import { BrandMark } from './BrandMark';
import { Button } from './Button';
import { MobileNavigation } from './MobileNavigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-forest/10 bg-ivory/95 shadow-[0_1px_0_rgba(25,61,50,0.06)] backdrop-blur-md'
          : 'border-transparent bg-ivory'
      }`}
    >
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-4 lg:h-[4.75rem]">
        <BrandMark />

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                [
                  'nav-link text-[0.8rem] font-medium tracking-[0.04em] text-charcoal/80 transition-colors hover:text-forest',
                  isActive ? 'is-active text-forest' : '',
                ].join(' ')
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/contact#quote" size="sm" className="hidden sm:inline-flex">
            Get a Quote
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-forest transition-colors hover:bg-sage/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
