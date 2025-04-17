import { useState, useEffect } from "react";
import bryanImg from "../assets/img/bryan.jpg";
import bryceImg from "../assets/img/bryce.jpg"; 
import dhyeyaImg from "../assets/img/dhyeya.jpg"; // Assuming you have an image for Dhyeya
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
    <section className="relative w-full py-24 overflow-hidden bg-gray-900">
      {/* Text content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="px-4 py-3 mb-6 text-sm border border-solid border-blue-500 border-opacity-30 rounded-full text-blue-300 w-fit">
            Our Testimonials 
          </div>
          <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-white text-center mb-4">
            Read what our clients are{" "}
            <span className="text-blue-400 inline-block">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 text-center font-light">
            Don't take our word for it. Listen to our <span className="text-emerald-300">partners</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="group bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-1"
            >
              <div className="mb-2 flex justify-end">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-200 mb-8 leading-relaxed relative font-serif text-lg tracking-wide">
                <span className="text-blue-400 text-4xl font-serif font-light absolute -top-6 -left-1">"</span>
                {testimonial.content}
                <span className="text-blue-400 text-4xl font-serif font-light absolute -bottom-8 right-0">"</span>
              </p>
              
              <div className="flex items-center mt-12">
                {testimonial.image ? (
                  <div className="h-12 w-12 rounded-full overflow-hidden shadow-md group-hover:shadow-blue-500/50 transition-all duration-500">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.author}`} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center text-white font-bold shadow-md group-hover:shadow-blue-500/50 transition-all duration-500 text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                )}
                <div className="ml-4">
                  <p className="text-white font-medium tracking-wide">{testimonial.author}</p>
                  {testimonial.company && (
                    <p className="text-blue-300 text-sm font-light tracking-wider uppercase">{testimonial.company}</p>
                  )}
                </div>
              </div>
              
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-0 group-hover:translate-x-6"></div>
            </div>
          ))}
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