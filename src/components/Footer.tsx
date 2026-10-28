import { Link } from 'react-router-dom';
import { business, navLinks, serviceAreas, services } from '../data/business';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-ivory">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-start gap-3">
              <img
                src="/logo.svg"
                alt=""
                width={48}
                height={48}
                className="mt-0.5 h-12 w-12 shrink-0 rounded-sm"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="font-display text-2xl leading-snug text-ivory">
                  {business.shortName}
                </p>
                <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.2em] text-terracotta uppercase">
                  {business.tagline}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/75">
              Practical packing and relocation support for homes and offices in
              Hyderabad, based in Karmanghat.
            </p>
            <div className="mt-6 space-y-2 text-sm text-ivory/80">
              <a
                href={business.phoneTel}
                className="block transition-colors hover:text-ivory"
              >
                {business.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppUrl(
                  'Hello, I would like to enquire about packing and moving services.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-ivory"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-[0.65rem] font-semibold tracking-[0.18em] text-terracotta uppercase">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="transition-colors hover:text-ivory"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-[0.65rem] font-semibold tracking-[0.18em] text-terracotta uppercase">
              Services
            </p>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="transition-colors hover:text-ivory"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-[0.65rem] font-semibold tracking-[0.18em] text-terracotta uppercase">
              Service Areas
            </p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm text-ivory/80">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link
                    to="/service-areas"
                    className="transition-colors hover:text-ivory"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ivory/70">
              {business.address.full}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Based in Karmanghat, Hyderabad</p>
          <a
            href="https://vgrow.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            aria-label="Managed by vgrow.ai"
          >
            <span>Managed by</span>
            <img
              src="/images/vgrow-logo.png"
              alt="vgrow.ai"
              width={84}
              height={18}
              className="h-[18px] w-auto"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
