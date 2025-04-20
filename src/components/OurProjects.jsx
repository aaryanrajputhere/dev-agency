import React, { useState, useEffect } from "react";
import BarqScootVideo from "../assets/vids/BarqScoot.mp4"; 
import mathencodeImg from "../assets/img/mathencode.png"; // Import the image for Mathencode
export default function OurProjects() {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "BarqScoot",
      category: "app",
      description: "Architected an end-to-end IoT e-scooter booking platform powering 200+ scooters and 1,000+ daily rides with 99.95% uptime. Developed cross-platform mobile apps using Flutter and a real-time web admin panel with Next.js. Integrated geofencing and dynamic pricing, boosting client revenue by 25%. Backend built with Golang and Python, secured with JWT, and deployed on AWS with Kubernetes. Enabled GPS tracking, QR-based unlocking, payment support (Apple Pay, Stripe, Mada), multilingual UX (English, Arabic), and real-time analytics.",
      image: "/api/placeholder/900/500",
      video: BarqScootVideo, // Add the video path here
      tags: [
        "Flutter", "Next.js", "Golang", "Python", "PostgreSQL",
        "Kubernetes", "AWS", "Stripe", "Apple Pay", "Geofencing"
      ]
    },
    {
      id: 2,
      title: "Mathencode",
      category: "web",
      description: "A modern and responsive landing page built for Chirag, a math educator, to showcase his teaching services, build credibility, and attract more students.",
      image: mathencodeImg,
      tags: ["React.js", "Tailwind CSS", "Vercel", "Landing Page"]
    },
    
    // {
    //   id: 3,
    //   title: "Real Estate Portal",
    //   category: "web",
    //   description: "Property listing and search platform with advanced filtering options, virtual tours, and agent communication tools that streamline the home buying process.",
    //   image: "/api/placeholder/900/500",
    //   tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"]
    // },
    
  ];
    const words = ["We Do", "We Design" , "We Build"];
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
  
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);
  
  // Function to go to next project
  const nextProject = () => {
    if (isTransitioning || filteredProjects.length <= 1) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
      setIsTransitioning(false);
    }, 300);
  };
  
  // Function to go to previous project
  const prevProject = () => {
    if (isTransitioning || filteredProjects.length <= 1) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };
  
  // Auto-advance carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (filteredProjects.length > 1) {
        nextProject();
      }
    }, 8000); // Change slide every 8 seconds
    
    return () => clearInterval(interval);
  }, [currentIndex, filteredProjects.length, isTransitioning]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextProject();
      } else if (e.key === "ArrowLeft") {
        prevProject();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTransitioning, filteredProjects.length]);

  // CSS for smartphone frame
  const smartphoneStyles = `
    .smartphone {
      position: relative;
      width: 270px;
      height: 480px;
      margin: auto;
      border: 16px black solid;
      border-top-width: 60px;
      border-bottom-width: 60px;
      border-radius: 36px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    }
    
    .smartphone:before {
      content: '';
      display: block;
      width: 60px;
      height: 5px;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #333;
      border-radius: 10px;
    }
    
    .smartphone:after {
      content: '';
      display: block;
      width: 35px;
      height: 35px;
      position: absolute;
      left: 50%;
      bottom: -65px;
      transform: translate(-50%, -50%);
      background: #333;
      border-radius: 50%;
    }
    
    .smartphone .content {
      width: 100%;
      height: 100%;
      background: white;
      overflow: hidden;
    }
    
    .smartphone video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: none;
    }
  `;
  
  return (
    <section className="bg-gray-900 py-24" id="what-we-do">
      {/* Inject CSS for smartphone */}
      <style>{smartphoneStyles}</style>
      
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            What <span className="text-blue-400">{currentText}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We transform ideas into powerful digital solutions that drive business growth and engage users.
          </p>
        </div>
        
        {/* Main project showcase */}
        <div className="relative max-w-6xl mx-auto">
          {/* Current project display */}
          {filteredProjects.length > 0 && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col md:flex-row">
                {/* Project image or phone video */}
                <div className="md:w-1/2 relative overflow-hidden p-6 flex items-center justify-center">
                  {filteredProjects[currentIndex].title === "BarqScoot" && filteredProjects[currentIndex].video ? (
                    <div className="relative z-10">
                      <div className="smartphone">
                        <div className="content">
                          <video
                            src={filteredProjects[currentIndex].video}
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      </div>
                      
                      {/* Decorative background glow */}
                      <div className="absolute -inset-10 bg-blue-500 opacity-10 blur-3xl rounded-full -z-10"></div>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={filteredProjects[currentIndex].image} 
                        alt={filteredProjects[currentIndex].title} 
                        className="w-full h-64 md:h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                    </>
                  )}
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-xs px-3 py-1 bg-blue-900 text-blue-300 rounded-full">
                      {filteredProjects[currentIndex].category === "web" ? "Web Development" : "App Development"}
                    </span>
                  </div>
                </div>
                
                {/* Project info */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl text-white font-bold mb-4">{filteredProjects[currentIndex].title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{filteredProjects[currentIndex].description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-6">
                      {filteredProjects[currentIndex].tags.map((tag, index) => (
                        <span key={index} className="text-sm px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full hover:from-blue-600 hover:to-blue-400 transition-all duration-300 flex items-center text-sm">
                      <span>View Project Details</span>
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-5 md:-ml-6">
            <button 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
              onClick={prevProject}
              disabled={filteredProjects.length <= 1}
              aria-label="Previous project"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-5 md:-mr-6">
            <button 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
              onClick={nextProject}
              disabled={filteredProjects.length <= 1}
              aria-label="Next project"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Project indicators */}
        <div className="flex justify-center mt-8">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 300);
                }
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Project counter */}
        <div className="text-center mt-4 text-gray-400">
          <span>
            {filteredProjects.length > 0 ? currentIndex + 1 : 0} / {filteredProjects.length}
          </span>
        </div>
      </div>
    </section>
  );
}