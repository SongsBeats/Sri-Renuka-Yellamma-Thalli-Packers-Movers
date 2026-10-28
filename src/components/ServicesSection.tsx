import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/business';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

type ServicesSectionProps = {
  limit?: number;
  showViewAll?: boolean;
};

export function ServicesSection({
  limit,
  showViewAll = true,
}: ServicesSectionProps) {
  const items = limit ? services.slice(0, limit) : services;
  const featured = items.filter((s) => s.featured && s.image);
  const rest = items.filter((s) => !(s.featured && s.image));

  return (
    <section className="bg-ivory py-20 lg:py-28" id="services">
      <div className="container-site">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-display text-3xl text-forest sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Everything You Need for a Smoother Move.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/75 sm:text-lg">
              Practical moving solutions for homes, offices, and everyday
              relocation needs.
            </p>
          </div>
        </Reveal>

        {featured.length > 0 && (
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {featured.map((service, index) => (
              <Reveal key={service.id} delay={index * 80}>
                <article className="group relative overflow-hidden rounded-sm bg-forest">
                  <div className="aspect-[16/11] overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} — packing and moving service in Hyderabad`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      width={800}
                      height={550}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.7rem] tracking-[0.18em] text-ivory/60">
                      {service.number}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-ivory sm:text-[1.75rem]">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/80">
                      {service.description}
                    </p>
                    <a
                      href={buildWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-ivory uppercase underline-offset-4 transition-colors hover:underline"
                    >
                      Discuss Your Move
                      <ArrowUpRight size={14} aria-hidden />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-4 divide-y divide-forest/10 border-y border-forest/10">
          {rest.map((service, index) => (
            <Reveal key={service.id} delay={index * 40}>
              <article className="grid gap-4 py-7 sm:grid-cols-[4.5rem_1fr_auto] sm:items-baseline sm:gap-8">
                <p className="font-display text-2xl text-terracotta/80">
                  {service.number}
                </p>
                <div>
                  <h3 className="font-display text-xl text-forest sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal/75 sm:text-base">
                    {service.description}
                  </p>
                </div>
                <a
                  href={buildWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start text-xs font-semibold tracking-[0.12em] text-forest uppercase transition-colors hover:text-terracotta sm:self-center"
                >
                  Discuss Your Move
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-forest uppercase underline-offset-4 hover:underline"
            >
              View All Services
              <ArrowUpRight size={14} aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
