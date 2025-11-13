import Image from 'next/image';
import SignupForm from '@/components/auth/signup-form';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export const metadata = {
  title: 'Sign Up | Interpreter Marketplace',
  description: 'Create your account to connect with clients and interpreters worldwide',
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main Content - Two Panel Layout */}
      <main className="flex-1 flex overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row">
          {/* Left Panel - Marketing */}
          <div className="lg:w-[38%] bg-gradient-to-br from-[#1A73E8] via-[#0B5FFF] to-[#0055D4] text-white py-8 px-6 lg:py-16 lg:px-10 flex items-center">
            <div className="max-w-md mx-auto w-full space-y-5">
              {/* Marketing Copy */}
              <div className="space-y-2.5">
                <h1 className="text-3xl font-bold leading-tight">
                  Where clients and interpreters meet to work.
                </h1>
                <p className="text-base text-white/90 leading-relaxed">
                  Connect. Collaborate. Communicate — faster, smarter, globally.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-4.5 h-4.5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium leading-tight">Connect with top professionals</p>
                    <p className="text-xs text-white/75 mt-0.5">Access to thousands of verified interpreters worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-4.5 h-4.5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium leading-tight">Secure and trusted platform</p>
                    <p className="text-xs text-white/75 mt-0.5">Enterprise-grade security for all your projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-4.5 h-4.5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium leading-tight">Get started in minutes</p>
                    <p className="text-xs text-white/75 mt-0.5">Simple onboarding process, start working today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="lg:w-[62%] bg-white py-8 px-8 lg:py-12 lg:px-12 flex items-center overflow-y-auto">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                  Create your account
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Join thousands of clients and interpreters worldwide
                </p>
              </div>

              <SignupForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}