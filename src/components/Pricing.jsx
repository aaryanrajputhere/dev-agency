"use client";
import React from "react";

function Pricing() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 py-16 px-5">
      {/* Stars effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>
      
      {/* Gradient accents */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10" />
      
      <div className="z-10 flex flex-col items-center w-full max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="mt-4">
          <div className="flex gap-2.5 justify-center items-center mb-4 text-5xl tracking-tighter text-white leading-[56px] max-sm:text-4xl max-sm:leading-10">
            <span>Check out our</span>
            <span className="relative pr-1 text-pink-50 border-solid bg-blue-600 bg-opacity-20 border-r-[3px] border-r-sky-200">
              pricing
            </span>
          </div>
          <div className="text-lg leading-6 text-center text-stone-300 max-sm:text-base max-sm:leading-6">
            See the pricing that fits your company
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 w-full max-w-6xl">
          {/* Basic Plan */}
          <div className="flex flex-col w-full max-w-md p-6 border border-blue-700 border-opacity-30 rounded-3xl bg-gray-900 bg-opacity-70 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
            <div className="mb-5">
              <div className="mb-3 text-xl font-bold text-blue-300">Startup</div>
              <div className="flex items-end gap-1 mb-4">
                <div className="text-5xl font-bold text-white">$4,999</div>
                <div className="mb-1 text-base text-gray-400">one-time</div>
              </div>
              <div className="text-sm text-gray-300">
                Perfect for startups looking to launch their MVP quickly
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mb-8 mt-6">
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Up to 5 pages</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Core features implementation</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Basic user authentication</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">2 weeks of support</div>
              </div>
            </div>
            
            <button className="px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-full border border-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 flex items-center justify-center mt-auto">
              <span>Get Started</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
          
          {/* Premium Plan */}
          <div className="flex flex-col w-full max-w-md p-6 border-2 border-blue-500 rounded-3xl bg-gray-900 bg-opacity-70 backdrop-blur-sm relative overflow-hidden shadow-lg shadow-blue-500/20">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
            
            <div className="absolute -left-2 top-6 bg-blue-500 text-white py-1 px-4 text-xs font-bold">
              MOST POPULAR
            </div>
            
            <div className="mb-5">
              <div className="mb-3 text-xl font-bold text-blue-400">Business</div>
              <div className="flex items-end gap-1 mb-4">
                <div className="text-5xl font-bold text-white">$9,999</div>
                <div className="mb-1 text-base text-gray-400">one-time</div>
              </div>
              <div className="text-sm text-gray-300">
                For businesses needing a complete solution with all features
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mb-8 mt-6">
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Up to 10 pages</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Advanced feature implementation</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">User roles & permissions</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Analytics dashboard</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">4 weeks of support</div>
              </div>
            </div>
            
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full border border-blue-500 hover:from-blue-500 hover:to-blue-300 transition-all duration-300 flex items-center justify-center mt-auto">
              <span>Get Started</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="flex flex-col w-full max-w-md p-6 border border-blue-700 border-opacity-30 rounded-3xl bg-gray-900 bg-opacity-70 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
            <div className="mb-5">
              <div className="mb-3 text-xl font-bold text-blue-300">Enterprise</div>
              <div className="flex items-end gap-1 mb-4">
                <div className="text-5xl font-bold text-white">Custom</div>
              </div>
              <div className="text-sm text-gray-300">
                For large organizations with specific requirements
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mb-8 mt-6">
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Unlimited pages</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Custom features & integrations</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Advanced security features</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Dedicated account manager</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-base text-gray-200">Priority support</div>
              </div>
            </div>
            
            <button className="px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-full border border-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 flex items-center justify-center mt-auto">
              <span>Contact Us</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center max-w-2xl">
          <p className="text-gray-300 mb-4">
            All plans include deployment, hosting setup, and basic SEO optimization.
            <br />Need customization? Contact us for a tailored quote.
          </p>
          <button className="px-6 py-2 bg-transparent text-blue-400 rounded-full border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-300">
            Schedule a Call
          </button>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

export default Pricing;