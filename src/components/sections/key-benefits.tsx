const KeyBenefits = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
            <h2 className="text-[36px] md:text-[40px] font-bold text-dark-text leading-[1.3]">
              Key benefits
            </h2>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col gap-12">
              <div>
                <h4 className="text-lg md:text-xl font-bold text-dark-text mb-2">Largest Global Network</h4>
                <p className="text-base text-body-text leading-[1.6] mb-4">
                  Access 150,000+ pre-qualified interpreters across 300+ languages—the industry's most extensive talent pool. Trusted by Fortune 500 companies for mission-critical communications, our network delivers proven reliability at any scale, from single calls to enterprise-wide programs.
                </p>
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-bold text-dark-text mb-2">Instant Connection</h4>
                <p className="text-base text-body-text leading-[1.6] mb-4">
                  AI-powered matching connects you with the perfect interpreter in seconds, not days. No waiting, no recruiting—just 24/7 access to ready-now professionals. Deploy interpretation services immediately for urgent needs or scheduled events.
                </p>
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-bold text-dark-text mb-2">Risk-Free & Compliant</h4>
                <p className="text-base text-body-text leading-[1.6] mb-4">
                  Start for free with no upfront costs, subscriptions, or hidden fees—pay only when you hire. Built for regulated industries with intelligent compliance features ensuring HIPAA, GDPR, and data protection standards are automatically met on every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;