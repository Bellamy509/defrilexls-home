'use client';

import React from 'react';

const ResourcesHero = () => {
  return (
    <section 
      aria-labelledby="resources-hero-title"
      className="bg-gradient-to-b from-[#EFF6FF] via-[#F9FBFF] to-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
        {/* Main Headline */}
        <h1 
          id="resources-hero-title"
          className="text-[48px] md:text-[56px] font-bold leading-[1.2] tracking-[-0.5px] text-[#1A1A1A]"
        >
          Resources
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-xl md:text-2xl text-[#4A4A4A] leading-[1.5] font-normal">
          Everything you need to know about professional interpretation...in one place
        </p>
      </div>
    </section>
  );
};

export default ResourcesHero;