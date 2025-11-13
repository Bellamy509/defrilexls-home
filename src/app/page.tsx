import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import OurOffer from '@/components/sections/our-offer';
import AiInnovations from '@/components/sections/ai-innovations';
import ClientLogos from '@/components/sections/client-logos';
import ClientTestimonial from '@/components/sections/client-testimonial';
import KeyBenefits from '@/components/sections/key-benefits';
import Culture from '@/components/sections/culture';
import LatestNews from '@/components/sections/latest-news';
import ContactCta from '@/components/sections/contact-cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OurOffer />
        <AiInnovations />
        <ClientLogos />
        <ClientTestimonial />
        <KeyBenefits />
        <Culture />
        <LatestNews />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}