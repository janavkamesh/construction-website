import Link from "next/link";
import { 
  Users, MapPin, Scale3d, FileSignature, 
  ScrollText, Flame, Beaker, Hammer, 
  BrickWall, Grid, PaintRoller, MoveRight, Key 
} from "lucide-react";
import FinalCTASection from "@/components/home/FinalCTASection";
import VaastuQualityBlock from "@/components/ui/VaastuQualityBlock";

const steps = [
  { title: "Initial Consultation & Site Visit", icon: Users, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Architectural Design & 3D Floor Plans", icon: Scale3d, img: "https://images.unsplash.com/photo-1503387837-b154d5074ea2?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Detailed Estimation & Contract Signing", icon: FileSignature, img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Permits & Government Approvals", icon: ScrollText, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Bhoomi Puja & Site Mobilization", icon: Flame, img: "https://images.unsplash.com/photo-1541888081198-d1f5926ec0d9?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Soil Testing & Foundation", icon: Beaker, img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Plinth Beam & Anti-Termite Treatment", icon: Hammer, img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Superstructure: Columns & Brick Masonry", icon: BrickWall, img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Roof Slab Casting & Curing", icon: Grid, img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Internal & External Plastering", icon: PaintRoller, img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&fm=webp&q=60" },
  { title: "MEP Services & Flooring", icon: MapPin, img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Finishes, Painting & Handover", icon: Key, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&fm=webp&q=60" },
];

export default function HowItWorks() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header Section */}
      <div className="pt-24 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-4">
              How We Work
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Building premium homes in Chennai with absolute transparency, fixed-price contracts, and zero hidden costs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 mt-16 mb-4 relative z-10">
        <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl shadow-blue-900/5">
          <div className="w-20 h-20 bg-blue-50 rounded-full overflow-hidden shrink-0 border border-blue-100 p-1 flex items-center justify-center">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" alt="Project Manager" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="text-center sm:text-left">
             <h3 className="text-xs font-black tracking-widest text-blue-600 uppercase mb-1.5">Your Single Point of Contact</h3>
             <p className="text-gray-900 font-bold text-lg mb-2 leading-tight">Dedicated Project Manager</p>
             <p className="text-sm font-medium text-gray-500 leading-snug">A dedicated civil engineer handles your entire build from end to end. Zero chaos, weekly WhatsApp reports, and complete transparency.</p>
          </div>
        </div>
      </div>
      
      {/* 12-Step Vertical Timeline Framework */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        
        {/* Center Guide Line */}
        <div className="absolute left-8 md:left-1/2 top-24 bottom-24 w-0.5 bg-gray-200 md:-translate-x-1/2 z-0" />

        {steps.map((step, idx) => {
          const isEven = idx % 2 === 0; // True means left side on desktop
          const Icon = step.icon;

          return (
            <div key={idx} className={`relative flex items-center mb-16 w-full z-10 flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Center Dot Node */}
              <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-blue-600 border-[6px] border-gray-50 shadow-sm flex items-center justify-center transform -translate-x-1/2 z-20">
                 <span className="text-white text-[10px] font-black">{idx + 1}</span>
              </div>

              {/* Empty Spacer Side */}
              <div className="hidden md:block w-1/2" />

              {/* Card Content Side */}
              <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}  flex items-center`}>
                
                <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm w-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:max-w-md mx-auto">
                  
                  {/* Top Bar with Icon & Title */}
                  <div className={`flex items-center gap-4 mb-5 ${isEven ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}>
                    {/* Icon Block */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50/50 flex items-center justify-center rounded-2xl shrink-0 text-blue-600 border border-blue-100">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
                    </div>
                    
                    {/* Text Details */}
                    <div className="flex flex-col flex-1">
                      <span className="text-[10px] sm:text-[11px] font-black text-blue-600 uppercase tracking-widest mb-1 opacity-80">
                        Phase {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Representative Image Block */}
                  {idx === 7 ? (
                    <div className="relative w-full h-56 sm:h-64 bg-gradient-to-tr from-blue-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-100/50 flex flex-col items-center justify-end group p-4 pb-0">
                      <div className="w-[150px] h-[90%] bg-white rounded-t-[1.5rem] border-[6px] border-b-0 border-gray-800 shadow-2xl overflow-hidden transition-transform duration-700 group-hover:-translate-y-4 relative flex flex-col">
                        <div className="bg-[#075E54] w-full px-3 py-2 text-white flex items-center gap-2 shadow-sm">
                           <div className="w-5 h-5 bg-white/20 rounded-full shrink-0 flex items-center justify-center"><Users className="w-3 h-3 text-white" /></div>
                           <div className="text-[9px] font-bold leading-tight">
                             VaastuCorp PM<br/>
                             <span className="font-normal opacity-80 text-[7px]">online</span>
                           </div>
                        </div>
                        <div className="p-2.5 bg-[#E5DDD5] flex-1 space-y-2 relative">
                           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                           <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm text-[8px] text-gray-800 relative z-10 font-medium">
                             <span className="font-bold flex items-center gap-1 mb-1 text-blue-900">🔔 Phase 08 Update</span>
                             Superstructure column casting completed today. Plinth beam cured. Images attached below.
                           </div>
                           <div className="w-full h-16 bg-gray-300 rounded overflow-hidden relative z-10 shadow-sm border border-white">
                              <img src={step.img} className="w-full h-full object-cover" alt="Progress Photo" />
                           </div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold text-green-700 shadow-lg border border-green-100 z-10 flex items-center gap-2">
                         <span className="relative flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                         </span>
                         Weekly Progress WhatsApp Report
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-48 sm:h-56 bg-gray-100 rounded-2xl overflow-hidden border border-gray-100/50">
                      <img 
                        src={step.img} 
                        alt={`Illustration of ${step.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        loading="lazy" 
                      />
                      {idx === 1 && (
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-blue-800 shadow-sm border border-gray-100 z-10 flex items-center gap-1.5 uppercase tracking-wider">
                          <Scale3d className="w-3.5 h-3.5" /> Sample 3D Render
                        </div>
                      )}
                    </div>
                  )}

                </div>

              </div>
            </div>
          );
        })}
      </div>

      <VaastuQualityBlock />
      <FinalCTASection />

    </div>
  );
}
