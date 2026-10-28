import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export type Crumb = {
  label: string;
  path?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-charcoal/60">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight size={12} className="text-charcoal/35" aria-hidden />
              )}
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="transition-colors hover:text-forest"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-charcoal/80' : undefined}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
