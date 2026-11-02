import { Navigation } from 'lucide-react';
import { business } from '../data/business';

type MapEmbedProps = {
  className?: string;
};

export function MapEmbed({ className = '' }: MapEmbedProps) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-sm border border-forest/10 bg-sage/30">
        <iframe
          title={`Map showing the location of ${business.name}, ${business.address.full}`}
          src={business.mapEmbedUrl}
          className="block h-72 w-full border-0 sm:h-80 lg:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={business.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-forest underline-offset-2 hover:text-terracotta hover:underline"
      >
        <Navigation size={15} aria-hidden />
        Open in Google Maps
      </a>
    </div>
  );
}
