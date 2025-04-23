"use client";
import React from "react";

function OurProcess() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-16 px-4 sm:px-6">
      {/* Content container with responsive layout */}
      <div className="container mx-auto z-10 mt-15 flex flex-col items-start justify-center max-w-6xl lg:mt-10">
        <div className="flex flex-col justify-start items-start text-left max-w-3xl w-full mb-10">
          <div className="px-4 py-3 mb-6 text-sm border border-solid border-white border-opacity-30 rounded-full text-gray-300 w-fit">
            Our Process
          </div>
          
          <h1 className="mb-5 text-4xl sm:text-5xl font-serif tracking-wide text-gray-300">
            Our <span className="text-white font-semibold">Proven</span> Development Process
          </h1>
          
          <p className="mt-2 text-base sm:text-lg text-gray-500 leading-relaxed tracking-wide max-w-lg">
            A transparent, efficient journey from your initial idea to a
            market-ready MVP in just <span className="text-white font-medium">5 weeks</span>. Here's how we make it happen.
          </p>
        </div>
        
        {/* First row of process cards */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 w-full">
          <div className="flex flex-col flex-1 items-center p-6 rounded-2xl border-2 border-gray-800 bg-black bg-opacity-70 backdrop-blur-sm hover:border-white transition-all duration-300 shadow-xl shadow-white/5 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="67:401" layer-name="SVG" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 40px; height: 40px"> <path d="M13.6636 3.33337V10" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M26.9966 3.33337V10" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M31.9967 6.66663H8.66341C6.82246 6.66663 5.33008 8.15901 5.33008 9.99996V33.3333C5.33008 35.1742 6.82246 36.6666 8.66341 36.6666H31.9967C33.8377 36.6666 35.3301 35.1742 35.3301 33.3333V9.99996C35.3301 8.15901 33.8377 6.66663 31.9967 6.66663Z" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.33008 16.6666H35.3301" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            </div>
            <div className="mb-4 text-xl font-bold leading-7 text-center text-white">
              Initial Consultation
            </div>
            <div className="text-base leading-6 text-center text-gray-400">
              Book a call with our founder to discuss your vision. We'll explore
              your idea and understand your business goals in detail.
            </div>
          </div>
          
          <div className="flex flex-col flex-1 items-center p-6 rounded-2xl border-2 border-gray-800 bg-black bg-opacity-70 backdrop-blur-sm hover:border-white transition-all duration-300 shadow-xl shadow-white/5 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="67:410" layer-name="SVG" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 40px; height: 40px"> <path d="M25.9801 3.33337H10.9801C10.096 3.33337 9.24816 3.68456 8.62304 4.30968C7.99792 4.93481 7.64673 5.78265 7.64673 6.66671V33.3334C7.64673 34.2174 7.99792 35.0653 8.62304 35.6904C9.24816 36.3155 10.096 36.6667 10.9801 36.6667H30.9801C31.8641 36.6667 32.712 36.3155 33.3371 35.6904C33.9622 35.0653 34.3134 34.2174 34.3134 33.3334V11.6667L25.9801 3.33337Z" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M24.3132 3.33337V10C24.3132 10.8841 24.6644 11.7319 25.2895 12.3571C25.9147 12.9822 26.7625 13.3334 27.6466 13.3334H34.3132" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.6466 15H14.3132" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M27.6466 21.6666H14.3132" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M27.6466 28.3334H14.3132" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            </div>
            <div className="mb-4 text-xl font-bold leading-7 text-center text-white">
              MVP Planning &amp; PRD
            </div>
            <div className="text-base leading-6 text-center text-gray-400">
              Receive a detailed MVP plan followed by a comprehensive PRD with
              technical implementation approach for complete clarity.
            </div>
          </div>
          
          <div className="flex flex-col flex-1 items-center p-6 rounded-2xl border-2 border-gray-800 bg-black bg-opacity-70 backdrop-blur-sm hover:border-white transition-all duration-300 shadow-xl shadow-white/5 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="67:420" layer-name="SVG" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 40px; height: 40px"> <path d="M7.32689 23.3333C7.0115 23.3344 6.70228 23.246 6.43515 23.0783C6.16802 22.9106 5.95395 22.6706 5.81781 22.3861C5.68167 22.1016 5.62905 21.7843 5.66606 21.4711C5.70307 21.1579 5.82819 20.8616 6.02689 20.6167L22.5269 3.61665C22.6507 3.47379 22.8193 3.37725 23.0052 3.34287C23.1911 3.3085 23.3831 3.33834 23.5498 3.42749C23.7165 3.51665 23.8479 3.65981 23.9225 3.8335C23.997 4.00719 24.0104 4.20107 23.9602 4.38332L20.7602 14.4167C20.6659 14.6692 20.6342 14.9409 20.6679 15.2083C20.7016 15.4758 20.7997 15.7311 20.9537 15.9524C21.1078 16.1736 21.3132 16.3542 21.5524 16.4786C21.7915 16.603 22.0573 16.6675 22.3269 16.6667H33.9936C34.3089 16.6656 34.6182 16.754 34.8853 16.9217C35.1524 17.0894 35.3665 17.3294 35.5026 17.6139C35.6388 17.8984 35.6914 18.2157 35.6544 18.5289C35.6174 18.8421 35.4923 19.1384 35.2936 19.3833L18.7936 36.3833C18.6698 36.5262 18.5011 36.6227 18.3153 36.6571C18.1294 36.6915 17.9374 36.6616 17.7707 36.5725C17.604 36.4833 17.4726 36.3402 17.398 36.1665C17.3234 35.9928 17.3101 35.7989 17.3602 35.6167L20.5602 25.5833C20.6546 25.3308 20.6863 25.0591 20.6526 24.7916C20.6189 24.5242 20.5208 24.2689 20.3667 24.0476C20.2127 23.8264 20.0073 23.6458 19.7681 23.5214C19.5289 23.397 19.2631 23.3324 18.9936 23.3333H7.32689Z" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            </div>
            <div className="mb-4 text-xl font-bold leading-7 text-center text-white">
              Development Sprint
            </div>
            <div className="text-base leading-6 text-center text-gray-400">
              Once the proposal is signed, development begins. Your MVP will be
              ready in 5 weeks with regular updates throughout the process.
            </div>
          </div>
        </div>
        
        {/* Second row of process cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex flex-col flex-1 items-center p-6 rounded-2xl border-2 border-gray-800 bg-black bg-opacity-70 backdrop-blur-sm hover:border-white transition-all duration-300 shadow-xl shadow-white/5 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="67:426" layer-name="SVG" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 40px; height: 40px"> <path d="M12.5 7.1167L27.5 15.7" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M35 13.3334C34.9994 12.7488 34.8451 12.1747 34.5526 11.6686C34.26 11.1626 33.8396 10.7423 33.3333 10.45L21.6667 3.78337C21.1599 3.49081 20.5851 3.33679 20 3.33679C19.4149 3.33679 18.8401 3.49081 18.3333 3.78337L6.66667 10.45C6.16044 10.7423 5.73997 11.1626 5.44744 11.6686C5.1549 12.1747 5.0006 12.7488 5 13.3334V26.6667C5.0006 27.2512 5.1549 27.8254 5.44744 28.3314C5.73997 28.8375 6.16044 29.2578 6.66667 29.55L18.3333 36.2167C18.8401 36.5093 19.4149 36.6633 20 36.6633C20.5851 36.6633 21.1599 36.5093 21.6667 36.2167L33.3333 29.55C33.8396 29.2578 34.26 28.8375 34.5526 28.3314C34.8451 27.8254 34.9994 27.2512 35 26.6667V13.3334Z" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.5 11.6666L20 20L34.5 11.6666" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 36.6667V20" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            </div>
            <div className="mb-4 text-xl font-bold leading-7 text-center text-white">
              MVP Delivery
            </div>
            <div className="text-base leading-6 text-center text-gray-400">
              Get your fully functional MVP with all planned features, ready for
              market launch and user acquisition.
            </div>
          </div>
          
          <div className="flex flex-col flex-1 items-center p-6 rounded-2xl border-2 border-gray-800 bg-black bg-opacity-70 backdrop-blur-sm hover:border-white transition-all duration-300 shadow-xl shadow-white/5 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="67:435" layer-name="SVG" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 40px; height: 40px"> <path d="M21.3834 3.63336C20.9491 3.43527 20.4773 3.33276 20 3.33276C19.5227 3.33276 19.051 3.43527 18.6167 3.63336L4.33335 10.1334C4.0376 10.2638 3.78615 10.4774 3.60963 10.7481C3.4331 11.0189 3.33911 11.3351 3.33911 11.6584C3.33911 11.9816 3.4331 12.2978 3.60963 12.5686C3.78615 12.8394 4.0376 13.053 4.33335 13.1834L18.6334 19.7C19.0676 19.8981 19.5394 20.0006 20.0167 20.0006C20.494 20.0006 20.9657 19.8981 21.4 19.7L35.7 13.2C35.9958 13.0696 36.2472 12.856 36.4238 12.5853C36.6003 12.3145 36.6943 11.9983 36.6943 11.675C36.6943 11.3518 36.6003 11.0355 36.4238 10.7648C36.2472 10.494 35.9958 10.2804 35.7 10.15L21.3834 3.63336Z" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M36.6666 29.4166L21.3833 36.35C20.949 36.548 20.4772 36.6506 19.9999 36.6506C19.5226 36.6506 19.0509 36.548 18.6166 36.35L3.33325 29.4166" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M36.6666 21.0834L21.3833 28.0167C20.949 28.2148 20.4772 28.3173 19.9999 28.3173C19.5226 28.3173 19.0509 28.2148 18.6166 28.0167L3.33325 21.0834" stroke="#FFFFFF" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            </div>
            <div className="mb-4 text-xl font-bold leading-7 text-center text-white">
              Maintenance &amp; Support
            </div>
            <div className="text-base leading-6 text-center text-gray-400">
              Enjoy 4 weeks of maintenance support including critical bug fixes
              and necessary optimizations.
            </div>
          </div>
        </div>
        
        {/* CTA Button - matching the style from Hero.jsx */}
        <div className="mt-12">
      <a
        href="https://cal.com/aaryanrajput/30min?overlayCalendar=true"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block scale-75 origin-left sm:scale-100 px-6 py-3 bg-white text-black rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 flex items-center shadow-lg shadow-white/10 transform hover:scale-105"
      >
        <span className="font-medium text-base">Book a 15-min discovery call</span>
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
      </div>
      
      {/* Refined stars effect - matching Hero.jsx */}
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
      
      {/* Responsive white glow accents - matching Hero.jsx */}
      <div className="absolute top-1/4 -left-16 sm:-left-32 w-32 sm:w-64 h-32 sm:h-64 bg-white rounded-full filter blur-3xl opacity-3 sm:opacity-5" />
      <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-32 sm:w-64 h-32 sm:h-64 bg-white rounded-full filter blur-3xl opacity-3 sm:opacity-5" />
      <div className="absolute top-2/3 left-1/3 w-24 sm:w-48 h-24 sm:h-48 bg-white rounded-full filter blur-3xl opacity-2 sm:opacity-3" />
      
      {/* Subtle grain texture overlay - matching Hero.jsx */}
      <div 
        className="absolute inset-0 z-0 opacity-20 sm:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
    </section>
  );
}

export default OurProcess;