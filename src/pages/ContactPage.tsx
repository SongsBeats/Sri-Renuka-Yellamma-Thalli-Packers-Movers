import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { QuoteForm } from '../components/QuoteForm';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { Seo, localBusinessJsonLd } from '../components/Seo';
import { business } from '../data/business';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us | Packers and Movers in Karmanghat, Hyderabad"
        description="Contact Sri Renuka Yellamma Thalli Packers & Movers in Karmanghat, Hyderabad. Call +91 77994 51430 or request a quote on WhatsApp."
        path="/contact"
        jsonLd={localBusinessJsonLd()}
      />

      <section className="border-b border-forest/10 bg-ivory py-14 lg:py-20">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'Contact' },
            ]}
          />
          <SectionLabel>Contact</SectionLabel>
          <h1 className="max-w-3xl font-display text-4xl text-forest sm:text-5xl">
            Let&apos;s Make Your Next Move Easier.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/75">
            Reach us by phone or WhatsApp to discuss your relocation. You can
            also prepare a quote message using the form below.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="rounded-sm border border-forest/10 bg-sage/30 p-8">
              <h2 className="font-display text-2xl text-forest">
                {business.name}
              </h2>

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-terracotta uppercase">
                    Address
                  </dt>
                  <dd className="mt-2 flex gap-2 text-sm leading-relaxed text-charcoal/80">
                    <MapPin
                      size={16}
                      className="mt-0.5 shrink-0 text-forest"
                      aria-hidden
                    />
                    {business.address.full}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-terracotta uppercase">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={business.phoneTel}
                      className="inline-flex items-center gap-2 text-forest hover:text-terracotta"
                    >
                      <Phone size={16} aria-hidden />
                      {business.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3">
                <Button href={business.phoneTel}>
                  <Phone size={16} aria-hidden />
                  Call Us
                </Button>
                <Button
                  href={buildWhatsAppUrl(
                    'Hello, I would like to discuss a moving enquiry with Sri Renuka Yellamma Thalli Packers & Movers.',
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

              <p className="mt-6 text-xs leading-relaxed text-charcoal/55">
                Business hours are available on request. Please call or message
                to confirm availability for your preferred moving date.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={80}>
            <div className="overflow-hidden rounded-sm">
              <img
                src="/images/hero-moving.jpg"
                alt="Moving truck and packed belongings ready for relocation in Hyderabad"
                className="aspect-[16/11] w-full object-cover"
                loading="lazy"
                width={1000}
                height={688}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <QuoteForm />
    </>
  );
}
