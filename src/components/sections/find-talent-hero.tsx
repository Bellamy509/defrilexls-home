'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FindTalentHero = () => {
  return (
    <section 
      className="relative bg-background py-16 lg:py-24 overflow-hidden"
      aria-labelledby="find-talent-hero"
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
              id="find-talent-hero"
              className="text-[42px] sm:text-[48px] lg:text-[56px] font-bold text-foreground leading-[1.1] tracking-[-0.5px]"
            >
              Access Global Interpretation Talent
            </h1>
            <p className="mt-4 text-xl text-foreground leading-[1.3] font-semibold">
              Your complete interpretation management platform.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-[1.6] max-w-[560px] mx-auto lg:mx-0 font-normal">
              The Defrilex Marketplace connects businesses of all sizes with certified, professional interpreters around the world. Get on-demand language services with full visibility and control—available 24/7 in 300+ languages.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://app.defrilex-ls.com/buyer/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#0B5FFF] hover:bg-[#0045C4] text-white text-base font-semibold rounded-[4px] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                aria-label="Start hiring interpreters on Defrilex"
              >
                Start Hiring
              </a>
              <Link
                href="/contact?sales=1"
                className="inline-block px-8 py-4 bg-transparent hover:bg-muted text-[#0B5FFF] border-2 border-[#0B5FFF] text-base font-semibold rounded-[4px] transition-all duration-200"
                aria-label="Talk to sales team"
              >
                Talk to Sales
              </Link>
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
                    src="/assets/find-talent-hero.jpg"
                    alt="Access Global Interpretation Talent - Your complete interpretation management platform. The Defrilex Marketplace connects businesses of all sizes with certified, professional interpreters around the world. Get on-demand language services with full visibility and control—available 24/7 in 300+ languages"
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
  );
};

export default FindTalentHero;