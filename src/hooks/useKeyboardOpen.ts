import { useEffect, useState } from 'react';

/** Detect mobile virtual keyboard to hide the fixed action bar. */
export function useKeyboardOpen(): boolean {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;

    const baseline = window.innerHeight;

    const onResize = () => {
      const shrink = baseline - viewport.height;
      setIsOpen(shrink > 120);
    };

    viewport.addEventListener('resize', onResize);
    return () => viewport.removeEventListener('resize', onResize);
  }, []);

  return isOpen;
}
