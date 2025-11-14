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
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Abstract decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#1E40AF] rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF9D66] rounded-full blur-[180px]" />
      </div>

      {/* Circular digital pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#1E40AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
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
            <div className="relative w-full max-w-[720px] mx-auto group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 via-[#1E40AF]/10 to-[#FF9D66]/15 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 scale-95" />
              
              <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(30,64,175,0.12)] group-hover:shadow-[0_12px_60px_rgba(30,64,175,0.2)] transition-all duration-500 bg-white">
                <Image
                  src="/Untitled design.png"
                  alt="Professional global network with holographic interfaces connecting interpreters across the world"
                  width={1200}
                  height={675}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-[3000ms] ease-out"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1E40AF]/5 via-transparent to-[#2563EB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;