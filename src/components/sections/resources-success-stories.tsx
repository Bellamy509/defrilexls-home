'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ResourcesSuccessStories = () => {
  const stories = [
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/modern-corporate-business-scene-showing--a897779d-20251112212024.jpg',
      industry: 'FORTUNE 500 ENTERPRISE',
      title: 'Global Expansion Success',
      description: 'When a Fortune 500 tech company needed to expand operations across 30+ countries, Defrilex provided scalable, culturally fluent interpretation that ensured seamless communication across borders.',
      link: '/success-stories/global-expansion'
    },
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/professional-healthcare-setting-with-div-b8a2a864-20251112212026.jpg',
      industry: 'HEALTHCARE PROVIDER',
      title: 'Breaking Language Barriers',
      description: 'Delivering critical patient care across diverse communities, powered by Defrilex-certified interpreters specialized in medical accuracy and compassion.',
      link: '/success-stories/healthcare'
    },
    {
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/elegant-international-law-office-scene-w-c7d8eb12-20251112212024.jpg',
      industry: 'INTERNATIONAL LAW FIRM',
      title: 'Cross-Border Excellence',
      description: 'Facilitating complex, multilingual legal proceedings with certified interpreters ensuring precision, compliance, and client confidence.',
      link: '/success-stories/legal'
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#F9FBFF] to-white py-[100px]">
      {/* Subtle diagonal pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 37px)`,
        color: '#0052CC'
      }} />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#0A0A0A] leading-[1.2] tracking-[-0.5px]">
            Global Success Stories
          </h2>
          <p className="mt-6 text-lg text-[#5B5B5B] leading-[1.7] max-w-3xl mx-auto">
            Discover how leading organizations worldwide partner with Defrilex to bridge communication gaps, unlock new markets, and deliver world-class multilingual experiences.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group rounded-[20px] bg-gradient-to-b from-white to-[#F8F9FA] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
              style={{
                boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
              }}
            >
              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                   style={{
                     background: 'linear-gradient(135deg, rgba(26,115,232,0.3) 0%, rgba(0,85,212,0.3) 100%)',
                     padding: '2px',
                     WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     WebkitMaskComposite: 'xor',
                     maskComposite: 'exclude'
                   }} 
              />
              
              {/* Banner Image */}
              <div className="relative h-[140px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(26,115,232,0.15)] z-10" />
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-xs font-semibold text-[#7A8BA1] uppercase tracking-[1.5px] mb-3">
                  {story.industry}
                </p>
                <h3 className="text-[22px] font-bold text-[#0A0A0A] mb-4 leading-[1.3]">
                  {story.title}
                </h3>
                <p className="text-[15px] text-[#5B5B5B] leading-[1.7] mb-6">
                  {story.description}
                </p>
                <Link
                  href={story.link}
                  className="inline-flex items-center gap-2 text-[15px] font-semibold bg-gradient-to-r from-[#1A73E8] to-[#0055D4] bg-clip-text text-transparent hover:underline transition-all"
                >
                  Read Full Story →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="https://blog.deffrilex-ls.com"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white rounded-[50px] bg-gradient-to-r from-[#1A73E8] to-[#0055D4] shadow-[0_4px_12px_rgba(26,115,232,0.25)] hover:shadow-[0_6px_20px_rgba(26,115,232,0.35)] hover:scale-[1.03] transition-all duration-300"
          >
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSuccessStories;