import React, { useState, useEffect } from "react";

export default function Hero() {
  
  const words = ["Websites", "Apps", "MVPs" , "Automations"];
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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Text content */}
      <div className="flex flex-col justify-center items-center z-10 text-center px-4 ">
        <h1 className="text-4xl mt-8 mb-4 md:text-6xl font-serif tracking-wide text-white pr-12">
          We build <span className="text-blue-400 inline-block w-32 md:w-44">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light mt-3 text-gray-200 italic font-serif">
          that turn <span className="text-emerald-400">ideas</span> into <span className="text-blue-300">income</span>
        </h2>
        
        <div className="mt-8 mb-8 text-3xl md:text-5xl font-serif tracking-wide text-white">
          <span className="opacity-90">One Team</span>{" "}
          <span className="text-blue-500 italic border-b border-blue-500 pb-1">Real Results</span>
        </div>
        
        <p className="mt-8 text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto tracking-wide">
          We build apps, websites, and systems for businesses and agencies —<br className="hidden md:block" />
          <span className="text-blue-300">fast</span>, <span className="text-emerald-300">reliable</span>, and <span className="text-blue-200">hassle-free</span>.
        </p>
        
        <div className="mt-12">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-full border border-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 flex items-center">
            <span>Book a 15-min discovery call</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
      
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
      
      
    </section>
  );
}