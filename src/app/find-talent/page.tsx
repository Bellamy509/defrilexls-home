import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import FindTalentHero from '@/components/sections/find-talent-hero';
import HowItWorks from '@/components/sections/how-it-works';
import MarketplaceInfo from '@/components/sections/marketplace-info';
import ClientSuccessStory from '@/components/sections/client-success-story';
import FindTalentFooterCta from '@/components/sections/find-talent-footer-cta';

export default function FindTalentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FindTalentHero />
        <HowItWorks />
        <ClientSuccessStory />
        <MarketplaceInfo />
        <FindTalentFooterCta />
      </main>
      <Footer />
    </div>
  );
}