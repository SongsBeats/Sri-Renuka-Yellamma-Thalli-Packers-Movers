import { Clock } from 'lucide-react';
import { businessHours } from '../data/business';

type BusinessHoursProps = {
  className?: string;
  tone?: 'dark' | 'light';
};

export function BusinessHours({ className = '', tone = 'light' }: BusinessHoursProps) {
  const muted = tone === 'dark' ? 'text-ivory/75' : 'text-charcoal/80';
  const strong = tone === 'dark' ? 'text-ivory' : 'text-forest';
  return (
    <div className={className}>
      <p className={`flex items-center gap-2 text-sm font-medium ${strong}`}>
        <Clock size={15} aria-hidden />
        Business Hours
      </p>
      <ul className={`mt-2 space-y-1 text-sm ${muted}`}>
        {businessHours.rows.map((row) => (
          <li key={row.days} className="flex justify-between gap-6">
            <span>{row.days}</span>
            <span className="tabular-nums">{row.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
