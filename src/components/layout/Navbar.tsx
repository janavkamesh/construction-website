"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Packages & Pricing", href: "/packages" },
    { name: "How We Work", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
                V
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900">
                Vaastu<span className="text-blue-600">Corp</span>
              </span>
            </Link>
            <span className="text-xs text-gray-500 font-medium ml-12 -mt-1 hidden sm:block">
              Builders you can trust
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end">
               <div className="flex items-center gap-1.5 text-gray-900 font-bold hover:text-green-600 transition-colors cursor-pointer">
                 <Phone className="w-4 h-4 text-green-500" />
                 <span>+91 98765 43210</span>
               </div>
               <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Call or WhatsApp</span>
            </div>

            <Link
              href="#book"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-95"
            >
              Book a free site visit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col px-4 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-base font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 pb-2 px-4 mt-2 border-t border-gray-100 text-sm flex gap-2 items-center text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            VaastuCorp Builders you can trust
          </div>
        </div>
      )}
    </header>
  );
}
