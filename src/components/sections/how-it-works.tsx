import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Review Interpreter Profiles',
    description: 'Browse verified interpreters with ratings, experience, and sample work'
  },
  {
    number: '02',
    title: 'Schedule & Manage',
    description: 'Book interpreters instantly or schedule in advance with our automated system'
  },
  {
    number: '03',
    title: 'Connect & Collaborate',
    description: 'Use our platform for video, phone, or on-site interpretation services'
  },
  {
    number: '04',
    title: 'One Invoice, Complete Transparency',
    description: 'Consolidated billing with detailed reporting on all interpretation services'
  }
];

const HowItWorks = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F8F9FA] to-white py-20 lg:py-24 overflow-hidden">
      {/* Subtle background pattern for depth */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative wave divider - top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      <div className="relative max-w-[1200px] mx-auto px-4 xl:px-0">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-[40px] md:text-[48px] lg:text-[52px] font-bold text-foreground leading-[1.2] tracking-[-0.5px] mb-4">
            How Does It Work?
          </h2>
          <p className="text-lg text-[#768190] max-w-2xl mx-auto leading-relaxed">
            A simple, streamlined process designed for efficiency and clarity
          </p>
        </div>

        {/* Step indicator line */}
        <div className="hidden lg:flex justify-center items-center mb-12 relative">
          <div className="flex items-center gap-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold text-sm flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 ease-out shadow-sm hover:shadow-2xl ring-1 ring-gray-100 hover:ring-2 hover:ring-blue-400/50"
              style={{
                backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FAFBFC'
              }}
            >
              {/* Top accent bar - appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Step number badge */}
              <div className="mb-6">
                <span className="inline-block text-5xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent leading-none">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-[22px] lg:text-[24px] font-bold text-foreground mb-4 leading-[1.3] tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-[15px] lg:text-base text-[#768190] leading-[1.8]">
                {step.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:via-blue-400/3 group-hover:to-blue-600/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative wave divider - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
    </section>
  );
};

export default HowItWorks;