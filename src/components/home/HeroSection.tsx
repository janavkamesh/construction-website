import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center overflow-hidden bg-gray-900 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
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

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-auto mb-auto">
        
        {/* Subtitle / Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/30 backdrop-blur-md border border-blue-400/30 text-blue-50 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 shadow-xl animate-fade-in-up">
          <MapPin className="w-4 h-4 text-blue-400" />
          <span>Premium Quality Construction</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-[4rem] font-black text-white tracking-tight leading-[1.1] mb-4 animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '100ms' }}>
          Your home, built exactly as planned.
        </h1>

        {/* Highlighted Key Pitch */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-400 mb-4 animate-fade-in-up drop-shadow-xl" style={{ animationDelay: '150ms' }}>
          Fixed price. On time.
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-6 max-w-3xl leading-relaxed animate-fade-in-up font-medium drop-shadow-md" style={{ animationDelay: '200ms' }}>
          We take the stress out of building your dream home in Chennai. Zero hidden costs, transparent material specifications, and a dedicated team managing everything from start to finish.
        </p>

        {/* CTAs */}
        <div className="flex flex-col w-full sm:flex-row sm:w-auto items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
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
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-8 lg:mt-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          
          {/* Trust 1 */}
          <div className="flex flex-col items-center flex-1 text-center w-full">
            <div className="flex items-center gap-1.5 mb-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
              <span className="text-2xl sm:text-3xl font-black text-white">4.9/5</span>
            </div>
            <span className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">Google Rating</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/20"></div>
          <div className="block md:hidden h-px w-16 bg-white/20"></div>

          {/* Trust 2 */}
          <div className="flex flex-col items-center flex-1 text-center w-full">
            <div className="flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="w-5 h-5 text-green-400 drop-shadow-sm" />
              <span className="text-2xl sm:text-3xl font-black text-white">150+</span>
            </div>
            <span className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">Homes Built</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/20"></div>
          <div className="block md:hidden h-px w-16 bg-white/20"></div>

          {/* Trust 3 */}
          <div className="flex flex-col items-center flex-1 text-center w-full">
            <div className="flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-5 h-5 text-blue-400 drop-shadow-sm" />
              <span className="text-2xl sm:text-3xl font-black text-white">12 Yrs</span>
            </div>
            <span className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">RERA Reg.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
