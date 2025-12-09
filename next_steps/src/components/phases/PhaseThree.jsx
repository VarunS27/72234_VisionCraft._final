import React, { useState } from 'react';

const PhaseThree = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      id: 7,
      title: "Scan for Malware",
      description: "Run a full system scan using reputable antivirus or anti-malware software.",
      details: "Use Windows Defender, Malwarebytes, or other trusted security software. Perform both quick and deep scans. Disconnect from the internet during the scan if malware is detected. Quarantine or remove any threats found immediately.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      tools: ["Windows Defender", "Malwarebytes", "Norton", "Bitdefender"]
    },
    {
      id: 8,
      title: "Update Software",
      description: "Ensure your operating system, browser, and applications are updated with the latest security patches.",
      details: "Check for OS updates first, then update your web browser, email client, and all installed applications. Enable automatic updates where possible. Pay special attention to security software, plugins, and extensions. Restart your device after critical updates.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      tools: ["Windows Update", "Mac Software Update", "Browser Updates", "App Store"]
    },
    {
      id: 9,
      title: "Document Evidence",
      description: "Take screenshots of phishing emails/messages, URLs, and any suspicious activity for reporting.",
      details: "Capture the full email header including sender address and routing information. Screenshot URLs and webpage content. Document timestamps of suspicious activities. Save original emails in .eml or .msg format. Keep all evidence organized in a secure folder for law enforcement or IT security teams.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      tools: ["Screenshot Tool", "Email Export", "Browser History", "Activity Log"]
    }
  ];

  const checklistItems = [
    { item: "Full system malware scan completed", checked: false },
    { item: "Operating system fully updated", checked: false },
    { item: "Browser and plugins updated", checked: false },
    { item: "Evidence documented and saved", checked: false },
    { item: "Suspicious files quarantined", checked: false },
    { item: "System restart performed", checked: false }
  ];

  return (
    <section id="phase3" className="py-12 md:py-16 bg-linear-to-br from-teal-50 via-cyan-50 to-teal-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-teal-200 hover:shadow-3xl transition-all duration-300">
          {/* Header */}
          <div className="relative bg-linear-to-r from-teal-600 via-cyan-600 to-teal-700 px-6 py-6 md:px-8 md:py-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative flex items-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 md:p-4 mr-4 md:mr-5 shadow-lg">
                <svg 
                  className="w-7 h-7 md:w-9 md:h-9 text-teal-700" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-white bg-opacity-30 text-teal-800 text-xs md:text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Phase 3
                  </span>
                  <span className="text-teal-200 text-xs md:text-sm font-semibold">
                    System Recovery
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Assessment & Remediation
                </h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Objective */}
            <div className="bg-linear-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-5 rounded-lg mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Objective</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Clean your device of malicious software, ensure all systems are secure and updated, and properly document the incident for reporting and future prevention.
                  </p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className="group bg-linear-to-r from-gray-50 to-teal-50 rounded-xl border-2 border-teal-200 hover:border-teal-400 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
                >
                  <button
                    onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start p-5 md:p-6">
                      <div className="shrink-0 bg-linear-to-br from-teal-500 to-cyan-600 text-white rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-bold mr-4 shadow-lg text-lg md:text-xl group-hover:scale-110 transition-transform">
                        {step.id}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                            {step.title}
                          </h3>
                          <div className="flex items-center space-x-2 ml-4">
                            <div className="text-teal-500 group-hover:text-teal-600 transition-colors">
                              {step.icon}
                            </div>
                            <svg 
                              className={`w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-all ${
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
                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-teal-200 bg-white bg-opacity-50">
                      <div className="ml-16 md:ml-18">
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-4">
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                            <span className="font-semibold text-teal-700">Details:</span> {step.details}
                          </p>
                          {step.tools && (
                            <div className="mt-3 pt-3 border-t border-teal-200">
                              <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-2">Recommended Tools:</p>
                              <div className="flex flex-wrap gap-2">
                                {step.tools.map((tool, idx) => (
                                  <span key={idx} className="bg-white border border-teal-300 text-teal-700 text-xs px-3 py-1 rounded-full">
                                    {tool}
                                  </span>
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

            {/* Completion Checklist */}
            <div className="bg-linear-to-br from-teal-50 to-cyan-50 border-2 border-teal-300 rounded-xl p-5 md:p-6">
              <div className="flex items-center mb-4">
                <div className="shrink-0 bg-teal-500 rounded-lg p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-bold text-gray-900">Phase 3 Completion Checklist</h4>
              </div>
              <div className="space-y-2">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-center bg-white p-3 rounded-lg border border-teal-200 hover:border-teal-400 transition-colors">
                    <div className="w-5 h-5 border-2 border-teal-400 rounded mr-3 shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-sm"></div>
                    </div>
                    <span className="text-sm md:text-base text-gray-700">{item.item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Footer */}
            <div className="mt-8 bg-cyan-50 border-2 border-cyan-300 rounded-xl p-5 md:p-6">
              <div className="flex items-start">
                <div className="shrink-0 bg-cyan-500 rounded-lg p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-cyan-900 mb-2">Important Note</h4>
                  <p className="text-sm md:text-base text-cyan-800 leading-relaxed">
                    If malware is detected or you suspect deep system compromise, consider professional IT support or a complete system reinstallation. Back up important files (after scanning them) before performing any major system changes.
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

export default PhaseThree;