export const metadata = {
  title: 'Vendor Dashboard | Interpreter Marketplace',
  description: 'Manage your interpretation services and client relationships',
};

export default function VendorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Your Vendor Dashboard
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                You've successfully signed up as a <span className="font-semibold text-teal-600">Vendor</span>!
              </p>
              
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  What's Next?
                </h2>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Set up your company profile and service offerings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Manage your team of interpreters and their assignments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Connect with clients seeking interpretation services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Track projects, invoices, and business metrics</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-4 justify-center">
                <a
                  href="/find-talent"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 transition-colors"
                >
                  Manage Services
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 border-2 border-teal-600 rounded-md font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
