import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import FindJobsHero from '@/components/sections/find-jobs-hero';
import FindJobsBenefits from '@/components/sections/find-jobs-benefits';
import FindJobsWhy from '@/components/sections/find-jobs-why';
import FindJobsTestimonials from '@/components/sections/find-jobs-testimonials';
import FindJobsCta from '@/components/sections/find-jobs-cta';

export default function FindJobsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FindJobsHero />
        <FindJobsBenefits />
        <FindJobsWhy />
        <FindJobsTestimonials />
        <FindJobsCta />
      </main>
      <Footer />
    </div>
  );
}
