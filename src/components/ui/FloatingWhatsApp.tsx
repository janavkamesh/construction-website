"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down slightly to not distract from hero
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20building%20a%20home%20in%20Chennai."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 hidden md:flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-2xl shadow-gray-900/20 border border-gray-100 transition-all duration-500 hover:scale-105 hover:shadow-green-900/10 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-[#20BE5A] transition-colors shadow-inner">
        <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Chat with us</span>
        <span className="text-sm text-gray-900 font-black leading-tight">We reply in 5 mins</span>
      </div>
    </Link>
  );
}
