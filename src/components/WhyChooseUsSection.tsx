import { whyChoosePoints } from '../data/business';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

export function WhyChooseUsSection() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="overflow-hidden rounded-sm">
            <img
              src="/images/why-choose.jpg"
              alt="Calm, thoughtfully arranged living room suggesting a settled home after a move"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
              width={720}
              height={960}
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>Why Work With Us</SectionLabel>
            <h2 className="font-display text-3xl text-forest sm:text-4xl lg:text-[2.65rem] lg:leading-tight">
              Care for Your Belongings. Clarity for Your Move.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-0 sm:grid-cols-2">
            {whyChoosePoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 60}>
                <article
                  className={`border-forest/10 py-6 ${
                    index % 2 === 0 ? 'sm:border-r sm:pr-8' : 'sm:pl-8'
                  } ${index < 2 ? 'border-b' : ''} ${
                    index >= 2 ? 'sm:pt-8' : ''
                  }`}
                >
                  <h3 className="font-display text-xl text-forest">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                    {point.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
