import { ArrowUpRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { QuoteForm } from '../components/QuoteForm';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { Seo } from '../components/Seo';
import { business, services } from '../data/business';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Packing and Moving Services in Hyderabad | Home & Office Relocation"
        description="Home shifting, office relocation, packing, loading, and local moving services from Sri Renuka Yellamma Thalli Packers & Movers in Karmanghat, Hyderabad."
        path="/services"
      />

      <section className="border-b border-forest/10 bg-ivory py-14 lg:py-20">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'Services' },
            ]}
          />
          <SectionLabel>Our Services</SectionLabel>
          <h1 className="max-w-3xl font-display text-4xl text-forest sm:text-5xl">
            Packing and Moving Services in Hyderabad
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/75">
            Practical relocation support for homes and offices — from packing
            assistance to loading, transport, and unloading. Discuss your
            requirements by phone or WhatsApp.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site space-y-16">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={service.id}>
                <article
                  id={service.id}
                  className={`grid items-center gap-8 scroll-mt-28 lg:grid-cols-12 lg:gap-12 ${
                    reverse ? '' : ''
                  }`}
                >
                  {service.image ? (
                    <div
                      className={`overflow-hidden rounded-sm lg:col-span-5 ${
                        reverse ? 'lg:order-2' : ''
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={`${service.title} services in Hyderabad`}
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex aspect-[4/3] items-end rounded-sm bg-sage/50 p-8 lg:col-span-5 ${
                        reverse ? 'lg:order-2' : ''
                      }`}
                    >
                      <p className="font-display text-6xl text-forest/25">
                        {service.number}
                      </p>
                    </div>
                  )}

                  <div
                    className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}
                  >
                    <p className="text-[0.7rem] tracking-[0.18em] text-terracotta uppercase">
                      Service {service.number}
                    </p>
                    <h2 className="mt-3 font-display text-3xl text-forest">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/75">
                      {service.description}
                    </p>
                    <a
                      href={buildWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-forest uppercase underline-offset-4 hover:underline"
                    >
                      Discuss Your Move
                      <ArrowUpRight size={14} aria-hidden />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-forest py-16 text-ivory">
        <div className="container-site flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mt-2 max-w-lg text-ivory/75">
              Share your move details and we can help you understand the right
              support for your relocation.
            </p>
          </div>
          <Button href={business.phoneTel} variant="accent">
            Call {business.phoneDisplay}
          </Button>
        </div>
      </section>

      <QuoteForm />
    </>
  );
}
