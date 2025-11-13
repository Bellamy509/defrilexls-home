import Image from "next/image";

const OurOffer = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#FAFBFC] to-[#F9FAFB] py-[100px] lg:py-[120px] overflow-hidden">
      {/* Subtle floating shapes for visual bridge from Hero */}
      <div className="absolute top-8 right-[10%] w-32 h-32 bg-[#1E40AF]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 left-[15%] w-24 h-24 bg-[#2563EB]/5 rounded-full blur-2xl animate-pulse delay-300"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 xl:px-0">
        {/* Premium Container Card */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-12 lg:p-16 border border-[#E5E7EB]/50">
          {/* Two-Column Layout: Text Left, Illustration Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <h2 className="text-[42px] md:text-[48px] lg:text-[52px] font-bold text-[#1A1A1A] leading-[1.2] tracking-[-0.5px]">
                Leading brands trust our on-demand interpreter marketplace
              </h2>
              <p className="mt-6 text-[17px] md:text-[18px] text-[#4B5563] leading-[1.6]">
                Whether you need 5, 10, 20, or 100 professional interpreters, access the world's best talent instantly — reliable, scalable, and ready to serve.
              </p>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="https://defrilex-ls.com/find-talent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#1E40AF] text-white text-base font-semibold rounded-[4px] transition-all duration-200 hover:bg-[#2563EB] shadow-sm hover:shadow-md"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column: Modern Vector Illustration */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/modern-minimalist-vector-illustration-sh-2ca25e2e-20251112174002.jpg"
                alt="Global interpreter network connecting diverse professionals through digital collaboration"
                width={600}
                height={450}
                className="w-full max-w-[520px] h-auto rounded-lg"
                priority={false}
              />
            </div>
          </div>

          {/* Feature Trio Cards - Horizontal Row Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#E5E7EB]/50">
            {/* Card 1: Global Talent Network */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(30,64,175,0.15)] transition-all duration-300 hover:-translate-y-1 border border-[#E5E7EB]/70 group">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1A1A1A] mb-3 leading-tight">
                  Global Talent Network
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#4B5563] leading-[1.6]">
                  Access qualified interpreters across 100+ countries and 300+ languages, whenever you need them.
                </p>
              </div>
            </div>

            {/* Card 2: Flexible & Scalable */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(30,64,175,0.15)] transition-all duration-300 hover:-translate-y-1 border border-[#E5E7EB]/70 group">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1A1A1A] mb-3 leading-tight">
                  Flexible & Scalable
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#4B5563] leading-[1.6]">
                  Deploy interpretation services in hours, not weeks. Scale your team up or down instantly to match demand.
                </p>
              </div>
            </div>

            {/* Card 3: Complete Control */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(30,64,175,0.15)] transition-all duration-300 hover:-translate-y-1 border border-[#E5E7EB]/70 group">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1A1A1A] mb-3 leading-tight">
                  Complete Control
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#4B5563] leading-[1.6]">
                  Full visibility into every assignment with real-time tracking and transparent pricing from one dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffer;