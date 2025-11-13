import React from 'react';
import Image from 'next/image';

const FindJobsHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-background py-16 lg:py-24 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Subtle background grid/noise */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text Content (~48%) */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <h1 
                id="hero-heading"
                className="text-[42px] sm:text-[48px] lg:text-[56px] font-bold text-foreground leading-[1.1] tracking-[-0.5px]"
              >
                The Premier Platform for Professional Remote Interpretation Work
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-[1.6] max-w-[560px] mx-auto lg:mx-0 font-normal">
                Defrilex Marketplace connects you with interpretation opportunities that match your expertise, language skills, and schedule.
              </p>
              <div className="mt-8">
                <a
                  href="https://app.defrilex-ls.com/freelancer/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#0B5FFF] hover:bg-[#0045C4] text-white text-base font-semibold rounded-[4px] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  aria-label="Start finding interpretation jobs on Defrilex"
                >
                  Start Finding Jobs
                </a>
              </div>
            </div>

            {/* Right Column: Product Visual (~52%) */}
            <div className="lg:col-span-7 order-first lg:order-last">
              <div className="relative max-w-[560px] mx-auto">
                {/* Gradient accent card background */}
                <div 
                  className="absolute -inset-2 rounded-2xl opacity-10 blur-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #0B5FFF, #0045C4)'
                  }}
                />
                
                {/* Image container with subtle gradient border */}
                <div 
                  className="relative rounded-2xl p-[2px] shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #0B5FFF, #0045C4)'
                  }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <Image
                      src="/assets/find-jobs-hero.jpg"
                      alt="The Premier Platform for Professional Remote Interpretation Work - Defrilex Marketplace connects you with interpretation opportunities that match your expertise, language skills, and schedule"
                      width={560}
                      height={420}
                      className="w-full h-auto"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 560px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modernized 3-Card Benefits Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1: Explore Jobs Worldwide */}
            <article 
              className="group relative bg-card rounded-xl p-10 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden"
            >
              {/* Subtle gradient accent on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Accent bar */}
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mb-6" aria-hidden="true" />
                
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                  Explore Jobs Worldwide
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base flex-1">
                  Find interpretation opportunities from global organizations, agencies, and enterprises that value your expertise.
                </p>
              </div>
            </article>

            {/* Card 2: Match Your Schedule */}
            <article 
              className="group relative bg-card rounded-xl p-10 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden"
            >
              {/* Subtle gradient accent on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Accent bar */}
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mb-6" aria-hidden="true" />
                
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                  Match Your Schedule
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base flex-1">
                  Choose when and where you want to work. Accept assignments that fit your time zone and preferred hours.
                </p>
              </div>
            </article>

            {/* Card 3: Earn What You Deserve */}
            <article 
              className="group relative bg-card rounded-xl p-10 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden"
            >
              {/* Subtle gradient accent on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Accent bar */}
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mb-6" aria-hidden="true" />
                
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                  Earn What You Deserve
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base flex-1">
                  Track your income in real time, manage certifications, and grow your interpreting career with transparency and trust.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindJobsHero;