'use client';

import React from 'react';

const features = [
  { 
    title: 'Zero Recruitment Costs', 
    description: 'Pre-vetted interpreters, ready to work — no hiring overhead.',
  },
  { 
    title: 'No Infrastructure Needed', 
    description: 'Interpreters use their own tools for seamless setup.',
  },
  { 
    title: 'Instant Scalability', 
    description: 'Scale from one urgent call to global events instantly.',
  },
  { 
    title: '24/7 Coverage', 
    description: 'Always-on support across all time zones.',
  },
  { 
    title: 'Pay-as-You-Go', 
    description: 'Pay only for active interpretation time — flexible and fair.',
  },
  { 
    title: 'Quality Guaranteed', 
    description: 'Certified, vetted, and rated interpreters for consistent excellence.',
  },
];

const ClientLogos = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F9FAFB]/30 to-white py-24 lg:py-32">
      {/* Abstract global pattern background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute left-10 top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#1E40AF] to-[#2563EB] blur-[120px]" />
        <div className="absolute right-10 bottom-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#0052CC] to-[#1E40AF] blur-[120px]" />
      </div>

      {/* Decorative grid pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1E40AF 1px, transparent 1px),
            linear-gradient(to bottom, #1E40AF 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="mb-6 text-4xl font-bold leading-[1.15] tracking-tight text-[#1A1A1A] lg:text-5xl xl:text-[56px]">
            The Perfect Way to Grow and Scale Your Business
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-[1.8] text-[#768190] lg:text-xl">
            Simplify language access with an advanced interpretation network designed for performance, scalability, and trust.
          </p>
        </div>

        {/* Feature Cards Grid - Clean, Icon-Free Design */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {features.map((feature, index) => {
            const delay = `${index * 100}ms`;
            
            return (
              <div
                key={feature.title}
                className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ 
                  animationDelay: delay,
                  animationFillMode: 'both'
                }}
              >
                {/* Card Container with Premium Styling */}
                <div className="relative h-full rounded-2xl border border-[#E5E7EB] bg-gradient-to-br from-white to-[#FAFBFC]/50 p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0052CC]/30 hover:shadow-[0_12px_40px_rgba(0,82,204,0.15)] hover:ring-1 hover:ring-[#0052CC]/20">
                  
                  {/* Top accent bar that appears on hover */}
                  <div className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#1E40AF] via-[#0052CC] to-[#2563EB] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Blue gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0052CC]/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title - Bold and Larger */}
                    <h3 className="mb-4 text-[26px] font-bold leading-[1.3] tracking-tight text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#0052CC]">
                      {feature.title}
                    </h3>

                    {/* Description - Light Gray with Generous Line Spacing */}
                    <p className="text-[17px] leading-[1.8] text-[#768190]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;