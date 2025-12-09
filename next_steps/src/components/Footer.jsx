import React from 'react';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-navy-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">
            INDIAN CYBER SECURITY CELL – CONTACT DETAILS
          </h2>
          <p className="text-gray-300 text-lg">
            Report cyber crime and incidents via official channels
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* National Cyber Crime Helpline */}
          <div className="bg-navy-800 rounded-lg p-6 text-center hover:bg-navy-700 transition-colors">
            <div className="flex justify-center mb-4">
              <svg 
                className="w-12 h-12 text-orange-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">National Cyber Crime Helpline</h3>
            <p className="text-4xl font-bold text-orange-400 mb-2">1930</p>
            <p className="text-gray-300">(Toll-Free, 24/7)</p>
          </div>

          {/* Online Reporting Portal */}
          <div className="bg-navy-800 rounded-lg p-6 text-center hover:bg-navy-700 transition-colors">
            <div className="flex justify-center mb-4">
              <svg 
                className="w-12 h-12 text-teal-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Online Reporting Portal</h3>
            <a 
              href="https://cybercrime.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl font-bold text-teal-400 hover:text-teal-300 block mb-2 underline"
            >
              cybercrime.gov.in
            </a>
            <p className="text-gray-300 text-sm">National Cyber Crime Reporting Portal</p>
          </div>

          {/* CERT-In Incident Reporting */}
          <div className="bg-navy-800 rounded-lg p-6 text-center hover:bg-navy-700 transition-colors">
            <div className="flex justify-center mb-4">
              <svg 
                className="w-12 h-12 text-orange-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">CERT-In Incident Reporting</h3>
            <div className="text-left text-sm space-y-1 text-gray-300">
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href="mailto:incident@cert-in.org.in" className="text-teal-400 hover:underline">
                  incident@cert-in.org.in
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>{' '}
                +91-1800-11-4949 (Toll-Free)
              </p>
              <p className="pl-12">+91-11-24368572</p>
              <p>
                <span className="font-semibold text-white">Fax:</span> +91-1800-11-6969
              </p>
              <p>
                <span className="font-semibold text-white">Website:</span>{' '}
                <a 
                  href="https://www.cert-in.org.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline"
                >
                  www.cert-in.org.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300 text-lg font-medium">
            Stay vigilant. Think before you click. Cyber security is a shared responsibility.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
