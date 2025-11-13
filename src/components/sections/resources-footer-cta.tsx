'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const ResourcesFooterCta = () => {
  return (
    <section 
      aria-labelledby="resources-footer-title"
      className="bg-gradient-to-b from-white to-[#EFF6FF] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 
              id="resources-footer-title"
              className="text-[36px] md:text-[40px] font-bold leading-[1.3] tracking-[-0.25px] text-[#1A1A1A]"
            >
              Keep Learning. Keep Growing.
            </h2>
            
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-[1.6]">
              Discover expert insights, AI tools, and multilingual industry trends designed to help you succeed — whether you're a company or a professional interpreter.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-4">
              <Button 
                className="bg-[#0052CC] hover:bg-[#0065FF] text-white px-8 py-6 text-base font-semibold rounded transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Explore Resources
              </Button>
              
              <Button 
                variant="outline"
                className="bg-white border-2 border-[#0052CC] text-[#0052CC] hover:bg-[#F8F9FA] px-8 py-6 text-base font-semibold rounded transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                onClick={() => window.location.href = '/contact'}
              >
                Subscribe to Updates
              </Button>
              
              <Button 
                variant="ghost"
                className="border-2 border-transparent text-[#0052CC] hover:border-[#0052CC] hover:bg-transparent px-8 py-6 text-base font-semibold rounded transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Our Team
              </Button>
            </div>
          </div>

          {/* Right Column - Representative Image */}
          <div className="flex flex-col items-center text-center space-y-6 md:pl-8">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/professional-headshot-photograph-of-a-wa-bd61dc79-20251112205706.jpg"
                  alt="Alex - Learning & Development Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-semibold text-[#1A1A1A]">
                Hi, I'm Alex – Learning & Development Specialist.
              </p>
              <p className="text-lg text-[#4A4A4A] max-w-md mx-auto">
                Let's help you access the tools you need to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesFooterCta;