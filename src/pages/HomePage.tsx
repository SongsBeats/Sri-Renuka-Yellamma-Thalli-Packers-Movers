import { BrandStorySection } from '../components/BrandStorySection';
import { ContactSection } from '../components/ContactSection';
import { HeroSection } from '../components/HeroSection';
import { ProcessSection } from '../components/ProcessSection';
import { QuoteForm } from '../components/QuoteForm';
import { Seo, localBusinessJsonLd } from '../components/Seo';
import { ServiceAreasSection } from '../components/ServiceAreasSection';
import { ServicesSection } from '../components/ServicesSection';
import { TrustStrip } from '../components/TrustStrip';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';

export function HomePage() {
  return (
    <>
      <Seo
        title="Sri Renuka Yellamma Thalli Packers & Movers | Packers and Movers in Karmanghat, Hyderabad"
        description="Sri Renuka Yellamma Thalli Packers & Movers - home and office packing and moving services in Hyderabad, based in Karmanghat. Call +91 77994 51430 or WhatsApp for a quote."
        path="/"
        jsonLd={localBusinessJsonLd()}
      />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <BrandStorySection />
      <ProcessSection />
      <WhyChooseUsSection />
      <ServiceAreasSection />
      <QuoteForm />
      <ContactSection />
    </>
  );
}
