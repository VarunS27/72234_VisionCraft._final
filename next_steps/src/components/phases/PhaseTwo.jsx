import React, { useState } from 'react';

const PhaseTwo = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      id: 4,
      title: "Change Passwords (On a Clean Device)",
      description: "Using a secure device, change passwords for critical accounts (email, banking, social media, work accounts).",
      details: "Start with your email password first, as it's often used for password recovery on other accounts. Use strong, unique passwords for each account. Consider using a password manager to generate and store complex passwords securely.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      priority: "High"
    },
    {
      id: 5,
      title: "Enable 2FA / MFA",
      description: "Turn on Two-Factor or Multi-Factor Authentication wherever possible.",
      details: "Prioritize authenticator apps (Google Authenticator, Authy) over SMS-based 2FA. Add backup authentication methods and save recovery codes in a secure location. Enable 2FA on email, banking, and social media accounts immediately.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      priority: "Critical"
    },
    {
      id: 6,
      title: "Review Account Activity",
      description: "Check for unauthorized logins, settings changes, or suspicious transactions.",
      details: "Look for unfamiliar IP addresses, devices, or locations in login history. Check email forwarding rules, recovery phone numbers, and authorized applications. Review recent financial transactions and set up transaction alerts for future monitoring.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      priority: "High"
    }
  ];

  const accountTypes = [
    { name: "Email Accounts", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { name: "Banking & Finance", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
    { name: "Social Media", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { name: "Work & Professional", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
  ];

  return (
    <section id="phase2" className="py-12 md:py-16 bg-linear-to-br from-amber-50 via-yellow-50 to-amber-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-200 hover:shadow-3xl transition-all duration-300">
          {/* Header */}
          <div className="relative bg-linear-to-r from-amber-600 via-yellow-600 to-amber-700 px-6 py-6 md:px-8 md:py-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative flex items-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 md:p-4 mr-4 md:mr-5 shadow-lg">
                <svg 
                  className="w-7 h-7 md:w-9 md:h-9 text-orange-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" 
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-white bg-opacity-30 text-orange-800 text-xs md:text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Phase 2
                  </span>
                  <span className="text-amber-200 text-xs md:text-sm font-semibold">
                    Essential Security
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Credential & Account Security
                </h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Objective */}
            <div className="bg-linear-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 rounded-lg mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-amber-600 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Objective</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Secure your online accounts from unauthorized access and prevent attackers from using stolen credentials to compromise additional services.
                  </p>
                </div>
              </div>
            </div>

            {/* Priority Accounts Section */}
            <div className="mb-8 bg-amber-50 border border-amber-200 rounded-xl p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Priority Account Types
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {accountTypes.map((account, index) => (
                  <div key={index} className="flex items-center bg-white p-3 rounded-lg border border-amber-200">
                    <svg className="w-5 h-5 text-amber-600 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={account.icon} />
                    </svg>
                    <span className="text-sm md:text-base text-gray-700 font-medium">{account.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className="group bg-linear-to-r from-gray-50 to-amber-50 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
                >
                  <button
                    onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start p-5 md:p-6">
                      <div className="shrink-0 bg-linear-to-br from-amber-500 to-yellow-600 text-white rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-bold mr-4 shadow-lg text-lg md:text-xl group-hover:scale-110 transition-transform">
                        {step.id}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2 flex-wrap">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                              {step.title}
                            </h3>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                              step.priority === 'Critical' 
                                ? 'bg-red-100 text-red-700' 
                                : 'bg-amber-100 text-amber-700'
                            }`}>
                              {step.priority}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <div className="text-amber-500 group-hover:text-amber-600 transition-colors">
                              {step.icon}
                            </div>
                            <svg 
                              className={`w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-all ${
                                expandedStep === step.id ? 'rotate-180' : ''
                              }`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </button>

                  {expandedStep === step.id && (
                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-amber-200 bg-white bg-opacity-50">
                      <div className="ml-16 md:ml-18">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            <span className="font-semibold text-amber-700">Details:</span> {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Best Practices Footer */}
            <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5 md:p-6">
              <div className="flex items-start">
                <div className="shrink-0 bg-yellow-500 rounded-lg p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-yellow-900 mb-2">Security Best Practice</h4>
                  <p className="text-sm md:text-base text-yellow-800 leading-relaxed">
                    Never reuse passwords across multiple accounts. If one account is compromised, attackers will try the same credentials on other popular services. Use a reputable password manager to maintain unique, strong passwords for every account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhaseTwo;