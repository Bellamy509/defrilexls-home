'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ResourcesInsights = () => {
  const insights = [
    {
      tag: 'Industry Report',
      title: 'The Future of Interpretation: Market Trends 2025',
      description: 'Explore the global interpretation industry\'s trajectory, from AI-driven growth to new opportunities across healthcare, government, and corporate sectors.',
      cta: 'Read Report',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/abstract-futuristic-cityscape-with-data--332fd43c-20251112212615.jpg'
    },
    {
      tag: 'Case Study',
      title: 'How Multilingual Strategy Fuels Global Expansion',
      description: 'Discover how leading enterprises leverage Defrilex-powered interpretation to access new international markets and clients.',
      cta: 'See How',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/abstract-world-map-with-glowing-connecti-154715aa-20251112212612.jpg'
    },
    {
      tag: 'Tech Insight',
      title: 'AI is Redefining the Language Services Industry',
      description: 'From automated matching to real-time translation, explore how AI is transforming communication and empowering interpreters.',
      cta: 'Explore Insight',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/abstract-neural-network-visualization-wi-d91253b2-20251112212612.jpg'
    },
    {
      tag: 'Research Brief',
      title: 'Language Analytics: The Data Behind Global Demand',
      description: 'Access Defrilex\'s proprietary data on interpretation needs across industries, regions, and emerging markets.',
      cta: 'View Data',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/abstract-digital-dashboard-with-analytic-4b144926-20251112212611.jpg'
    }
  ];

  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FBFF 100%)'
      }}
    >
      {/* Background Network Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1A73E8 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 
            className="text-[40px] font-bold leading-[1.2] tracking-[-0.5px]"
            style={{ color: '#0A0A0A' }}
          >
            Industry Insights & Emerging Trends
          </h2>
          <p 
            className="mt-3 text-[18px] font-semibold leading-[1.7]"
            style={{ color: '#5B5B5B' }}
          >
            Where Language, Technology, and Global Business Converge.
          </p>
          <p 
            className="mt-5 text-[16px] leading-[1.7] max-w-3xl mx-auto"
            style={{ color: '#6A6A6A' }}
          >
            Explore data-backed insights, technology advancements, and strategic trends shaping the future of language services. From AI integration to global expansion, Defrilex leads the conversation on how multilingual communication is evolving.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="group relative rounded-[20px] bg-white overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:ring-2 hover:ring-[#1A73E8]/40"
              style={{
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Image Header with Gradient Overlay */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(26, 115, 232, 0.3) 0%, rgba(67, 56, 202, 0.3) 100%)'
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Tag */}
                <span 
                  className="inline-block text-[11px] font-semibold uppercase tracking-[1.5px] mb-3"
                  style={{ color: '#1A73E8' }}
                >
                  {insight.tag}
                </span>

                {/* Title */}
                <h3 
                  className="text-[20px] font-bold leading-[1.3] mb-3"
                  style={{ color: '#0E1731' }}
                >
                  {insight.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[16px] leading-[1.6] mb-4"
                  style={{ color: '#6A6A6A' }}
                >
                  {insight.description}
                </p>

                {/* CTA Link */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[16px] font-bold transition-all duration-200 group-hover:underline"
                  style={{
                    background: 'linear-gradient(90deg, #1A73E8 0%, #0055D4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {insight.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="https://blog.defrilex-ls.com"
            className="inline-flex items-center justify-center px-8 py-4 text-[16px] font-bold text-white rounded-[50px] transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #1A73E8 0%, #0055D4 100%)',
              boxShadow: '0 4px 14px rgba(26, 115, 232, 0.25)'
            }}
          >
            Explore All Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesInsights;