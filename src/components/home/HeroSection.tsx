import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center overflow-hidden bg-gray-900 pt-8 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Premium residential home built in Chennai"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay for text legibility (less transparent, bg-black/70) */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-auto mb-auto translate-y-[-10px]">
        
        {/* Subtitle / Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 shadow-xl animate-fade-in-up">
          <MapPin className="w-4 h-4 text-blue-400" />
          <span>Premium Quality Construction</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2] mb-6 animate-fade-in-up drop-shadow-2xl font-heading" style={{ animationDelay: '50ms' }}>
          Build your dream home in Chennai — fixed price, on time, zero surprises.
        </h1>

        {/* Description / Sub-headline */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-3xl leading-relaxed animate-fade-in-up font-medium drop-shadow-md" style={{ animationDelay: '100ms' }}>
          From architectural design to final handover, we manage the entire construction process so you don't have to worry. Trusted by 150+ families across Chennai.
        </p>

        {/* CTAs */}
        <div className="flex flex-col w-full sm:flex-row sm:w-auto items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          <Link
            href="#book"
            className="w-full sm:w-auto text-center bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm sm:text-base hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98]"
          >
            Book Free Visit
          </Link>
          <Link
            href="#calculator"
            className="w-full sm:w-auto text-center bg-white/10 backdrop-blur-md border border-white/80 text-white px-6 py-2.5 rounded-lg font-bold text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-all active:scale-[0.98]"
          >
            Calculate Cost
          </Link>
        </div>
      </div>

      {/* Trust Signals Card - Large Box */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-6 lg:mt-8 animate-fade-in-up translate-y-[-10px]" style={{ animationDelay: '200ms' }}>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-4 md:gap-6 divide-x-0 md:divide-x divide-white/20">
          
          <div className="flex flex-col items-center text-center w-full pb-4 md:pb-0 border-b border-white/20 md:border-b-0">
            <span className="text-2xl sm:text-3xl font-bold text-white mb-1 font-heading">10+</span>
            <span className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest text-center px-2">Years of Experience</span>
          </div>

          <div className="flex flex-col items-center text-center w-full pb-4 md:pb-0 border-b border-white/20 md:border-b-0">
            <span className="text-2xl sm:text-3xl font-bold text-white mb-1 font-heading">150+</span>
            <span className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest text-center px-2">Completed Projects</span>
          </div>

          <div className="flex flex-col items-center text-center w-full pt-2 md:pt-0">
            <span className="text-2xl sm:text-3xl font-bold text-white mb-1 font-heading">5</span>
            <span className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest text-center px-2">Years Warranty</span>
          </div>

          <div className="flex flex-col items-center text-center w-full pt-2 md:pt-0">
            <span className="text-2xl sm:text-3xl font-bold text-white mb-1 font-heading">200+</span>
            <span className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest text-center px-2">Construction Workers</span>
          </div>

        </div>
      </div>
    </section>
  );
}
