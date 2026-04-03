"use client";

import { useState, useEffect } from "react";
import { X, Clock, HelpCircle } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("exitIntentShown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves out of the top of the viewport
      if (e.clientY <= 0 || e.relatedTarget === null) {
        setIsVisible(true);
        sessionStorage.setItem("exitIntentShown", "true");
        window.removeEventListener("mouseout", handleMouseLeave);
      }
    };

    // Add a slight delay before attaching to prevent instant triggering
    const timer = setTimeout(() => {
      window.addEventListener("mouseout", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Decorative Header */}
        <div className="bg-blue-600 p-8 text-center relative overflow-hidden">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-blue-100 hover:text-white hover:bg-blue-700/50 rounded-full p-2 transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight relative z-10 font-heading">
            Wait - get a free cost estimate before you go!
          </h2>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </div>

        {/* Body */}
        <div className="p-8">
          <p className="text-gray-600 text-center mb-6 font-medium">
            Don't leave without knowing what your dream home will cost. Enter your WhatsApp number and plot size, and we'll send a <strong className="text-blue-600">fixed-price calculation instantly</strong>.
          </p>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsVisible(false); }}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="tel"
                placeholder="WhatsApp Number"
                className="flex-1 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                required
              />
              <input 
                type="number"
                placeholder="Plot Size (Sq.Ft)"
                className="w-full sm:w-1/3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white font-bold text-lg rounded-xl px-4 py-4 hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg shadow-blue-600/20"
            >
              Send My Free Estimate
            </button>
          </form>
          
          <p className="text-center text-xs text-gray-500 font-medium mt-4 flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4 text-green-500" />
            Sent directly to your WhatsApp. No spam ever.
          </p>
        </div>
      </div>
    </div>
  );
}
