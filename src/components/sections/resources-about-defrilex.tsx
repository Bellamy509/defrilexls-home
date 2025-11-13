import React from 'react';
import Image from 'next/image';

const ResourcesAboutDefrilex = () => {
  return (
    <section className="bg-[#F8F9FA] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="max-w-[600px]">
            <h2 className="text-[40px] md:text-[48px] font-bold text-foreground leading-[1.2] tracking-[-0.5px]">
              Everything you need to know about Defrilex, all in one place
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A] leading-[1.6]">
              The interpretation industry is experiencing unprecedented change, with businesses requiring more personalized, immediate, and culturally-nuanced language services. With an emphasis on certified expertise, transparent pricing, and instant availability, Defrilex is leading the next evolution of professional interpretation services.
            </p>
            <p className="mt-4 text-lg text-[#4A4A4A] leading-[1.6]">
              At Defrilex, our technology platform offers exceptional value to both interpreters and organizations. We connect passionate, certified language professionals with businesses that need reliable interpretation services. To discover the full advantages of the Defrilex marketplace, explore our comprehensive resource center below.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/a-modern-3d-style-corporate-illustration-63e0b52a-20251112211625.jpg"
                alt="Modern 3D corporate illustration showing diverse global professionals connected through AI-powered digital network hub with glowing connections, representing Defrilex's technology platform for interpretation services"
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

export default ResourcesAboutDefrilex;