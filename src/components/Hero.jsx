import React, { useState, useEffect } from "react";
import aaryanImg from "../assets/img/aaryan.png"; // Import the image

export default function Hero() {
  const words = ["Websites", "Apps", "MVPs"];
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
      {/* Content container with responsive layout */}
      <div className="container mx-auto z-10 mt-15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 max-w-6xl lg:mt-10">
        {/* Text content - consistently left-aligned on all screen sizes */}
        <div className="flex flex-col justify-center items-start text-left max-w-3xl w-full">
          <h1 className="mb-5 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif tracking-wide text-gray-300">
            <div className="flex flex-wrap items-baseline">
              <span>We build</span>
              <span className="relative ml-3 inline-block">
                <span className="text-white font-semibold">
                  {currentText}
                  <span className="animate-pulse text-white opacity-80">|</span>
                </span>
              </span>
            </div>
          </h1>
          
          <h2 className="ml-1 text-xl sm:text-xl md:text-2xl font-light text-gray-400 italic font-serif">
            that turn <span className="text-white font-medium">ideas</span> into <span className="text-gray-200 font-medium">income</span>
          </h2>
          
          <div className="mt-5 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide text-gray-400">
            <span className="opacity-80">One Team</span>{" "}
            <span className="text-white italic border-b-2 border-white pb-1">Real Results</span>
          </div>
          
          <p className="mt-8 text-base sm:text-lg md:text-lg text-gray-500 leading-relaxed tracking-wide max-w-lg">
            We build apps, websites, and systems for businesses and agencies —
            <span className="text-white font-medium"> fast</span>, <span className="text-gray-300 font-medium">reliable</span>, and <span className="text-gray-200 font-medium">hassle-free</span>.
          </p>
          
          <div className="mt-10">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 flex items-center shadow-lg shadow-white/10 transform hover:scale-105">
              <span className="font-medium text-base">Book a 15-min discovery call</span>
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Founder image - centered on its own row on mobile, right-aligned on desktop */}
        <div className="flex-shrink-0 w-72 sm:w-80 md:w-80 lg:w-96 mt-12 lg:mt-0 mx-auto lg:mx-0">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-gray-800 shadow-xl shadow-white/5">
            {/* Use the imported image variable instead of a direct path */}
            <img 
              src={aaryanImg} 
              alt="Aaryan Rajput" 
              className="w-full h-full object-cover" 
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.target.style.display = 'none';
                e.target.parentNode.classList.add('bg-gradient-to-br', 'from-gray-800', 'to-gray-900', 'flex', 'items-center', 'justify-center');
                const placeholder = document.createElement('div');
                placeholder.className = 'text-gray-500';
                placeholder.innerHTML = '<svg class="w-16 h-16 sm:w-20 sm:h-20 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>';
                e.target.parentNode.appendChild(placeholder);
              }}
            />
          </div>
          <div className="mt-4 text-left">
            <h3 className="text-white font-medium text-lg">Aaryan Rajput</h3>
            <p className="text-gray-400 text-sm">Founder & Developer</p>
          </div>
        </div>
      </div>
      
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
    </section>
  );
}