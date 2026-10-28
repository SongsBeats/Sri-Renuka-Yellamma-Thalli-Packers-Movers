import { serviceAreas } from '../data/business';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

type ServiceAreasSectionProps = {
  compact?: boolean;
};

export function ServiceAreasSection({
  compact = false,
}: ServiceAreasSectionProps) {
  return (
    <section
      className={compact ? 'bg-ivory py-16' : 'bg-sage/35 py-20 lg:py-28'}
      id="service-areas"
    >
      <div className="container-site">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionLabel>Where We Operate</SectionLabel>
            <h2 className="font-display text-3xl text-forest sm:text-4xl lg:text-[2.75rem]">
              Moving Across Hyderabad.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-charcoal/75">
              Planning a move around Karmanghat? Contact us to discuss your
              relocation requirements and check service availability in your
              area.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:justify-self-end" delay={80}>
            <Button
              href={buildWhatsAppUrl(
                'Hello, I would like to check if packing and moving services are available in my area. My location is: ',
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
            >
              Check Service Availability
            </Button>
          </Reveal>
        </div>

        <Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-forest/10 bg-forest/10 sm:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="bg-ivory px-4 py-5 text-center text-sm font-medium text-forest"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-6 text-sm text-charcoal/60">
          Coverage may vary by route and schedule. Please confirm availability
          for your specific locations before planning your move.
        </p>
      </div>
    </section>
  );
}
