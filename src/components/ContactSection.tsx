import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business } from '../data/business';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

export function ContactSection() {
  return (
    <section className="bg-sage/35 py-20 lg:py-28" id="contact">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="font-display text-3xl text-forest sm:text-4xl">
            Ready to Discuss Your Move?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/75">
            Call or message us to share your relocation details. We are based in
            Karmanghat and serve customers across Hyderabad.
          </p>

          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-terracotta uppercase">
                Business
              </dt>
              <dd className="mt-1.5 text-base text-forest">{business.name}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-terracotta uppercase">
                Address
              </dt>
              <dd className="mt-1.5 flex gap-2 text-charcoal/80">
                <MapPin size={16} className="mt-0.5 shrink-0 text-forest" aria-hidden />
                <span>{business.address.full}</span>
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-terracotta uppercase">
                Phone
              </dt>
              <dd className="mt-1.5">
                <a
                  href={business.phoneTel}
                  className="inline-flex items-center gap-2 text-base text-forest transition-colors hover:text-terracotta"
                >
                  <Phone size={16} aria-hidden />
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={business.phoneTel}>
              <Phone size={16} aria-hidden />
              Call Us
            </Button>
            <Button
              href={buildWhatsAppUrl(
                'Hello, I would like to discuss a moving enquiry.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
            >
              <MessageCircle size={16} aria-hidden />
              WhatsApp Us
            </Button>
            <Button
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              <Navigation size={16} aria-hidden />
              Get Directions
            </Button>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={80}>
          <div className="flex h-full flex-col justify-between rounded-sm border border-forest/10 bg-ivory p-8">
            <div>
              <h3 className="font-display text-2xl text-forest">
                Prefer to share details first?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                Use our quote form to prepare a WhatsApp message with your move
                details — name, locations, date, and requirements.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/contact#quote" className="w-full sm:w-auto">
                Open Quote Form
              </Button>
              <p className="mt-4 text-xs text-charcoal/55">
                Or visit the{' '}
                <Link to="/contact" className="underline underline-offset-2 hover:text-forest">
                  Contact page
                </Link>{' '}
                for full details.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
