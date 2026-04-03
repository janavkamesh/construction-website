import Link from "next/link";
import { 
  Users, MapPin, Scale3d, FileSignature, 
  ScrollText, Flame, Beaker, Hammer, 
  BrickWall, Grid, PaintRoller, MoveRight, Key 
} from "lucide-react";

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
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
              Transparency from Bhoomi Puja to Key Handover. We handle the complexity, so you can focus on building your legacy.
            </p>
          </div>
        </div>
      </div>
      
      {/* 12-Step Vertical Timeline Framework */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        
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
                  <div className="relative w-full h-48 sm:h-56 bg-gray-100 rounded-2xl overflow-hidden border border-gray-100/50">
                    <img 
                      src={step.img} 
                      alt={`Illustration of ${step.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      loading="lazy" 
                    />
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Final Conversion Bottom Bar */}
      <section className="bg-blue-600 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">
            Ready to explore our construction models?
          </h2>
          <Link 
            href="/packages"
            className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 font-black px-10 py-5 rounded-2xl text-lg hover:bg-gray-50 hover:scale-105 transition-all shadow-xl shadow-blue-900/30 active:scale-95"
          >
            View Packages <MoveRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

    </div>
  );
}
