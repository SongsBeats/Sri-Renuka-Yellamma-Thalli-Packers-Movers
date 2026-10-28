import { useEffect, useRef, useState } from 'react';

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } =
    options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}
