import React from 'react';
import Image from 'next/image';

const FindJobsBenefits = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="max-w-[560px]">
            <h2 className="text-[40px] md:text-[48px] font-bold text-foreground leading-[1.2] tracking-[-0.5px]">
              Interpret When, Where, and How You Want
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A] leading-[1.6]">
              Global companies need professional interpreters every day. Join the Defrilex Marketplace and connect with high-paying interpretation assignments that fit your life.
            </p>
          </div>

          {/* Right Column: Illustration */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/imagen-4_0-fast-generate-001-10-1762975107781.png?width=8000&height=8000&resize=contain"
                alt="Professional interpreters collaborating at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindJobsBenefits;