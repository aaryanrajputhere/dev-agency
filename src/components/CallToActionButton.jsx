import React from 'react';
import arrow from '../assets/icons/arrow.svg';

const CallToActionButton = ({ text = "Book a 15-min discovery call", href = "#" }) => {
  return (
    <a 
      href={href} 
      className="group relative flex w-64 items-center justify-between overflow-hidden rounded-full bg-black/5 p-0.5 transition-all hover:bg-black/10"
    >
      {/* Animated border light effect */}
      <div className="absolute inset-0 rounded-full">
        <div className="absolute h-8 w-8 animate-spin-slow rounded-full bg-gradient-to-r from-white/0 via-white/80 to-white/0 blur-sm"></div>
      </div>
      
      {/* Gradient effects */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-white/10 opacity-50"></div>
      <div className="absolute right-0 top-0 h-full w-1/4 rounded-full bg-gradient-to-r from-transparent to-white/20 blur-md"></div>
      
      {/* Inner black background */}
      <div className="absolute inset-0.5 rounded-full bg-black"></div>
      
      {/* Content */}
      <div className="relative z-10 flex w-full items-center justify-between px-4 py-2">
        <span className="text-sm font-medium text-white">{text}</span>
        <div className="flex h-6 w-6 items-center justify-center">
          <img src={arrow} alt="arrow" className="h-4 w-3" />
        </div>
      </div>
    </a>
  );
};

export default CallToActionButton;