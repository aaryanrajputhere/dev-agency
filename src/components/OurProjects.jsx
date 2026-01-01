import { useState, useEffect } from "react";
import BarqScootVideo from "../assets/vids/BarqScoot.mp4";
import maceinfoImg from "../assets/img/maceinfo.png";
import easyservicesImg from "../assets/img/easyservices.png";
export default function OurProjects() {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "MaceInfo",
      category: "web",
      description:
        "Designed and built a construction materials management platform to streamline procurement workflows for large-scale construction projects. Developed an MVP featuring material estimation calculators, a quote builder with file uploads, and automated RFQ generation. Implemented an Award System to enable structured vendor selection, communication, and audit-ready record keeping. Integrated Google Sheets for real-time vendor quote tracking and Google Drive for centralized document storage. Focused on workflow automation, data consistency, and reducing manual procurement effort.",
      image: maceinfoImg,
      tags: [
        "Node.js",
        "JavaScript",
        "Google Sheets API",
        "Google Drive API",
        "Workflow Automation",
        "Procurement Systems",
        "RFQ Automation",
        "File Management",
        "Data Handling",
      ],
    },

    {
      id: 2,
      title: "Escoot-App",
      category: "app",
      description:
        "Architected an end-to-end IoT e-scooter booking platform powering 200+ scooters and 1,000+ daily rides with 99.95% uptime. Developed cross-platform mobile apps using Flutter and a real-time web admin panel with Next.js. Integrated geofencing and dynamic pricing. Backend built with Golang and Python, secured with JWT, and deployed on AWS with Kubernetes. Enabled GPS tracking, QR-based unlocking, payment support (Apple Pay, Stripe, Mada), multilingual UX (English, Arabic), and real-time analytics.",

      video: BarqScootVideo,
      tags: [
        "Flutter",
        "Next.js",
        "Golang",
        "Python",
        "PostgreSQL",
        "Kubernetes",
        "AWS",
        "Stripe",
        "Apple Pay",
        "Geofencing",
      ],
    },
    {
      id: 3,
      title: "Easy Services",
      category: "web",
      description:
        "Easy Services is a fast, user-friendly business funding platform built with Next.js, Vercel, and Resend. It features an application form that allows users to apply for merchant cash advances between $5,000 and $500,000, with funds available in as little as 24 hours—no collateral required.",
      image: easyservicesImg,
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Vercel",
        "Resend",
        "Blob",
        "Business Funding",
        "Email Notifications",
      ],
    },
    //     {
    //   id: 3,
    //   title: "Mathencode",
    //   category: "web",
    //   description:
    //     "A modern and responsive landing page built for Chirag, a math educator, to showcase his teaching services, build credibility, and attract more students.",
    //   image: mathencodeImg,
    //   tags: ["React.js", "Tailwind CSS", "Vercel", "Landing Page"],
    // },
    // {
    //   id: 4,
    //   title: "FinGenie AI",
    //   category: "web",
    //   description:
    //     "FinGenie AI is a web app for recording and analyzing financial transactions, built with React.js, Node.js, TypeScript, PostgreSQL (NeonDB), and Prisma, offering seamless performance and AI-powered insights.",
    //   image: fingenieImg,
    //   tags: [
    //     "React.js",
    //     "TypeScript",
    //     "Node.js",
    //     "Express.js",
    //     "Tailwind CSS",
    //     "Prisma",
    //     "PostgreSQL",
    //     "NeonDB",
    //     "Vercel",
    //     "Gemini",
    //   ],
    // },
  ];

  const words = ["We Do", "We Design", "We Build"];
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
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (filteredProjects.length > 1) {
        nextProject();
      }
    }, 150000);

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

  // CSS for custom scrollbar (removed smartphone styles)
  const customStyles = `
    /* Custom Scrollbar Styling */
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #111;
      border-radius: 4px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #333;
      border-radius: 4px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #444;
    }
    
    /* For Firefox */
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: #333 #111;
    }
    
    /* For Edge and IE */
    .custom-scrollbar {
      -ms-overflow-style: none;
    }
  `;

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-24"
      id="what-we-do"
    >
      {/* Inject CSS for scrollbar */}
      <style>{customStyles}</style>

      {/* Content container with responsive layout */}
      <div className="container mx-auto z-10 px-4 max-w-6xl">
        {/* Section title with the same style as Hero */}
        <div className="mb-16 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif tracking-wide text-gray-300">
            <div className="flex flex-wrap items-baseline">
              <span>What</span>
              <span className="relative ml-3 inline-block">
                <span className="text-white font-semibold">
                  {currentText}
                  <span className="animate-pulse text-white opacity-80">|</span>
                </span>
              </span>
            </div>
          </h2>

          <p className="ml-1 mt-4 text-xl sm:text-xl md:text-2xl font-light text-gray-400 italic font-serif">
            We transform <span className="text-white font-medium">ideas</span>{" "}
            into{" "}
            <span className="text-gray-200 font-medium">
              powerful solutions
            </span>
          </p>
        </div>

        {/* Main project showcase with fixed height */}
        <div className="relative">
          {/* Project container with fixed dimensions */}
          <div className="h-[600px] md:h-[500px]">
            {/* Current project display */}
            {filteredProjects.length > 0 && (
              <div
                className={`transition-opacity duration-300 h-full ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="bg-transparent rounded-xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col md:flex-row h-full">
                  {/* Project image or video (removed phone frame) */}
                  <div className="md:w-1/2 relative overflow-hidden p-6 flex items-center justify-center">
                    {filteredProjects[currentIndex].title === "Escoot-App" &&
                    filteredProjects[currentIndex].video ? (
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        {/* Direct video display without smartphone frame */}
                        <video
                          src={filteredProjects[currentIndex].video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className=" h-auto w-auto max-w-full max-h-full rounded-[2vw] border border-gray-800 shadow-xl shadow-white/10"
                        />

                        {/* Decorative background glow */}
                        <div className="absolute -inset-10 bg-white opacity-10 blur-3xl rounded-full -z-10"></div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={filteredProjects[currentIndex].image}
                          alt={filteredProjects[currentIndex].title}
                          className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-gray-800 shadow-xl shadow-white/5"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentNode.classList.add(
                              "bg-gradient-to-br",
                              "from-gray-800",
                              "to-gray-900"
                            );
                          }}
                        />
                        awgeduawhduiahdihiaaryanr this is crazy and this would be s=o awesome

                        {/* Glow effect similar to Hero */}
                        <div className="absolute -inset-4 bg-white opacity-5 blur-3xl rounded-full -z-10"></div>
                      </div>
                    )}

                    <div className="absolute top-4 left-4">
                      <span className="text-xs px-3 py-1 bg-black bg-opacity-50 text-white rounded-full border border-gray-700">
                        {filteredProjects[currentIndex].category === "web"
                          ? "Web Development"
                          : "App Development"}
                      </span>
                    </div>
                  </div>

                  {/* Project info with fixed height and custom scrollbar */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between h-full overflow-y-auto custom-scrollbar">
                    <div>
                      <h3 className="text-3xl text-white font-bold mb-4 font-serif">
                        {filteredProjects[currentIndex].title}
                      </h3>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed tracking-wide">
                        {filteredProjects[currentIndex].description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {filteredProjects[currentIndex].tags.map(
                          (tag, index) => (
                            <span
                              key={index}
                              className="text-sm px-3 py-1 bg-gray-900 text-gray-300 rounded-full border border-gray-800"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="mt-8">
                      <button className="px-6 py-3 bg-white text-black rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 flex items-center shadow-lg shadow-white/10 transform hover:scale-105">
                        <span className="font-medium text-base">
                          View Project Details
                        </span>
                        <svg
                          className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-5 md:-ml-6">
            <button
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors shadow-lg border border-gray-800"
              onClick={prevProject}
              disabled={filteredProjects.length <= 1}
              aria-label="Previous project"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-5 md:-mr-6">
            <button
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors shadow-lg border border-gray-800"
              onClick={nextProject}
              disabled={filteredProjects.length <= 1}
              aria-label="Next project"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
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
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-gray-700 hover:bg-gray-600"
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
            {filteredProjects.length > 0 ? currentIndex + 1 : 0} /{" "}
            {filteredProjects.length}
          </span>
        </div>
      </div>

      {/* Refined stars effect - subtle white dots - same as Hero */}
      <div className="absolute inset-0 z-0 opacity-60 sm:opacity-100">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 0.5 + "px",
              height: Math.random() * 2 + 0.5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3 + 0.05,
            }}
          />
        ))}
      </div>

      {/* Responsive white glow accents - smaller on mobile - same as Hero */}
      <div className="absolute top-1/4 -left-16 sm:-left-32 w-32 sm:w-64 h-32 sm:h-64 bg-white rounded-full filter blur-3xl opacity-3 sm:opacity-5" />
      <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-32 sm:w-64 h-32 sm:h-64 bg-white rounded-full filter blur-3xl opacity-3 sm:opacity-5" />
      <div className="absolute top-2/3 left-1/3 w-24 sm:w-48 h-24 sm:h-48 bg-white rounded-full filter blur-3xl opacity-2 sm:opacity-3" />

      {/* Subtle grain texture overlay for visual interest - same as Hero */}
      <div
        className="absolute inset-0 z-0 opacity-20 sm:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />
    </section>
  );
}
