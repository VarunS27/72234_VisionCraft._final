import React from 'react';
import PhaseOne from '../components/phases/PhaseOne';
import PhaseTwo from '../components/phases/PhaseTwo';
import PhaseThree from '../components/phases/PhaseThree';
import PhaseFour from '../components/phases/PhaseFour';
import PishAdvertisement from '../components/PishAdvertisement';

const Home = () => {
  const scrollToPhase1 = () => {
    const element = document.getElementById('phase1');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-orange-400 rotate-45"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border-2 border-teal-400 rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-orange-400"></div>
            <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-teal-400 rotate-12"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Alert Badge */}
            <div className="inline-flex items-center bg-red-600 rounded-full px-6 py-2 mb-6 shadow-lg">
              <svg 
                className="w-5 h-5 mr-2 text-white animate-pulse" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-sm font-bold uppercase tracking-wide">
                Security Alert Detected
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Phishing Attack Detected —<br />
              <span className="text-orange-400">Follow These Immediate Steps</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Act quickly to minimize damage and secure your data.
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Follow these four guided phases to protect yourself and recover safely.
            </p>

            {/* Context Note */}
            <div className="border-2 border-orange-400 rounded-lg p-4 mb-10 max-w-2xl mx-auto" style={{ backgroundColor: '#1e293b' }}>
              <p className="text-gray-200 text-sm sm:text-base">
                <span className="font-semibold text-orange-400">You're here because</span> a phishing attempt was detected on your device. 
                This guide will help you respond effectively and secure your accounts.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToPhase1}
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <span>Start with Phase 1</span>
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
              <div className="rounded-lg p-4 border-2 hover:border-orange-400 transition-colors duration-300" style={{ backgroundColor: '#1e293b', borderColor: '#334155' }}>
                <div className="text-3xl font-bold text-orange-400 mb-1">4</div>
                <div className="text-gray-300 text-sm">Critical Phases</div>
              </div>
              <div className="rounded-lg p-4 border-2 hover:border-teal-400 transition-colors duration-300" style={{ backgroundColor: '#1e293b', borderColor: '#334155' }}>
                <div className="text-3xl font-bold text-teal-400 mb-1">12</div>
                <div className="text-gray-300 text-sm">Action Steps</div>
              </div>
              <div className="rounded-lg p-4 border-2 hover:border-orange-400 transition-colors duration-300" style={{ backgroundColor: '#1e293b', borderColor: '#334155' }}>
                <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="rounded-lg p-4 border-2 hover:border-teal-400 transition-colors duration-300" style={{ backgroundColor: '#1e293b', borderColor: '#334155' }}>
                <div className="text-3xl font-bold text-teal-400 mb-1">100%</div>
                <div className="text-gray-300 text-sm">Official Guide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path 
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Phase Sections */}
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
      <PhaseFour />
    <PishAdvertisement />

    </div>
  );
};

export default Home;