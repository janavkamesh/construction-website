import { ShieldCheck, Target, Users, CheckCircle } from "lucide-react";
import Image from "next/image";
import FinalCTASection from "@/components/home/FinalCTASection";
import VaastuQualityBlock from "@/components/ui/VaastuQualityBlock";

export default function About() {
  return (
    <>
    <div className="pt-12 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-4">The VaastuCorp Story</h1>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">Building premium homes in Chennai with absolute transparency, fixed-price contracts, and zero hidden costs.</p>
        </div>

        {/* Founder Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative aspect-square lg:aspect-square rounded-[2rem] overflow-hidden lg:max-w-md mx-auto w-full flex items-center justify-center bg-blue-600 border-8 border-blue-50 shadow-2xl relative">
            <div className="absolute inset-4 border-2 border-dashed border-blue-300/50 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
            <div className="text-center relative z-10 text-white p-8">
              <span className="block text-5xl mb-4">🏅</span>
              <h3 className="text-3xl font-black mb-2 tracking-tight">12 Years of Experience</h3>
              <p className="text-blue-200 font-bold tracking-widest uppercase text-sm mb-6">Since 2014</p>
              <p className="text-white font-black text-xl tracking-tight bg-blue-700/50 py-2 px-4 rounded-xl backdrop-blur">VaastuCorp Construction</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">We saw a broken system. So we fixed it.</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
              <p className="mb-8">
                We saw how stressful building a home in Chennai was. Delays, hidden costs, and broken promises were the norm. We built VaastuCorp to offer a system with zero surprises.
              </p>
            </div>
            
            <div className="flex gap-4 p-4 lg:p-5 bg-blue-50 border border-blue-100 rounded-2xl relative shadow-md">
               <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0" />
               <div>
                 <h4 className="font-bold text-gray-900 text-base mb-1">Our Core Value</h4>
                 <p className="text-gray-600 text-sm font-medium leading-snug">We treat your budget as if it were our own. No compromises on structure. No compromises on truth.</p>
               </div>
            </div>
          </div>
        </div>

        {/* EEAT Roster */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center tracking-tight">The Team Behind the Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Founding Architect" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1">Rajesh V.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Founding Architect</p>
             </div>
             
             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Lead Structural Engineer" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Priya S.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Lead Structural Engineer</p>
             </div>
             
             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Client Relations Manager" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1">Karthik N.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Client Relations Manager</p>
             </div>
          </div>
        </div>

        <VaastuQualityBlock />

        {/* Hard Proof Gallery */}
        <div className="mb-12 border-y border-gray-200 py-12">
          <h2 className="text-sm uppercase tracking-widest font-black text-gray-400 mb-8 text-center">Accreditations & Infrastructure</h2>
          <div className="flex flex-wrap items-center justify-center gap-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-3 font-black text-xl text-gray-800">
              <ShieldCheck className="w-8 h-8 text-blue-600" /> ISO 9001:2015
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-3 font-black text-xl text-gray-800">
              <Target className="w-8 h-8 text-blue-600" /> RERA Registered
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block" />
            <div className="flex flex-col items-center">
              <div className="w-48 h-24 bg-gray-200 rounded-xl overflow-hidden border-2 border-gray-300 flex items-center justify-center relative">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover" alt="Chennai Office HQ" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-bold tracking-widest uppercase">HQ Office Map</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    <FinalCTASection />
    </>
  );
}
