import Link from "next/link";
import { 
  Users, MapPin, Scale3d, FileSignature, 
  ScrollText, Flame, Beaker, Hammer, 
  BrickWall, Grid, PaintRoller, MoveRight, Key,
  CheckCircle, Clock, ShieldCheck, Camera, HardHat
} from "lucide-react";
import FinalCTASection from "@/components/home/FinalCTASection";

const steps = [
  { title: "Initial Consultation & Site Visit", icon: Users, img: "/images/initial-construction-image.png" },
  { title: "Architectural Design & 3D Floor Plans", icon: Scale3d, img: "/images/architectural-design-image.png" },
  { title: "Detailed Estimation & Contract Signing", icon: FileSignature, img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Permits & Government Approvals", icon: ScrollText, img: "/images/government-approvals-image.png" },
  { title: "Bhoomi Puja & Site Mobilization", icon: Flame, img: "/images/bhoomi-pooja-image.png" },
  { title: "Soil Testing & Foundation", icon: Beaker, img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Plinth Beam & Anti-Termite Treatment", icon: Hammer, img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Superstructure: Columns & Brick Masonry", icon: BrickWall, img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Roof Slab Casting & Curing", icon: Grid, img: "/images/roof-slab-image.png" },
  { title: "Internal & External Plastering", icon: PaintRoller, img: "/images/plastering-image.png" },
  { title: "MEP Services & Flooring", icon: MapPin, img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&fm=webp&q=60" },
  { title: "Finishes, Painting & Handover", icon: Key, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&fm=webp&q=60" },
];

export default function HowItWorks() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 6-Card "Why Us" Grid */}
      <div className="max-w-6xl mx-auto px-4 pt-6 md:pt-8 pb-8 md:pb-6 mt-0 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 tracking-tight font-heading">Why Build With VaastuCorp?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[1.5rem] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5"><Users className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">Dedicated PM</h3>
            <p className="text-sm font-medium text-gray-600">A single civil engineering expert handles your entire build end-to-end.</p>
          </div>
          <div className="bg-white p-6 rounded-[1.5rem] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5"><Clock className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">Strict Deadlines</h3>
            <p className="text-sm font-medium text-gray-600">If we delay beyond the contracted grace period, we pay you a strict penalty.</p>
          </div>
          <div className="bg-white p-6 rounded-[1.5rem] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5"><FileSignature className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">Fixed Pricing</h3>
            <p className="text-sm font-medium text-gray-600">Crystal clear contracts. No unexpected hikes. No disguised costs.</p>
          </div>
          <div className="bg-white p-6 rounded-[1.5rem] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5"><ShieldCheck className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">12-Year Warranty</h3>
            <p className="text-sm font-medium text-gray-600">Rock-solid structural warranty on every single home we build.</p>
          </div>
          <div className="bg-white p-6 rounded-[1.5rem] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-5"><Camera className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">Daily Visuals</h3>
            <p className="text-sm font-medium text-gray-600">Daily photos and weekly video walkthroughs strictly via WhatsApp.</p>
          </div>
          <div className="bg-white p-6 rounded-[1.5rem] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5"><HardHat className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">Premium Materials</h3>
            <p className="text-sm font-medium text-gray-600">We only use top-grade verified materials like Tata Steel and UltraTech Cement.</p>
          </div>
        </div>
      </div>
      
      {/* 12-Step Vertical Timeline Framework */}
      <section className="bg-white border-y border-gray-100 pb-8 pt-8 md:pt-12 mt-10 md:mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 tracking-tight font-heading">Our Construction Process</h2>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
          
          {/* Center Guide Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-24 w-0.5 bg-gray-200 md:-translate-x-1/2 z-0" />

        {steps.map((step, idx) => {
          const isEven = idx % 2 === 0; // True means left side on desktop
          const Icon = step.icon;

          return (
            <div key={idx} className={`relative flex items-center mb-8 w-full z-10 flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Center Dot Node */}
              <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-blue-600 border-[6px] border-gray-50 shadow-sm flex items-center justify-center transform -translate-x-1/2 z-20">
                 <span className="text-white text-[10px] font-bold">{idx + 1}</span>
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
                      <span className="text-[10px] sm:text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1 opacity-80">
                        Phase {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight font-heading">
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
      </section>

      {/* Trust Signals Banner */}
      <div className="bg-white py-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-4">
              <h4 className="text-5xl font-bold text-blue-600 mb-2 font-heading">15+</h4>
              <p className="text-xl font-bold text-gray-900">Years Experience</p>
              <p className="text-gray-500 font-medium mt-1">Deep roots in Chennai</p>
            </div>
            <div className="p-4 pt-8 md:pt-4">
              <h4 className="text-5xl font-bold text-blue-600 mb-2 font-heading">200+</h4>
              <p className="text-xl font-bold text-gray-900">Projects Completed</p>
              <p className="text-gray-500 font-medium mt-1">Homes handed over safely</p>
            </div>
            <div className="p-4 pt-8 md:pt-4">
              <h4 className="text-5xl font-bold text-blue-600 mb-2 font-heading">Zero</h4>
              <p className="text-xl font-bold text-gray-900">Deadline Defaults</p>
              <p className="text-gray-500 font-medium mt-1">Contractually protected</p>
            </div>
          </div>
        </div>
      </div>

      <FinalCTASection />

    </div>
  );
}
