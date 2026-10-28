import { MapPin } from 'lucide-react';
import { business } from '../data/business';
import { Button } from './Button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="container-site grid items-center gap-10 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16 xl:py-20">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="mb-5 text-[0.7rem] font-medium tracking-[0.22em] text-terracotta uppercase">
            Packing · Moving · Relocation
          </p>

          <h1 className="font-display text-[2.35rem] leading-[1.12] text-balance text-forest sm:text-[2.85rem] lg:text-[3.25rem] xl:text-[3.5rem]">
            Moving Home Should Feel Like a Fresh Start.
          </h1>

          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-charcoal/80">
            From carefully packed belongings to your next destination, we help
            make home and office relocation in Hyderabad simpler and more
            convenient.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/contact#quote" size="lg">
              Request a Quote
            </Button>
            <Button href={business.phoneTel} variant="outline" size="lg">
              Call {business.phoneDisplay}
            </Button>
          </div>

          <p className="mt-7 flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.16em] text-charcoal/55 uppercase">
            <MapPin size={14} className="text-terracotta" aria-hidden />
            Based in Karmanghat, Hyderabad
          </p>
        </div>

        <div className="lg:col-span-6 xl:col-span-7">
          <div className="image-frame aspect-[4/3] overflow-hidden rounded-sm bg-sage/40 shadow-[0_20px_50px_-28px_rgba(25,61,50,0.45)]">
            <img
              src="/images/hero-moving.jpg"
              alt="Professional movers loading packed boxes and furniture into a moving truck outside a home"
              className="h-full w-full object-cover object-[center_65%]"
              width={1200}
              height={900}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
