import React from 'react';
import { DollarSign, Home, Calendar, Briefcase, Globe2, Zap } from 'lucide-react';

const FindJobsWhy = () => {
  const features = [
    {
      title: 'Earn Premium Rates',
      description: 'Set your own rates and work with companies that value professional interpretation services.'
    },
    {
      title: 'Work From Anywhere',
      description: 'Provide remote interpretation from the comfort of your home or office.'
    },
    {
      title: 'Create Your Schedule',
      description: 'Choose assignments that fit your availability—morning, evening, or weekend.'
    },
    {
      title: 'Access Multiple Clients',
      description: 'Build a diverse portfolio with steady work from various industries.'
    },
    {
      title: 'Make a Global Impact',
      description: 'Bridge language barriers and facilitate important conversations worldwide.'
    },
    {
      title: 'Grow With Technology',
      description: 'Leverage AI-powered tools, smart scheduling, and digital dashboards designed to help interpreters work efficiently and scale their success.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-muted/30 to-background py-20 md:py-28" aria-labelledby="why-interpreters">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="why-interpreters" className="text-[40px] md:text-[48px] font-bold text-foreground leading-[1.2] tracking-[-0.5px]">
            Why Interpreters Choose Defrilex
          </h2>
        </div>

        {/* Feature Cards Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            return (
              <div 
                key={index} 
                className="group relative rounded-xl bg-white border border-border/40 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
              >
                {/* Subtle gradient accent on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Blue gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-[1.4] tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[15px] text-muted-foreground leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FindJobsWhy;