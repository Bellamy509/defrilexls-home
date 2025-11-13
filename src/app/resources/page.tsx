import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import ResourcesHero from '@/components/sections/resources-hero';
import ResourcesRevolution from '@/components/sections/resources-revolution';
import ResourcesAboutDefrilex from '@/components/sections/resources-about-defrilex';
import ResourcesCommunity from '@/components/sections/resources-community';
import ResourcesInsights from '@/components/sections/resources-insights';
import ResourcesSuccessStories from '@/components/sections/resources-success-stories';
import ResourcesWhatMakesDifferent from '@/components/sections/resources-what-makes-different';
import ResourcesFooterCta from '@/components/sections/resources-footer-cta';

export const metadata = {
  title: 'Resources - Defrilex Marketplace',
  description: 'Learn everything about professional interpretation, industry insights, and language technology trends on Defrilex Marketplace.',
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ResourcesHero />
        <ResourcesRevolution />
        <ResourcesAboutDefrilex />
        <ResourcesCommunity />
        <ResourcesInsights />
        <ResourcesSuccessStories />
        <ResourcesWhatMakesDifferent />
        <ResourcesFooterCta />
      </main>
      <Footer />
    </div>
  );
}