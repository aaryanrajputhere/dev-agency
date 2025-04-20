import React, { useState, useEffect } from "react";
import bryanImg from "../assets/img/bryan.jpg";
import bryceImg from "../assets/img/bryce.jpg"; 
import dhyeyaImg from "../assets/img/dhyeya.jpg";

export default function OurReviews() {
  const testimonials = [
    {
      id: 1,
      content: "Was very knowledgeable and worked with all the needs I had! Very patient and very articulate with his work!",
      author: "Bryce Krisppy",
      company: "Fiverr",
      image: bryceImg
    },
    {
      id: 2,
      content: "Aaryan was a pleasure to work with. He delivered exactly what we needed in a precise and timely manner.",
      author: "Bryan Morabito",
      company: "Cosmo Coded LLC",
      image: bryanImg
    },
    {
      id: 3,
      content: "Aaryan was great to work with! We did a couple of projects together.",
      author: "Dhyeya Desai",
      company: "Fiverr",
      image: dhyeyaImg 
    },
  ];

  const words = ["saying", "sharing", "telling"];
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
    <section className="relative w-full py-24 overflow-hidden bg-black px-4 sm:px-6">
      {/* Content container */}
      <div className="container mx-auto z-10 relative max-w-6xl">
        <div className="flex flex-col items-start text-left max-w-3xl mb-12">
          <div className="px-4 py-2 mb-6 text-sm border border-solid border-white border-opacity-20 rounded-full text-gray-400 w-fit">
            Our Testimonials 
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-serif tracking-wide text-gray-300 mb-4">
            Read what our clients are{" "}
            <span className="text-white font-semibold inline-block">
              {currentText}
              <span className="animate-pulse text-white opacity-80">|</span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 tracking-wide">
            Don't take our word for it. Listen to our <span className="text-gray-300 font-medium">partners</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="group bg-black bg-opacity-40 rounded-2xl p-8 border border-gray-800 hover:border-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
            >
              <div className="mb-2 flex justify-end">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 leading-relaxed relative font-serif text-lg tracking-wide">
                <span className="text-white text-4xl font-serif font-light absolute -top-6 -left-1">"</span>
                {testimonial.content}
                <span className="text-white text-4xl font-serif font-light absolute -bottom-8 right-0">"</span>
              </p>
              
              <div className="flex items-center mt-12">
                {testimonial.image ? (
                  <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gray-800 shadow-md group-hover:shadow-white/20 transition-all duration-300">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.author}`} 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('bg-gradient-to-br', 'from-gray-800', 'to-gray-900', 'flex', 'items-center', 'justify-center');
                        const placeholder = document.createElement('div');
                        placeholder.className = 'text-gray-500';
                        placeholder.innerHTML = '<svg class="w-6 h-6 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>';
                        e.target.parentNode.appendChild(placeholder);
                      }}
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                )}
                <div className="ml-4">
                  <p className="text-white font-medium tracking-wide">{testimonial.author}</p>
                  {testimonial.company && (
                    <p className="text-gray-400 text-sm font-light">{testimonial.company}</p>
                  )}
                </div>
              </div>
              
              <div className="w-1/3 h-0.5 bg-white rounded-full mt-6 opacity-0 group-hover:opacity-30 transition-all duration-500 transform translate-x-0 group-hover:translate-x-6"></div>
            </div>
          ))}
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