import React, { useState } from 'react';

const PhaseFour = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      id: 10,
      title: "Notify Internal Teams",
      description: "If this is a work device, inform your IT department, security team, or manager.",
      details: "Contact your IT security team within the first hour. Provide them with all documented evidence, including screenshots and timestamps. Follow your organization's incident response protocol. Do not attempt to fix work systems independently without IT approval.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      contacts: ["IT Security Team", "Manager/Supervisor", "HR Department", "Compliance Officer"]
    },
    {
      id: 11,
      title: "Contact Bank / Financial Institutions",
      description: "Immediately report any financial fraud or suspicious transactions.",
      details: "Call your bank's fraud department immediately if you shared financial information. Request to freeze your accounts temporarily. Review all recent transactions for unauthorized activity. File a fraud report and request new cards/account numbers. Enable transaction alerts for all accounts.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      contacts: ["Bank Fraud Department", "Credit Card Companies", "Payment Services", "Investment Accounts"]
    },
    {
      id: 12,
      title: "Monitor Credit & Identity",
      description: "Regularly review your credit reports and bank statements for signs of identity theft.",
      details: "Set up credit monitoring with all three major credit bureaus. Check your credit reports monthly for the next 6-12 months. Consider placing a fraud alert or credit freeze. Monitor your accounts daily for unusual activity. Keep detailed records of all suspicious events and actions taken.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      contacts: ["Equifax", "Experian", "TransUnion", "Credit Monitoring Services"]
    }
  ];

  const reportingChannels = [
    {
      name: "National Cyber Crime Helpline",
      number: "1930",
      description: "24/7 toll-free support for cyber crime reporting",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    },
    {
      name: "Cybercrime Portal",
      number: "cybercrime.gov.in",
      description: "Online portal for filing cyber complaints",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    },
    {
      name: "Local Police Station",
      number: "File FIR",
      description: "Report to local cyber cell for serious incidents",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];

  return (
    <section id="phase4" className="py-12 md:py-16 bg-linear-to-br from-blue-50 via-indigo-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200 hover:shadow-3xl transition-all duration-300">
          {/* Header */}
          <div className="relative bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 py-6 md:px-8 md:py-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative flex items-center">
              <div className="bg-blue-950 bg-opacity-20 backdrop-blur-sm rounded-xl p-3 md:p-4 mr-4 md:mr-5 shadow-lg">
                <svg 
                  className="w-7 h-7 md:w-9 md:h-9 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-white bg-opacity-30 text-blue-500 text-xs md:text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Phase 4
                  </span>
                  <span className="text-blue-200 text-xs md:text-sm font-semibold">
                    Final Steps
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Reporting & Recovery
                </h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Objective */}
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Objective</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Report the incident to appropriate authorities, notify affected parties, and establish ongoing monitoring to detect and prevent future incidents or identity theft.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Reporting Channels */}
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Official Reporting Channels
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {reportingChannels.map((channel, index) => (
                  <div key={index} className="bg-white rounded-lg border-2 border-blue-200 p-4 hover:border-blue-400 transition-all hover:shadow-md">
                    <div className="flex items-start mb-3">
                      <div className="bg-blue-500 rounded-lg p-2 mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={channel.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{channel.name}</h4>
                        <p className="text-blue-600 font-bold text-lg mb-1">{channel.number}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">{channel.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className="group bg-linear-to-r from-gray-50 to-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
                >
                  <button
                    onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start p-5 md:p-6">
                      <div className="shrink-0 bg-linear-to-br from-blue-500 to-indigo-600 text-white rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-bold mr-4 shadow-lg text-lg md:text-xl group-hover:scale-110 transition-transform">
                        {step.id}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {step.title}
                          </h3>
                          <div className="flex items-center space-x-2 ml-4">
                            <div className="text-blue-500 group-hover:text-blue-600 transition-colors">
                              {step.icon}
                            </div>
                            <svg 
                              className={`w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-all ${
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
                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-blue-200 bg-white bg-opacity-50">
                      <div className="ml-16 md:ml-18">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                            <span className="font-semibold text-blue-700">Details:</span> {step.details}
                          </p>
                          {step.contacts && (
                            <div className="mt-3 pt-3 border-t border-blue-200">
                              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">Contact:</p>
                              <div className="grid grid-cols-2 gap-2">
                                {step.contacts.map((contact, idx) => (
                                  <div key={idx} className="bg-white border border-blue-300 text-blue-700 text-xs px-3 py-2 rounded-lg flex items-center">
                                    <svg className="w-3 h-3 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span>{contact}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Long-term Monitoring */}
            <div className="bg-linear-to-br from-indigo-50 to-blue-50 border-2 border-indigo-300 rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-start">
                <div className="shrink-0 bg-indigo-500 rounded-lg p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-indigo-900 mb-2">Long-term Monitoring Plan</h4>
                  <p className="text-sm md:text-base text-indigo-800 leading-relaxed mb-3">
                    Continue vigilant monitoring for at least 6-12 months after the incident. Identity theft and fraud can surface weeks or months later.
                  </p>
                  <ul className="space-y-2 text-sm text-indigo-800">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Review bank and credit card statements weekly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Check credit reports from all three bureaus monthly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Enable alerts for all financial transactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Monitor email and social media for suspicious activity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Footer */}
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5 md:p-6">
              <div className="flex items-start">
                <div className="shrink-0 bg-green-500 rounded-lg p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-green-900 mb-2">Recovery Complete</h4>
                  <p className="text-sm md:text-base text-green-800 leading-relaxed">
                    You've taken all the necessary steps to secure your accounts and systems. Stay vigilant and continue following security best practices to prevent future incidents. Consider this experience a learning opportunity to strengthen your cybersecurity awareness.
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

export default PhaseFour;