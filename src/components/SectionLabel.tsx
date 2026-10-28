type SectionLabelProps = {
  children: string;
  tone?: 'dark' | 'light' | 'ivory';
};

export function SectionLabel({ children, tone = 'dark' }: SectionLabelProps) {
  const color =
    tone === 'light'
      ? 'text-ivory/70'
      : tone === 'ivory'
        ? 'text-forest/70'
        : 'text-terracotta';

  return (
    <p
      className={`mb-4 text-[0.7rem] font-medium tracking-[0.22em] uppercase ${color}`}
    >
      {children}
    </p>
  );
}
