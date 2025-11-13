import React from 'react';
import Image from 'next/image';

const ResourcesRevolution = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="max-w-[560px]">
            <h2 className="text-[40px] md:text-[48px] font-bold text-foreground leading-[1.2] tracking-[-0.5px]">
              The Interpretation Revolution
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A] leading-[1.6]">
              Global communication is in a state of constant evolution. The demand for professional interpretation has never been higher. Organizations are seeking authentic, culturally-aware language services that strengthen their global relationships and expand market reach. With an emphasis on flexibility, cost efficiency, and quality assurance, Defrilex is pioneering the transformation of how businesses access world-class interpretation services.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/premium-enterprise-grade-3d-illustration-0d435044-20251112211450.jpg"
                alt="Centered global digital network connecting professional interpreters through AI-powered technology with balanced composition"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesRevolution;