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
        title="Packers and Movers in Hyderabad | Sri Renuka Yellamma Thalli"
        description="Home and office packing and moving services in Hyderabad. Based in Karmanghat. Request a quote by phone or WhatsApp."
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
