import { ShieldCheck, Target, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-12 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-4">The VaastuCorp Story</h1>
          <p className="text-lg text-gray-600 font-medium">Founded by engineers tired of seeing Chennai's homeowners taken advantage of.</p>
        </div>

        {/* Founder Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
              alt="VaastuCorp Founders"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">We saw a broken system. So we fixed it.</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
              <p className="mb-6">
                Ten years ago, a close family member of ours started building their dream home in OMR. The initial quote was affordable, and the contractor was friendly.
              </p>
              <p className="mb-6">
                Eight months later, the project had stalled. Costs had skyrocketed by 40% due to "unforeseen material hikes", and the contractor had shifted focus to another high-paying project.
              </p>
              <p className="mb-8">
                As civil engineers, we knew there were no "unforeseen" hikes. It was just poor planning and deliberate opacity. VaastuCorp was born to bring ruthless efficiency, absolute transparency, and fixed pricing to the Chennai residential market.
              </p>
            </div>
            
            <div className="flex gap-4 p-6 bg-blue-50 border border-blue-100 rounded-2xl relative">
               <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0" />
               <div>
                 <h4 className="font-bold text-gray-900 text-lg mb-1">Our Core Value</h4>
                 <p className="text-gray-600 text-sm font-medium">We treat your budget as if it were our own. No compromises on structure. No compromises on truth.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Core Values / Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-lg shadow-blue-900/5">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">150+</h3>
            <p className="text-gray-500 font-medium">Happy Families</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-lg shadow-blue-900/5">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Zero</h3>
            <p className="text-gray-500 font-medium">Hidden Costs</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">12 Yrs</h3>
            <p className="text-gray-500 font-medium">Structural Warranty</p>
          </div>
        </div>

      </div>
    </div>
  );
}
