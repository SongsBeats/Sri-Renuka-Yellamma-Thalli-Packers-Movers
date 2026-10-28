import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isInView ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
