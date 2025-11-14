'use client';

import React from 'react';
import Link from 'next/link';

const ResourcesCommunity = () => {
  const resources = [
    {
      title: 'Community Support',
      description: 'Connect with interpreters worldwide, share experiences, and exchange best practices for certification and professional growth.'
    },
    {
      title: 'Learning Resources',
      description: 'Access in-depth guides, training modules, and industry insights designed to elevate your interpreting skills and career potential.'
    },
    {
      title: 'Professional Development',
      description: 'Explore global opportunities to enhance your expertise, gain certifications, and grow within the Defrilex professional network.'
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#F9FBFF] to-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A1A] leading-[1.2] tracking-[-0.5px]">
            Empower Your Growth Through the Defrilex Community
          </h2>
          <p className="mt-6 text-lg text-[#6A6A6A] leading-[1.7] max-w-3xl mx-auto">
            Collaborate, learn, and grow with interpreters and professionals from around the world.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {resources.map((resource) => {
            return (
              <div
                key={resource.title}
                className="group relative rounded-[20px] bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:ring-2 hover:ring-[#1A73E8]/20"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#1A73E8]/0 to-[#0055D4]/0 opacity-0 group-hover:from-[#1A73E8]/5 group-hover:to-[#0055D4]/5 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                
                <div className="relative">
                  <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-4 transition-colors duration-300 group-hover:text-[#1A73E8]">
                    {resource.title}
                  </h3>
                  <p className="text-[16px] text-[#6A6A6A] leading-[1.7]">
                    {resource.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="https://community.defrilex-ls.com"
            className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-[#1A73E8] to-[#0055D4] hover:from-[#0055D4] hover:to-[#003d99] text-white text-[16px] font-bold rounded-[50px] transition-all duration-300 shadow-[0_4px_14px_rgba(26,115,232,0.3)] hover:shadow-[0_6px_20px_rgba(26,115,232,0.4)] hover:scale-[1.03]"
          >
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCommunity;