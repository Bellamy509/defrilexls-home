import React from 'react';
import { Check } from 'lucide-react';

interface AdvantageItem {
  text: string;
}

const advantageItems: AdvantageItem[] = [
  {
    text: "150,000+ Active Interpreters — The largest network of pre-qualified language professionals"
  },
  {
    text: "Instant Matching Technology — Connect with the right interpreter in seconds"
  },
  {
    text: "Ready-Now Workforce — No waiting, no recruiting—interpreters available 24/7"
  },
  {
    text: "Proven at Scale — Trusted by Fortune 500 companies for mission-critical communications"
  }
];

const LatestNews = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div className="mb-12 md:mb-0">
            <h3 className="text-2xl md:text-[28px] font-bold text-[#1A1A1A] leading-[1.4]">
              The Defrilex Advantage
            </h3>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-6">
              {advantageItems.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <Check className="w-6 h-6 text-[#0B5FFF] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-base text-[#4A4A4A] leading-[1.6]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;