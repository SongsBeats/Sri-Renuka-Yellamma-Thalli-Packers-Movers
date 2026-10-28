import { Reveal } from './Reveal';

export function BrandStorySection() {
  return (
    <section className="bg-forest text-ivory">
      <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <Reveal className="lg:col-span-5 lg:py-8">
          <p className="mb-5 text-[0.7rem] font-medium tracking-[0.22em] text-terracotta uppercase">
            A Thoughtful Transition
          </p>
          <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-[2.85rem]">
            Your Next Chapter Starts at Home.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/75 sm:text-lg">
            Every move brings a new beginning. We help families and businesses
            organize their relocation with practical packing, shifting, and
            transportation services.
          </p>
          <div className="mt-8 h-px w-16 bg-terracotta" aria-hidden />
        </Reveal>

        <Reveal className="lg:col-span-7" delay={100}>
          <div className="overflow-hidden rounded-sm">
            <img
              src="/images/brand-story.jpg"
              alt="Mover carefully wrapping furniture with protective blankets during a home relocation"
              className="aspect-[4/3] h-full w-full object-cover lg:aspect-[5/4]"
              loading="lazy"
              width={1000}
              height={800}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
