import { useCallback, useState } from 'react';
import { galleryImages } from '../data/business';
import { Lightbox } from './Lightbox';
import { Reveal } from './Reveal';

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, i) => (
          <li key={image.id} className={i === 1 ? 'sm:col-span-2' : ''}>
            <Reveal delay={i * 50}>
              <figure>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="group block w-full overflow-hidden rounded-sm bg-sage/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
                  aria-label={`View photo: ${image.caption}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      i === 1 ? 'aspect-[16/7]' : 'aspect-[4/3]'
                    }`}
                  />
                </button>
                <figcaption className="mt-2.5 text-sm text-charcoal/75">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
      <Lightbox images={galleryImages} index={active} onClose={close} onChange={setActive} />
    </>
  );
}
