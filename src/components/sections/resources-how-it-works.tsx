import React from 'react';
import { FolderPlus, UserCheck, Calendar, Headset, Receipt } from 'lucide-react';

const steps = [
  {
    icon: FolderPlus,
    title: 'Post Your Requirements',
    description: 'Define your interpretation needs—languages, specializations, and required certifications.'
  },
  {
    icon: UserCheck,
    title: 'Review Interpreter Profiles',
    description: 'Browse verified interpreters with ratings, experience, and sample work.'
  },
  {
    icon: Calendar,
    title: 'Schedule & Manage',
    description: 'Book instantly or schedule in advance with our automated calendar and reminders.'
  },
  {
    icon: Headset,
    title: 'Connect & Collaborate',
    description: 'Use video, phone, or on-site services—right from the Defrilex platform.'
  },
  {
    icon: Receipt,
    title: 'One Invoice, Full Transparency',
    description: 'Consolidated billing with detailed reporting across all interpretation services.'
  }
];

export default function ResourcesHowItWorks() {
  return (
    <section aria-labelledby="how-it-works" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="how-it-works" className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            How Does It Work?
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-500">
            From posting a request to consolidated billing—everything in one streamlined workflow.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {steps.map((step) => (
            <div 
              key={step.title} 
              className="rounded-2xl bg-white p-6 md:p-7 shadow-sm ring-1 ring-black/5 hover:shadow-md transition"
            >
              <div 
                className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0052CC]" 
                aria-hidden="true"
              >
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
