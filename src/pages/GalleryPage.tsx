import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { GalleryGrid } from '../components/GalleryGrid';
import { SectionLabel } from '../components/SectionLabel';
import { Seo } from '../components/Seo';
import { business } from '../data/business';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery | Our Work & Fleet | Sri Renuka Yellamma Thalli Packers & Movers"
        description="Photos of the trucks, packing materials and office of Sri Renuka Yellamma Thalli Packers & Movers in Karmanghat, Hyderabad."
        path="/gallery"
      />

      <section className="border-b border-forest/10 bg-ivory py-14 lg:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]} />
          <SectionLabel>Our Work &amp; Fleet</SectionLabel>
          <h1 className="max-w-3xl font-display text-4xl text-forest sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/75">
            Real photos of our trucks, packing materials and office at Tapovan
            Colony, Karmanghat, Hyderabad.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-20">
        <div className="container-site">
          <GalleryGrid />
          <div className="mt-12 flex flex-wrap gap-3">
            <Button href={business.phoneTel}>Call Now</Button>
            <Button
              href={buildWhatsAppUrl(
                'Hello, I would like to enquire about packing and moving services with Sri Renuka Yellamma Thalli Packers & Movers.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
