'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FindJobsCta = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F8F9FA] to-white py-20 md:py-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-20 w-64 h-64 bg-[#0052CC] rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-[#0065FF] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-[36px] md:text-[48px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
                Ready to Take the Next Step in Your Career?
              </h2>
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-[1.7] max-w-xl">
                Join thousands of interpreters and translators earning competitive rates on Defrilex. Work from anywhere, grow your skills, and connect with global clients.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Primary Button */}
              <a
                href="https://app.defrilex-ls.com/freelancer/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0052CC] hover:bg-[#0045B8] text-white text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Join as an Interpreter
              </a>

              {/* Secondary Button */}
              <Link
                href="/find-jobs"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-[#F8F9FA] text-[#0052CC] border-2 border-[#0052CC] text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Open Projects
              </Link>
            </div>

            {/* Tertiary Button */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-[#F8F9FA] text-[#0052CC] border border-[#0052CC] text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* Right Column - Representative Image */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <div className="relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/professional-corporate-headshot-portrait-edb267e9-20251112205104.jpg"
                alt="Maria - Interpreter Relations Manager"
                width={320}
                height={320}
                className="rounded-full shadow-2xl ring-4 ring-white"
              />
            </div>
            
            <div className="text-center lg:text-right space-y-2 max-w-sm">
              <p className="text-lg md:text-xl font-semibold text-foreground">
                Hi, I'm Maria — Interpreter Relations Manager.
              </p>
              <p className="text-base md:text-lg text-[#4A4A4A]">
                Let's help you find your next opportunity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FindJobsCta;