import React, { useState, useEffect } from "react";

export default function Hero() {
  const words = ["Websites", "Apps", "MVPs", "Automations"];
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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Content container with two columns */}
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
        {/* Text content - left aligned */}
        <div className="flex flex-col justify-center items-start text-left max-w-2xl">
          <h1 className="text-4xl mt-8 mb-4 md:text-6xl font-serif tracking-wide text-gray-300">
            We build{" "}
            <div className="inline-block align-bottom">
              <div className="relative">
                {/* Fixed-width container for text */}
                <div className="min-w-full md:min-w-48 h-12 md:h-16 relative">
                  <span className="text-white absolute left-0 font-semibold">
                    {currentText}
                    <span className="animate-pulse text-white opacity-80">|</span>
                  </span>
                </div>
              </div>
            </div>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light mt-3 text-gray-400 italic font-serif">
            that turn <span className="text-white font-medium">ideas</span> into <span className="text-gray-200 font-medium">income</span>
          </h2>
          
          <div className="mt-8 mb-8 text-3xl md:text-5xl font-serif tracking-wide text-gray-400">
            <span className="opacity-80">One Team</span>{" "}
            <span className="text-white italic border-b-2 border-white pb-1">Real Results</span>
          </div>
          
          <p className="mt-8 text-base md:text-lg text-gray-500 leading-relaxed tracking-wide">
            We build apps, websites, and systems for businesses and agencies —
            <span className="text-white font-medium"> fast</span>, <span className="text-gray-300 font-medium">reliable</span>, and <span className="text-gray-200 font-medium">hassle-free</span>.
          </p>
          
          <div className="mt-12">
            <button className="px-8 py-4 bg-white text-black rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 flex items-center shadow-lg shadow-white/10 transform hover:scale-105">
              <span className="font-medium">Book a 15-min discovery call</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Founder image - right side */}
        <div className="flex-shrink-0 w-full md:w-80 lg:w-96 mt-8 md:mt-0">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-gray-800 shadow-xl shadow-white/5">
            {/* Placeholder for founder image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-gray-500">
                <svg className="w-20 h-20 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            {/* When you have an actual image, replace the div above with: */}
            {/* <img src="/path/to/founder-image.jpg" alt="Founder Name" className="w-full h-full object-cover" /> */}
          </div>
          <div className="mt-4 text-center md:text-left">
            <h3 className="text-white font-medium text-lg">Aaryan Rajput</h3>
            <p className="text-gray-400 text-sm">CEO & Founder</p>
          </div>
        </div>
      </div>
      
      {/* Refined stars effect - subtle white dots */}
      <div className="absolute inset-0 z-0">
        {[...Array(200)].map((_, i) => (
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
      
      {/* Subtle white glow accents */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-5" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-5" />
      <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-white rounded-full filter blur-3xl opacity-3" />
      
      {/* Subtle grain texture overlay for visual interest */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
    </section>
  );
}