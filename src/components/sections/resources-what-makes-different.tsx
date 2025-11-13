import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const ResourcesWhatMakesDifferent = () => {
  const companyFeatures = [
    'Pre-vetted, certified professionals',
    '200+ languages, instant availability',
    'Transparent pricing',
    'Guaranteed quality',
    'Scalable enterprise solutions'
  ];

  const interpreterFeatures = [
    'Instant payment after each project',
    'Professional development resources',
    'Certification support',
    'Direct client relationships',
    'Zero agency fees'
  ];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#F9FBFF] to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0052CC 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[36px] md:text-[40px] font-bold text-[#0A0A0A] leading-[1.2] tracking-[-0.5px]">
            Why Organizations and Interpreters Choose Defrilex
          </h2>
          <p className="mt-6 text-[18px] text-[#6A6A6A] leading-[1.7] max-w-3xl mx-auto">
            The Defrilex Marketplace connects certified interpreters and global organizations through secure technology, transparent pricing, and instant accessibility—empowering multilingual communication like never before.
          </p>
        </div>

        {/* Two Column Cards with Divider */}
        <div className="relative mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Glowing Divider Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-4/5 bg-gradient-to-b from-transparent via-[#1A73E8]/30 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1A73E8] shadow-[0_0_20px_rgba(26,115,232,0.6)] animate-pulse" />
          </div>

          {/* For Companies Card */}
          <div className="group relative rounded-[24px] bg-gradient-to-br from-white to-[#F6F9FF] p-10 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(26,115,232,0.15)] transition-all duration-500 hover:scale-[1.02] border border-white/50 overflow-hidden">
            {/* Subtle background visual for companies - digital network */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#1A73E8" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#1A73E8" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#1A73E8" strokeWidth="0.5" />
                <circle cx="100" cy="20" r="3" fill="#1A73E8" />
                <circle cx="180" cy="100" r="3" fill="#1A73E8" />
                <circle cx="100" cy="180" r="3" fill="#1A73E8" />
                <circle cx="20" cy="100" r="3" fill="#1A73E8" />
              </svg>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-[24px] ring-2 ring-transparent group-hover:ring-[#1A73E8]/40 transition-all duration-500" />

            <div className="relative">
              <h3 className="text-[22px] font-bold text-[#0A0A0A] mb-4">
                For Companies
              </h3>
              <p className="text-[16px] text-[#4C4C4C] mb-8 leading-[1.6]">
                Get certified, pre-vetted interpreters on demand—available 24/7 across 200+ languages, backed by transparent pricing and quality assurance.
              </p>
              <ul className="space-y-4 mb-10">
                {companyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#1A73E8] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-[16px] text-[#4C4C4C] leading-[1.6]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/find-talent"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1A73E8] to-[#0055D4] hover:from-[#0055D4] hover:to-[#003DA0] text-white text-[16px] font-bold rounded-[50px] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(26,115,232,0.4)] group/btn"
              >
                Find Interpreters Now
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* For Interpreters Card */}
          <div className="group relative rounded-[24px] bg-gradient-to-br from-white to-[#F6F9FF] p-10 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(26,115,232,0.15)] transition-all duration-500 hover:scale-[1.02] border border-white/50 overflow-hidden">
            {/* Subtle background visual for interpreters - headset waves */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path d="M20 100 Q60 80 100 100 T180 100" fill="none" stroke="#1A73E8" strokeWidth="0.5" />
                <path d="M20 120 Q60 100 100 120 T180 120" fill="none" stroke="#1A73E8" strokeWidth="0.5" />
                <path d="M20 140 Q60 120 100 140 T180 140" fill="none" stroke="#1A73E8" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="30" fill="none" stroke="#1A73E8" strokeWidth="0.5" />
                <circle cx="70" cy="110" r="8" fill="none" stroke="#1A73E8" strokeWidth="0.5" />
                <circle cx="130" cy="110" r="8" fill="none" stroke="#1A73E8" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-[24px] ring-2 ring-transparent group-hover:ring-[#1A73E8]/40 transition-all duration-500" />

            <div className="relative">
              <h3 className="text-[22px] font-bold text-[#0A0A0A] mb-4">
                For Interpreters
              </h3>
              <p className="text-[16px] text-[#4C4C4C] mb-8 leading-[1.6]">
                Join Defrilex to access high-quality assignments, instant payments, and direct relationships with global clients—no middlemen, no hidden fees.
              </p>
              <ul className="space-y-4 mb-10">
                {interpreterFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#1A73E8] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-[16px] text-[#4C4C4C] leading-[1.6]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/find-jobs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gradient-to-r hover:from-[#1A73E8] hover:to-[#7B3FF2] text-[#1A73E8] hover:text-white border-2 border-transparent bg-clip-padding relative text-[16px] font-bold rounded-[40px] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(26,115,232,0.3)] group/btn overflow-hidden before:absolute before:inset-0 before:rounded-[40px] before:p-[2px] before:bg-gradient-to-r before:from-[#1A73E8] before:to-[#7B3FF2] before:-z-10 before:m-[-2px]"
              >
                Browse Opportunities
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesWhatMakesDifferent;