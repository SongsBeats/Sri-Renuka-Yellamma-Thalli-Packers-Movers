import { MessageCircle, Phone } from 'lucide-react';
import { business } from '../data/business';
import { useKeyboardOpen } from '../hooks/useKeyboardOpen';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function MobileActionBar() {
  const keyboardOpen = useKeyboardOpen();

  if (keyboardOpen) return null;

  return (
    <div
      className="pointer-events-none fixed right-3 z-40 flex w-auto flex-col items-end gap-2 md:hidden"
      style={{
        bottom: 'calc(0.85rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <a
        href={business.phoneTel}
        className="pointer-events-auto flex w-[11.75rem] items-center justify-end gap-2 rounded-sm bg-forest py-2.5 pr-2.5 pl-3 shadow-[0_10px_24px_-10px_rgba(25,61,50,0.7)] transition-colors hover:bg-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
        aria-label={`Call ${business.phoneDisplay}`}
      >
        <span className="min-w-0 text-right">
          <span className="block text-[0.58rem] font-semibold tracking-[0.12em] text-ivory/70 uppercase">
            Call Now
          </span>
          <span className="mt-0.5 block text-[0.8rem] font-semibold tabular-nums leading-none text-ivory">
            {business.phoneDisplay}
          </span>
        </span>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-ivory/15 text-ivory">
          <Phone size={16} strokeWidth={1.75} aria-hidden />
        </span>
      </a>

      <a
        href={buildWhatsAppUrl(
          'Hello, I would like to enquire about packing and moving services with Sri Renuka Yellamma Thalli Packers & Movers.',
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex w-[11.75rem] items-center justify-end gap-2 rounded-sm bg-terracotta py-2.5 pr-2.5 pl-3 shadow-[0_10px_24px_-10px_rgba(196,106,72,0.6)] transition-colors hover:bg-terracotta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
        aria-label={`WhatsApp ${business.phoneDisplay}`}
      >
        <span className="min-w-0 text-right">
          <span className="block text-[0.58rem] font-semibold tracking-[0.12em] text-white/75 uppercase">
            WhatsApp
          </span>
          <span className="mt-0.5 block text-[0.8rem] font-semibold tabular-nums leading-none text-white">
            {business.phoneDisplay}
          </span>
        </span>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-white/15 text-white">
          <MessageCircle size={16} strokeWidth={1.75} aria-hidden />
        </span>
      </a>
    </div>
  );
}
