import React from 'react';
import { Play } from 'lucide-react';

const FindJobsTestimonials = () => {
  const testimonials = [
    {
      title: 'From Court Interpreter to Global Freelancer',
      description: '"I expanded my practice beyond local courts to international arbitration. See how."'
    },
    {
      title: 'Why Medical Interpretation Is My Passion',
      description: '"Helping patients communicate with doctors in critical moments is incredibly rewarding."'
    },
    {
      title: 'My Clients Appreciate My Cultural Expertise',
      description: '"It\'s not just translation—it\'s helping businesses navigate cultural nuances."'
    }
  ];

  return (
    <section className="bg-[#F8F9FA] py-20 md:py-28" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 id="reviews-heading" className="text-[40px] md:text-[48px] font-bold text-foreground leading-[1.2] tracking-[-0.5px]">
            Our Interpreters Love the Freedom and Flexibility
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-all duration-200 group"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#0B5FFF] to-[#0045C4] mb-5 overflow-hidden group-hover:scale-[1.02] transition-transform duration-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <Play className="w-7 h-7 text-[#0B5FFF] ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3 leading-[1.4]">
                {testimonial.title}
              </h3>
              <p className="text-base text-[#4A4A4A] leading-[1.6] italic">
                {testimonial.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindJobsTestimonials;