'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FindTalentFooterCta = () => {
  const router = useRouter();

  const handleHireTalent = () => {
    router.push('/find-talent#search');
  };

  const handleBookDemo = () => {
    router.push('/contact?type=demo');
  };

  const handleContactUs = () => {
    router.push('/contact');
  };

  return (
    <section className="bg-light-gray-bg py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text leading-tight">
              Ready to Expand Your Team? Let's Build Success Together.
            </h2>
            
            <p className="text-lg text-body-text leading-relaxed">
              Our specialists are here to help you find qualified interpreters for your projects — faster, smarter, and seamlessly through the Defrilex platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://app.defrilex-ls.com/freelancer/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 inline-block text-center"
              >
                Hire Talent
              </a>
              
              <button
                onClick={handleBookDemo}
                className="px-8 py-4 bg-white text-primary font-semibold rounded border-2 border-primary hover:bg-light-gray-bg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                Book a Demo
              </button>
              
              <button
                onClick={handleContactUs}
                className="px-8 py-4 bg-transparent text-primary font-semibold rounded border-2 border-primary hover:bg-white transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column - Client Success Manager */}
          <div className="flex flex-col items-center lg:items-end opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/professional-headshot-portrait-of-daniel-1266a85b-20251112204622.jpg"
                  alt="Daniel - Client Success Partner"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            
            <div className="text-center lg:text-right mt-6 space-y-2">
              <p className="text-xl font-semibold text-dark-text">
                Hi, I'm Daniel — Client Success Partner.
              </p>
              <p className="text-base text-body-text">
                Let's match you with the right interpreter talent today.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FindTalentFooterCta;