"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-[#FFFFFF] py-24 lg:py-32 overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-16 lg:gap-x-20">
          {/* Left Column: Text Content */}
          <div 
            className={`lg:col-span-5 text-center lg:text-left transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-[44px] md:text-[52px] lg:text-[56px] xl:text-[60px] font-bold text-[#1A1A1A] leading-[1.15] tracking-[-0.75px] mb-6">
              We connect interpreter talent to global opportunities
            </h1>
            <p className="text-[17px] md:text-[18px] lg:text-[19px] text-[#4A4A4A] leading-[1.7] mb-10 max-w-[540px] mx-auto lg:mx-0">
              Professional interpreter matching made easy. AI-powered platform delivering language support across 300+ languages—fast, secure, and simple.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/find-talent"
                className="group relative inline-block w-full sm:w-auto text-center px-10 py-[18px] bg-gradient-to-r from-[#1E40AF] to-[#2563EB] text-white text-[16px] font-semibold rounded-[6px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.6),0_4px_20px_rgba(37,99,235,0.3)] hover:scale-[1.03] hover:from-[#2563EB] hover:to-[#3B82F6] overflow-hidden"
              >
                <span className="relative z-10">Find Talent</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <a
                href="https://app.defrilex-ls.com/freelancer/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block w-full sm:w-auto text-center px-10 py-[16px] bg-transparent border-2 border-[#1E40AF] text-[#1E40AF] text-[16px] font-semibold rounded-[6px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1E40AF]/8 hover:to-[#2563EB]/8 hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10">Join as Interpreter</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/10 to-[#2563EB]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Illustration */}
          <div 
            className={`lg:col-span-7 order-first lg:order-last transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full max-w-[720px] mx-auto">
              <div className="relative overflow-hidden bg-[#FFFFFF]">
                <Image
                  src="/Untitled design.png"
                  alt="Professional global network with holographic interfaces connecting interpreters across the world"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;