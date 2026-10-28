import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { Seo } from '../components/Seo';
import { business } from '../data/business';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | Sri Renuka Yellamma Thalli Packers & Movers"
        description="Learn about Sri Renuka Yellamma Thalli Packers & Movers — packing and relocation services based in Karmanghat, Hyderabad."
        path="/about"
      />

      <section className="border-b border-forest/10 bg-ivory py-14 lg:py-20">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'About' },
            ]}
          />
          <SectionLabel>About the Business</SectionLabel>
          <h1 className="max-w-3xl font-display text-4xl text-forest sm:text-5xl">
            Helping Hyderabad Families and Businesses Relocate with Care
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-charcoal/80">
              <strong className="font-medium text-forest">
                {business.name}
              </strong>{' '}
              provides packing and moving support for home and office
              relocation in Hyderabad. Based in Tapovan Colony, Karmanghat, we
              work with customers who need practical help organizing a move —
              from packing belongings to loading, transport, and unloading.
            </p>
            <p className="mt-5 text-base leading-relaxed text-charcoal/75">
              Every relocation is different. Whether you are shifting a home
              nearby or planning an office move, we encourage an open
              conversation about your locations, timing, and requirements so
              the service can be discussed clearly before moving day.
            </p>
            <p className="mt-5 text-base leading-relaxed text-charcoal/75">
              Our focus is straightforward communication, careful handling of
              belongings, and making it easy to enquire by phone or WhatsApp.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={80}>
            <div className="overflow-hidden rounded-sm">
              <img
                src="/images/brand-story.jpg"
                alt="Careful packing and protection of household furniture during relocation"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                width={900}
                height={675}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sage/40 py-16 lg:py-20">
        <div className="container-site grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Based Locally',
              text: 'Operating from Karmanghat and serving customers across Hyderabad and nearby areas.',
            },
            {
              title: 'Practical Support',
              text: 'Home shifting, office relocation, packing, loading, and transportation assistance.',
            },
            {
              title: 'Direct Enquiries',
              text: 'Speak with us by phone or continue the conversation on WhatsApp at your convenience.',
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="border-t border-forest/20 pt-6">
                <h2 className="font-display text-xl text-forest">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest py-16 text-ivory lg:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl">
            Ready to start the conversation?
          </h2>
          <p className="mt-4 text-ivory/75">
            Share your move details and we will discuss the services that may
            suit your relocation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={business.phoneTel} variant="accent">
              Call {business.phoneDisplay}
            </Button>
            <Button
              href={buildWhatsAppUrl(
                'Hello, I would like to learn more about your packing and moving services.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineLight"
            >
              WhatsApp Us
            </Button>
            <Button to="/contact#quote" variant="outlineLight">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
