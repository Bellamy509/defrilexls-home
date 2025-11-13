import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ContactCta = () => {
  return (
    <section className="bg-secondary py-20 lg:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-[40px] font-bold text-foreground leading-tight">
              Need Assistance?
              <br />
              Let's Connect.
            </h2>
            <p className="text-lg text-muted-foreground mt-4 mb-8 max-w-md mx-auto lg:mx-0">
              Our team is here to help you find the perfect solution for your interpretation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="h-auto rounded-[4px] px-6 py-3 font-semibold text-base bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-auto rounded-[4px] px-6 py-3 font-semibold text-base text-[#1E40AF] border-[#1E40AF] hover:bg-accent hover:text-[#1E40AF]"
              >
                <Link href="/find-talent">Find Talent</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-auto rounded-[4px] px-6 py-3 font-semibold text-base text-[#1E40AF] border-[#1E40AF] hover:bg-accent hover:text-[#1E40AF]"
              >
                <Link href="/find-jobs">Find Jobs</Link>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <div className="text-center">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7e2d66c-2d0b-4e6f-a4b2-dbe099bd877f/generated_images/professional-corporate-headshot-portrait-553c5eb8-20251112170449.jpg"
                alt="Landy, Interpreter Relations Manager"
                width={104}
                height={104}
                className="rounded-full mx-auto"
              />
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-foreground leading-snug">
                  Hello, I'm Landy.
                  <br />
                  How can I assist you today?
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Landy – Interpreter Relations Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;