import React, { useState } from 'react';

const PhaseOne = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Disconnect from Internet",
      description: "Turn off Wi-Fi and unplug Ethernet immediately.",
      details: "This prevents the attacker from accessing your device remotely or sending commands. Disable all network connections including mobile hotspots.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Isolate Device",
      description: "Do not use the compromised device for any further activity.",
      details: "Avoid accessing any sensitive information, banking apps, or logging into accounts. Use a different, secure device for urgent tasks.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Do Not Click or Engage",
      description: "Do not click any links, download attachments, or reply to the attacker.",
      details: "Engaging with phishing content can trigger malware downloads, data theft, or further compromise. Keep all suspicious emails and messages as evidence.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="phase1" className="py-12 md:py-16 bg-linear-to-br from-orange-50 via-red-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Phase Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-orange-200 hover:shadow-3xl transition-all duration-300">
          {/* Header */}
          <div className="relative bg-linear-to-r from-orange-600 via-red-600 to-orange-700 px-6 py-6 md:px-8 md:py-8 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative flex items-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 md:p-4 mr-4 md:mr-5 shadow-lg">
                <svg 
                  className="w-7 h-7 md:w-9 md:h-9 text-red-700" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-white bg-opacity-30 text-red-950 text-xs md:text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Phase 1
                  </span>
                  <span className="text-orange-200 text-xs md:text-sm font-semibold">
                    Critical Priority
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Immediate Containment
                </h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Description */}
            <div className="bg-linear-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-5 rounded-lg mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-orange-600 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Objective</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Quickly isolate the threat to prevent further damage and stop the attacker from accessing your system or data.
                  </p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className="group bg-linear-to-r from-gray-50 to-orange-50 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
                >
                  <button
                    onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start p-5 md:p-6">
                      {/* Number Badge */}
                      <div className="shrink-0 bg-linear-to-br from-orange-500 to-red-600 text-white rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-bold mr-4 shadow-lg text-lg md:text-xl group-hover:scale-110 transition-transform">
                        {step.id}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {step.title}
                          </h3>
                          <div className="flex items-center space-x-2 ml-4">
                            {/* Icon */}
                            <div className="text-orange-500 group-hover:text-orange-600 transition-colors">
                              {step.icon}
                            </div>
                            {/* Expand Arrow */}
                            <svg 
                              className={`w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-all ${
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

                  {/* Expanded Details */}
                  {expandedStep === step.id && (
                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-orange-200 bg-white bg-opacity-50">
                      <div className="ml-16 md:ml-18">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            <span className="font-semibold text-orange-700">Details:</span> {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Warning Footer */}
            <div className="mt-8 bg-red-50 border-2 border-red-300 rounded-xl p-5 md:p-6">
              <div className="flex items-start">
                <div className="shrink-0 bg-red-500 rounded-lg p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-red-900 mb-2">Time is Critical</h4>
                  <p className="text-sm md:text-base text-red-800 leading-relaxed">
                    Complete these steps within the first 5 minutes of detecting the attack. Every second counts in preventing data theft and system compromise.
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

export default PhaseOne;