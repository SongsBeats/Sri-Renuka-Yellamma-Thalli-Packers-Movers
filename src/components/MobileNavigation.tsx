import { NavLink } from 'react-router-dom';
import { business, navLinks } from '../data/business';
import { Button } from './Button';

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  return (
    <div
      id="mobile-navigation"
      className={`fixed inset-x-0 top-[4.25rem] bottom-0 z-40 bg-ivory transition-[visibility,opacity,transform] duration-300 lg:hidden ${
        open
          ? 'visible translate-y-0 opacity-100'
          : 'invisible -translate-y-2 opacity-0 pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      <nav
        className="container-site flex h-full flex-col gap-1 overflow-y-auto py-8 pb-28"
        aria-label="Mobile"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              [
                'border-b border-forest/10 py-4 text-lg font-medium text-charcoal transition-colors',
                isActive ? 'text-forest' : 'hover:text-forest',
              ].join(' ')
            }
            end={link.path === '/'}
          >
            {link.label}
          </NavLink>
        ))}

        <div className="mt-8 flex flex-col gap-3">
          <Button to="/contact#quote" onClick={onClose}>
            Get a Quote
          </Button>
          <Button href={business.phoneTel} variant="outline" onClick={onClose}>
            Call {business.phoneDisplay}
          </Button>
        </div>
      </nav>
    </div>
  );
}
