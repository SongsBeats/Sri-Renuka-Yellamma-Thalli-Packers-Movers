import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { GalleryImage } from '../data/business';

type LightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;
  const count = images.length;

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowRight') onChange((index + 1) % count);
      else if (event.key === 'ArrowLeft') onChange((index - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, index, count, onClose, onChange]);

  if (index === null) return null;
  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-charcoal/90 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory/15 text-ivory transition-colors hover:bg-ivory/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
        aria-label="Close photo"
      >
        <X size={22} aria-hidden />
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index - 1 + count) % count);
            }}
            className="absolute top-1/2 left-2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/15 text-ivory transition-colors hover:bg-ivory/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory sm:left-5"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index + 1) % count);
            }}
            className="absolute top-1/2 right-2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/15 text-ivory transition-colors hover:bg-ivory/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory sm:right-5"
            aria-label="Next photo"
          >
            <ChevronRight size={24} aria-hidden />
          </button>
        </>
      )}

      <figure
        className="flex max-h-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="max-h-[78dvh] w-auto max-w-full rounded-sm object-contain"
          decoding="async"
        />
        <figcaption className="mt-3 text-center text-sm text-ivory/85">
          {image.caption}
          <span className="ml-2 text-ivory/50 tabular-nums">
            {index + 1} / {count}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
