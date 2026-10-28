import { Link } from 'react-router-dom';
import { business } from '../data/business';

type BrandMarkProps = {
  className?: string;
  onClick?: () => void;
};

export function BrandMark({ className = '', onClick }: BrandMarkProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 sm:gap-3 ${className}`}
      aria-label={`${business.name} — Home`}
    >
      <img
        src="/logo.svg"
        alt=""
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 rounded-[0.35rem] shadow-[0_1px_0_rgba(25,61,50,0.12)] sm:h-11 sm:w-11"
        decoding="async"
      />
      <span className="min-w-0">
        <span className="block font-display text-[0.92rem] leading-tight text-forest transition-colors group-hover:text-forest-deep sm:text-[1.08rem]">
          {business.shortName}
        </span>
        <span className="mt-0.5 block text-[0.56rem] font-semibold tracking-[0.16em] text-terracotta uppercase sm:text-[0.62rem] sm:tracking-[0.2em]">
          {business.tagline}
        </span>
      </span>
    </Link>
  );
}
