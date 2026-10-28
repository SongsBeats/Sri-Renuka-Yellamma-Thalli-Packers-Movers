import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { Seo } from '../components/Seo';
import { business, serviceAreas } from '../data/business';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function ServiceAreasPage() {
  return (
    <>
      <Seo
        title="Service Areas | Packers and Movers in Karmanghat & Hyderabad"
        description="Packers and movers serving Karmanghat, LB Nagar, Dilsukhnagar, Vanasthalipuram, and surrounding areas of Hyderabad. Check service availability."
        path="/service-areas"
      />

      <section className="border-b border-forest/10 bg-ivory py-14 lg:py-20">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'Service Areas' },
            ]}
          />
          <SectionLabel>Where We Operate</SectionLabel>
          <h1 className="max-w-3xl font-display text-4xl text-forest sm:text-5xl">
            Packers and Movers Across Hyderabad
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/75">
            Based in Karmanghat, we support local relocation within Hyderabad
            and nearby neighbourhoods. Coverage can vary by route and schedule —
            please confirm availability for your specific locations.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <h2 className="font-display text-2xl text-forest sm:text-3xl">
              Neighbourhoods We Commonly Serve
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal/70">
              These areas are near our base in Tapovan Colony, Karmanghat.
              Contact us to check if we can support your exact route.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-forest/10 bg-forest/10 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, index) => (
              <Reveal key={area} delay={(index % 6) * 40}>
                <li className="flex items-center justify-between bg-ivory px-5 py-5">
                  <span className="font-medium text-forest">{area}</span>
                  <span className="text-[0.65rem] tracking-[0.14em] text-charcoal/40 uppercase">
                    Hyderabad
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 grid gap-8 rounded-sm bg-sage/45 p-8 lg:grid-cols-2 lg:p-10">
            <div>
              <h2 className="font-display text-2xl text-forest">
                Check Service Availability
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                Tell us where you are moving from and to. We will confirm whether
                we can support your relocation and discuss the next steps.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:items-center lg:justify-end">
              <Button
                href={buildWhatsAppUrl(
                  'Hello, I would like to check service availability for my move. Moving from: ___ to: ___.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
              >
                Check on WhatsApp
              </Button>
              <Button href={business.phoneTel} variant="outline">
                Call Us
              </Button>
            </div>
          </div>

          <div className="mt-12 border-t border-forest/10 pt-10">
            <h2 className="font-display text-xl text-forest">Our Address</h2>
            <p className="mt-3 max-w-lg text-charcoal/75">
              {business.address.full}
            </p>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs font-semibold tracking-[0.14em] text-forest uppercase underline-offset-4 hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
