'use client';

import React from 'react';
import { Globe, Languages, TrendingDown, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: 'Handle Any Volume',
    description: 'From single calls to conferences with 1,000+ attendees.'
  },
  {
    icon: Languages,
    title: 'Instant Language Coverage',
    description: 'Pre-vetted interpreters in 300+ languages and dialects.'
  },
  {
    icon: TrendingDown,
    title: 'Reduce Language Service Costs',
    description: 'Save 60–75% compared to traditional interpretation agencies.'
  },
  {
    icon: Zap,
    title: 'Deploy in Minutes',
    description: 'Go from request to live interpretation faster than ever.'
  }
];

export default function MarketplaceInfo() {
  return (
    <section aria-labelledby="global-interpreters" className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Subtle Global Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-blue-600" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-blue-500" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-blue-400" />
            {/* Grid pattern */}
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.05" className="text-gray-400" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.05" className="text-gray-400" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 pt-32 md:pt-40 pb-16 md:pb-20">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 id="global-interpreters" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            The World's Interpreters at Your Service
          </h2>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Our marketplace connects you with <span className="font-semibold text-gray-900">150,000+ professional interpreters</span> worldwide.
            They're certified, experienced, and ready to bridge language barriers for your business.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
            Instant access to a global network of interpreters—human and AI-powered—ready to serve your communication needs.
          </p>
          <a
            href="/solutions/global-communication"
            className="mt-6 inline-flex items-center gap-2 text-[#0052CC] text-base md:text-lg font-semibold hover:text-[#0065FF] transition-colors group"
          >
            Learn how we can support your global communication needs 
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Cards */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => {
            return (
              <div
                key={benefit.title}
                className="group relative rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:via-blue-50/30 group-hover:to-blue-100/40 transition-all duration-300 rounded-2xl" />
                
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Blue ring glow on hover */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/0 group-hover:ring-blue-500/40 transition-all duration-300" />

                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-tight group-hover:text-[#0052CC] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}