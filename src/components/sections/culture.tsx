"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Culture = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white py-20 lg:py-32"
    >
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 xl:px-0">
        <div className="flex flex-col items-center gap-x-12 gap-y-12 md:flex-row lg:gap-x-16">
          {/* Image Column - Takes more space (58%) */}
          <div 
            className={`w-full transition-all duration-1000 md:w-[58%] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/a-diverse-team-of-interpreters-and-profe-545dc900-20251112195209.jpg"
                alt="Diverse team of interpreters and professionals collaborating across a digital globe, connected through technology and language"
                width={700}
                height={525}
                className="w-full transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Image Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>

          {/* Text Column - Takes less space (42%) */}
          <div 
            className={`w-full text-center transition-all delay-200 duration-1000 md:w-[42%] md:text-left ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-dark-text md:text-4xl lg:text-[42px]">
              Experience the Defrilex Culture
            </h2>
            
            <p className="mb-4 text-base leading-[1.8] text-body-text md:text-lg">
              We believe people are at the heart of every great conversation. We're committed to creating an environment where interpreters and translators are valued, fairly compensated, and empowered to thrive.
            </p>
            
            <p className="mb-8 text-base leading-[1.8] text-body-text md:text-lg">
              Our mission is to create a connected world where communication inspires progress.
            </p>

            {/* CTA Button */}
            <a
              href="https://defrilex.com/about.php"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl"
            >
              About Us
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;