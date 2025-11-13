import React from 'react';

export default function ClientSuccessStory() {
  return (
    <section aria-labelledby="client-success" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 items-center gap-10 md:gap-14">
          {/* Left: Copy */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#0B5FFF] uppercase">
              Client Success Story
            </p>

            <blockquote className="mt-4">
              <p id="client-success" className="text-3xl md:text-4xl font-semibold leading-snug text-[#0A0A23]">
                "The Defrilex Marketplace transformed how we handle multilingual customer support. We scaled from 10 to 200
                interpreters across 15 languages in just two weeks, reducing our language service costs by 65% while improving
                response times. The quality and reliability of interpreters has exceeded our expectations."
              </p>
            </blockquote>

            <div className="mt-6">
              <p className="text-base font-semibold text-gray-900">Sam Morice Golbert</p>
              <p className="text-sm text-gray-500">Chief Executive Officer | Golbert Group Inc.</p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="rounded-2xl shadow-lg ring-1 ring-black/5 overflow-hidden bg-white">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/modern-dashboard-interface-mockup-showin-6f7efe7c-20251112151248.jpg"
                alt="Golbert Group using Defrilex Marketplace to manage interpreters and multilingual support"
                loading="lazy"
                className="w-full h-auto block object-cover aspect-[16/10]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
