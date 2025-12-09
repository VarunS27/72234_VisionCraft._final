import React from "react";

const PishAdvertisement = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-5 px-4 py-2 rounded-full bg-slate-900/70 border border-slate-700/70 shadow-lg shadow-slate-900/60">
            <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-md shadow-orange-900/60">
              <svg
                className="w-6 h-6 text-white"
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
            <div className="text-left">
              <h2 className="text-lg font-bold text-white">
                Powered by <span className="text-orange-400">P.I.S.H</span>
              </h2>
              
               <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                Phishing Intelligence & Security Hub
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Your all-in-one{" "}
            <span className="font-semibold text-teal-400">
              real-time phishing detection & prevention suite
            </span>{" "}
            for browsers, emails, and mobile apps.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Browser Extension */}
          <div className="rounded-3xl p-6 lg:p-7 border border-teal-600/60 bg-slate-900/70 backdrop-blur-md shadow-[0_18px_60px_rgba(15,23,42,0.9)] hover:shadow-[0_22px_70px_rgba(15,23,42,1)] hover:border-teal-400/90 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-teal-900/70">
                <svg
                  className="w-8 h-8 text-white"
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
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-600/60">
                Browser Extension
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
              Smart Web Protection
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Real-time website scanning that automatically{" "}
              <span className="font-semibold text-teal-300">
                blocks unsafe websites
              </span>{" "}
              before you can access them.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-teal-400 mr-2 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Instant blocking of malicious URLs</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-teal-400 mr-2 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Scans email links before they open</span>
              </li>
            </ul>
          </div>

          {/* Email Protection */}
          <div className="rounded-3xl p-6 lg:p-7 border border-orange-500/70 bg-slate-900/70 backdrop-blur-md shadow-[0_18px_60px_rgba(15,23,42,0.9)] hover:shadow-[0_22px_70px_rgba(15,23,42,1)] hover:border-orange-400/90 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-orange-900/70">
                <svg
                  className="w-8 h-8 text-white"
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
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-300 border border-orange-600/60">
                Email Guardian
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
              AI Email Shield
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              AI-powered email analysis that{" "}
              <span className="font-semibold text-orange-300">
                detects phishing links
              </span>{" "}
              in your inbox before you click.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Real-time scanning of incoming emails</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mr-2 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Flags suspicious senders & domains</span>
              </li>
            </ul>
          </div>

          {/* Mobile Service */}
          <div className="rounded-3xl p-6 lg:p-7 border border-blue-500/70 bg-slate-900/70 backdrop-blur-md shadow-[0_18px_60px_rgba(15,23,42,0.9)] hover:shadow-[0_22px_70px_rgba(15,23,42,1)] hover:border-blue-400/90 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-blue-900/70">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-600/60">
                Mobile Shield
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              Scam-Safe Messaging
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Smart SMS & WhatsApp monitoring that{" "}
              <span className="font-semibold text-blue-300">
                alerts you of scams
              </span>{" "}
              by analyzing message keywords in real-time.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Detects WhatsApp scam patterns</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Filters fraudulent SMS & URLs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative rounded-3xl border border-orange-500/70 bg-linear-to-r from-slate-900 via-slate-900 to-slate-950 shadow-[0_24px_80px_rgba(15,23,42,1)] px-6 py-8 md:px-10 md:py-10 overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -top-10 w-40 h-40 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Want Complete Protection Against Phishing?
            </h3>
            <p className="text-slate-300 mb-7 text-base md:text-lg leading-relaxed">
              Visit the official P.I.S.H platform to explore the full security
              suite and safeguard your{" "}
              <span className="font-semibold text-orange-300">
                browser, inbox, and mobile
              </span>{" "}
              from all types of phishing threats.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://pishing-intelligence-and-security-hub.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-base md:text-lg px-8 py-3.5 rounded-xl shadow-lg shadow-orange-900/60 transform hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Visit P.I.S.H Official Site</span>
              </a>

              <span className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                Secure • Real-Time • Always-On
              </span>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PishAdvertisement;
