"use client"

import { Clock, Navigation2, LogIn, Phone, Building2, User, Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section id="book" className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Text Side */}
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-5xl font-black text-white tracking-tight mb-6">
            Stop guessing. Start building.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
            Let our structural experts visit your plot and give you a rock-solid, fixed-price estimate. <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">Zero cost. Zero obligation.</span>
          </p>
          
          <div className="hidden lg:flex flex-col gap-6 mt-12 bg-blue-800/40 border border-blue-700/50 p-6 rounded-3xl backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Navigation2 className="w-6 h-6 text-blue-600 fill-blue-600" />
              </div>
              <p className="text-blue-50 font-medium">We come to your plot anywhere in Chennai limits.</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full lg:w-[480px] shrink-0">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-blue-900/40 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full blur-[40px] opacity-20 pointer-events-none" />
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-bold text-gray-900 mb-1.5 block">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="E.g. Karthik N." 
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 pl-11 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-900 mb-1.5 block">WhatsApp Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <span className="absolute inset-y-0 left-11 flex items-center font-bold text-gray-500 pointer-events-none">
                    +91
                  </span>
                  <input 
                    type="tel" 
                    placeholder="98765 43210" 
                    pattern="[0-9]{10}"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 pl-[4.5rem] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-900 mb-1.5 block">Plot Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="E.g. OMR, Porur, Anna Nagar" 
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 pl-11 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold text-lg rounded-xl px-4 py-4 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.98] transition-all mb-4"
                >
                  Book my free site visit - I'm ready
                </button>
                
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-900 font-bold">4.9/5</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>150+ Homes</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
                  <div className="hidden sm:flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                    <span>RERA Reg.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="text-sm font-bold text-gray-600 tracking-tight">
                  We call back within 2 hours
                </span>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
