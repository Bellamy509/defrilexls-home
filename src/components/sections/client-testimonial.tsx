'use client';

import { useState } from 'react';

const ClientTestimonial = () => {
  const [selectedOption, setSelectedOption] = useState<'provider' | 'user'>('provider');

  return (
    <section className="bg-white py-20 lg:py-0">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Left Column: Text Content */}
          <div className="relative h-[400px] lg:h-[600px] flex flex-col justify-center px-8 lg:px-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-[#1a1a1a]">
              What makes us<br />better?
            </h2>
            <p className="text-base lg:text-lg leading-relaxed max-w-md text-[#4a4a4a]">
              A movement redefining multilingual communication through cutting-edge AI technology and a thriving community of 150,000+ professional interpreters.
            </p>
          </div>

          {/* Right Column: Form Interface */}
          <div className="bg-gray-50 lg:bg-white flex items-center justify-center px-8 lg:px-16 py-16 lg:py-20">
            <div className="w-full max-w-md">
              {/* Radio Options */}
              <div className="space-y-6 mb-10">
                {/* Option 1 */}
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-1">
                    <input
                      type="radio"
                      name="user-type"
                      value="provider"
                      checked={selectedOption === 'provider'}
                      onChange={() => setSelectedOption('provider')}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                      selectedOption === 'provider' 
                        ? 'border-[#0052CC] bg-white' 
                        : 'border-gray-300 bg-white'
                    }`}>
                      {selectedOption === 'provider' && (
                        <div className="w-full h-full rounded-full flex items-center justify-center">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#0052CC]" />
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-lg lg:text-xl font-semibold text-[#0052CC] group-hover:underline">
                    I'm looking for work, I want to become a Service Provider
                  </span>
                </label>

                {/* Option 2 */}
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-1">
                    <input
                      type="radio"
                      name="user-type"
                      value="user"
                      checked={selectedOption === 'user'}
                      onChange={() => setSelectedOption('user')}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                      selectedOption === 'user' 
                        ? 'border-[#0052CC] bg-white' 
                        : 'border-gray-300 bg-white'
                    }`}>
                      {selectedOption === 'user' && (
                        <div className="w-full h-full rounded-full flex items-center justify-center">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#0052CC]" />
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-lg lg:text-xl font-semibold text-[#0052CC] group-hover:underline">
                    I'm a Company/Service User hiring for a project
                  </span>
                </label>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href={selectedOption === 'provider' ? 'https://defrilex-ls.com/find-jobs' : 'https://defrilex-ls.com/find-talent'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0052CC] text-white font-semibold text-lg px-10 py-4 rounded-md hover:bg-[#0065FF] transition-all duration-300 shadow-md inline-block text-center"
                >
                  <span 
                    key={selectedOption}
                    className="inline-block animate-in fade-in slide-in-from-top-2 duration-300"
                  >
                    {selectedOption === 'provider' ? 'Find Jobs' : 'Find Talent'}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;