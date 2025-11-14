export const metadata = {
  title: 'Interpreter Dashboard | Interpreter Marketplace',
  description: 'Find interpretation jobs and manage your professional profile',
};

export default function InterpreterDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Your Interpreter Dashboard
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                You've successfully signed up as an <span className="font-semibold text-purple-600">Interpreter</span>!
              </p>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  What's Next?
                </h2>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Complete your professional profile and add certifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Browse available interpretation jobs in your languages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Submit proposals and connect with clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Build your reputation with client reviews</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-4 justify-center">
                <a
                  href="/find-jobs"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition-colors"
                >
                  Find Jobs
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-md font-semibold hover:bg-gray-50 transition-colors"
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
