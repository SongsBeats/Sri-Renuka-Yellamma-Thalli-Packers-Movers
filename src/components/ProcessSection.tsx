import { processSteps } from '../data/business';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

export function ProcessSection() {
  return (
    <section className="bg-sage/40 py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>A Simple Process</SectionLabel>
            <h2 className="font-display text-3xl text-forest sm:text-4xl lg:text-[2.75rem]">
              From First Call to Moving Day.
            </h2>
          </div>
        </Reveal>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <div
            className="pointer-events-none absolute top-[1.35rem] right-0 left-0 hidden h-px bg-forest/15 lg:block"
            aria-hidden
          />

          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <li className="relative">
                <div className="mb-5 flex items-center gap-4 lg:mb-6 lg:block">
                  <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 bg-ivory font-display text-lg text-forest lg:mb-6">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-forest/15 lg:hidden" aria-hidden />
                </div>
                <h3 className="font-display text-xl text-forest">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
