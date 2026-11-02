import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { business, galleryImages } from '../data/business';
import { Lightbox } from './Lightbox';
import { SectionLabel } from './SectionLabel';

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  const renderSet = (hidden: boolean) =>
    galleryImages.map((image, i) => (
      <li key={`${hidden ? 'dup' : 'main'}-${image.id}`} className="shrink-0" aria-hidden={hidden || undefined}>
        <button
          type="button"
          onClick={() => setActive(i)}
          tabIndex={hidden ? -1 : 0}
          className="group relative block h-52 overflow-hidden rounded-sm bg-sage/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 sm:h-64 lg:h-72"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
          aria-label={`View photo: ${image.caption}`}
        >
          <img
            src={image.src}
            alt={hidden ? '' : image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent px-3 pt-8 pb-2.5 text-left text-xs text-ivory">
            {image.caption}
          </span>
        </button>
      </li>
    ));

  return (
    <section className="bg-ivory py-20 lg:py-28" id="gallery" aria-labelledby="gallery-heading">
      <div className="container-site">
        <SectionLabel>Our Work &amp; Fleet</SectionLabel>
        <h2 id="gallery-heading" className="max-w-2xl font-display text-3xl text-forest sm:text-4xl">
          See Our Trucks, Packing Materials and Office
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/75">
          Real photos from {business.name} in {business.locality}, {business.city}.
        </p>
      </div>

      <div className="marquee mt-10" aria-roledescription="carousel" aria-label="Photos of our work and fleet">
        <ul className="marquee-track">
          {renderSet(false)}
          {renderSet(true)}
        </ul>
      </div>

      <div className="container-site mt-8">
        <Link
          to="/gallery"
          className="text-sm font-medium text-forest underline underline-offset-4 hover:text-terracotta"
        >
          View the full gallery
        </Link>
      </div>

      <Lightbox images={galleryImages} index={active} onClose={close} onChange={setActive} />
    </section>
  );
}
