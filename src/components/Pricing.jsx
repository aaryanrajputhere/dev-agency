import React from "react";
import { useState, useEffect } from "react";

function Pricing() {
  const words = ["pricing", "plans"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const word = words[currentWordIndex];
    
    if (isTyping) {
      if (currentText === word) {
        // Finished typing the word, pause before deleting
        setTimeout(() => setIsTyping(false), 1500);
        return;
      }
      
      // Typing effect
      const timeout = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length + 1));
      }, 150);
      
      return () => clearTimeout(timeout);
    } else {
      if (currentText === "") {
        // Move to the next word
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
        return;
      }
      
      // Deleting effect
      const timeout = setTimeout(() => {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentText, isTyping, currentWordIndex, words]);
  
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-16 px-4 sm:px-6">
      {/* Refined stars effect - subtle white dots */}
      <div className="absolute inset-0 z-0 opacity-60 sm:opacity-100">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 0.5 + 'px',
              height: Math.random() * 2 + 0.5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.3 + 0.05,
            }}
          />
        ))}
      </div>
      
      {/* Responsive white glow accents - smaller on mobile */}
      <div className="absolute top-1/4 -left-16 sm:-left-32 w-32 sm:w-64 h-32 sm:h-64 bg-white rounded-full filter blur-3xl opacity-3 sm:opacity-5" />
      <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-32 sm:w-64 h-32 sm:h-64 bg-white rounded-full filter blur-3xl opacity-3 sm:opacity-5" />
      <div className="absolute top-2/3 left-1/3 w-24 sm:w-48 h-24 sm:h-48 bg-white rounded-full filter blur-3xl opacity-2 sm:opacity-3" />
      
      {/* Subtle grain texture overlay for visual interest */}
      <div 
        className="absolute inset-0 z-0 opacity-20 sm:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
      
      <div className="z-10 flex flex-col items-center w-full max-w-6xl mx-auto container">
        {/* Heading Section - Styled similar to Hero */}
        <div className="mt-4 flex flex-col items-start text-left w-full mb-16">
          <div className="px-4 py-2 mb-6 text-sm border border-solid border-gray-700 rounded-full text-gray-400 w-fit">
            Our Price 
          </div>
          <h1 className="mb-5 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif tracking-wide text-gray-300">
            <div className="flex flex-wrap items-baseline">
              <span>Our Flexible</span>
              <span className="relative ml-3 inline-block">
                <span className="text-white font-semibold">
                  {currentText}
                  <span className="animate-pulse text-white opacity-80">|</span>
                </span>
              </span>
            </div>
          </h1>
          <h2 className="ml-1 text-xl sm:text-xl md:text-2xl font-light text-gray-400 italic font-serif">
            Choose the plan that works <span className="text-white font-medium">best</span> for your <span className="text-gray-200 font-medium">business needs</span>
          </h2>
        </div>
        
        {/* Pricing Cards - Updated to match Hero styling */}
        <div className="flex flex-wrap justify-center gap-8 mt-6 w-full max-w-5xl">
          {/* Monthly Retainer Plan */}
          <div className="flex flex-col w-full max-w-md p-8 border border-gray-800 rounded-2xl bg-black bg-opacity-80 backdrop-blur-sm hover:border-gray-600 transition-all duration-300 shadow-xl shadow-white/5 transform hover:scale-105">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <div className="text-xl font-serif text-white">Monthly Retainer</div>
              </div>
              <div className="flex items-end gap-1 mb-4">
                <div className="text-5xl font-bold text-white">$699+</div>
                <div className="mb-1 text-base text-gray-400">/month</div>
              </div>
              <div className="text-sm text-gray-400">
                Ongoing support and development for businesses needing consistent work
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mb-8 mt-6">
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="text-base text-gray-300">Dedicated development team</div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="text-base text-gray-300">40 hours of development monthly</div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <div className="text-base text-gray-300">Ongoing maintenance & updates</div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <div className="text-base text-gray-300">Priority support (24-hour response)</div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                <div className="text-base text-gray-300">Monthly performance reports</div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
                <div className="text-base text-gray-300">Cancel anytime with 30-day notice</div>
              </div>
            </div>
            
           
        <a
                href="https://cal.com/aaryanrajput/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-md shadow-white/10 transform hover:scale-105 hover:shadow-white/20 active:scale-95 text-sm sm:text-base w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
                >
                <span className="font-medium">Book a 15-min discovery call</span>
                <svg className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </a>
     
          </div>
          
          {/* Project Basis Plan */}
          <div className="flex flex-col w-full max-w-md p-8 border-2 border-white rounded-2xl bg-black bg-opacity-80 backdrop-blur-sm relative overflow-hidden shadow-xl shadow-white/10 transform hover:scale-105 transition-all duration-300">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-white rounded-full filter blur-3xl opacity-5" />
            
            {/* Most Popular Tag */}
            <div className="absolute -left-2 top-3 bg-white text-black py-1 px-4 text-xs font-bold z-10">
              MOST POPULAR
            </div>
            
            <div className="mb-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div className="text-xl font-serif text-white">Project Basis</div>
              </div>
              <div className="flex items-end gap-1 mb-4">
                <div className="text-5xl font-bold text-white">$999+</div>
                <div className="mb-1 text-base text-gray-400">one-time</div>
              </div>
              <div className="text-sm text-gray-400">
                Complete project delivery from concept to launch with fixed scope
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mb-8 mt-6">
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
                <div className="text-base text-gray-300">Full project development</div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <div className="text-base text-gray-300">Detailed project documentation</div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
                <div className="text-base text-gray-300">Custom features & integrations</div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                <div className="text-base text-gray-300">Advanced security implementation</div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="text-base text-gray-300">Dedicated project manager</div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <div className="text-base text-gray-300">4 weeks of post-launch support</div>
              </div>
            </div>
            
            <a
                href="https://cal.com/aaryanrajput/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-md shadow-white/10 transform hover:scale-105 hover:shadow-white/20 active:scale-95 text-sm sm:text-base w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
                >
                <span className="font-medium">Book a 15-min discovery call</span>
                <svg className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </a>
     
          </div>
        </div>
        
        {/* Additional Info - Styled similar to Hero */}
        <div className="mt-16 text-center max-w-2xl">
          <p className="text-gray-400 mb-4 text-base sm:text-lg leading-relaxed tracking-wide">
            Both plans include deployment, hosting setup, and basic SEO optimization.
            <br />Need a <span className="text-white font-medium">custom solution</span>? Let's discuss your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="px-6 py-3 bg-transparent text-white rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300 flex items-center transform hover:scale-105">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Schedule a Call
            </button>
            <button className="px-6 py-3 bg-transparent text-white rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300 flex items-center transform hover:scale-105">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
