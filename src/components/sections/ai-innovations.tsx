import Link from 'next/link';

const AiInnovations = () => {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8 items-center gap-y-12">
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/gemini-2_5-flash-image-preview-3-1762810364491.png?width=8000&height=8000&resize=contain"
                alt="Global customer support network"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-5 lg:col-start-8">
            <h3 className="text-2xl font-bold leading-[1.4] md:text-[28px]">
              The Smarter Way to Source Interpretation Services
            </h3>
            <p className="mt-4 text-base leading-[1.6]">
              Transform your multilingual operations with on-demand access to thousands of professional interpreters worldwide. No more vendor juggling, scheduling headaches, or quality concerns. Scale your team instantly and manage everything securely through one intelligent platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInnovations;