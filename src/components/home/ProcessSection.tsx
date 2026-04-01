"use client";

const steps = [
  { title: "Agreement Signing", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
  { title: "Soil Test", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
  { title: "Groundbreaking Ceremony", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" },
  { title: "Column Marking", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" },
  { title: "Column Excavation & Foundation", img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80" },
  { title: "Roof Shuttering Work", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d63c5d?auto=format&fit=crop&q=80" },
  { title: "Roof Concrete", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80" },
  { title: "Partition Walls", img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80" },
  { title: "Flooring, Electrical & Plumbing", img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&q=80" },
  { title: "Solar / Pool / Security Systems", img: "https://images.unsplash.com/photo-1600585153215-dc56a2c3dbf9?auto=format&fit=crop&q=80" },
  { title: "Doors, Windows & Fittings", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80" },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Our Construction Process
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto">
            A transparent, step-by-step journey from paperwork to key handover. Check out the exact milestones you will experience with us.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 md:-translate-x-1/2 z-0" />

          {steps.map((step, idx) => {
            const isDesktopEven = idx % 2 === 0;

            return (
              <div key={idx} className="relative flex items-center justify-between w-full mb-12 sm:mb-16 z-10 flex-col md:flex-row">
                
                {/* Center Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gray-300 border-[3px] border-white shadow-sm transform -translate-x-1/2 z-20 top-8 md:top-1/2 md:-translate-y-1/2" />

                {/* Left Offset for Odd (Desktop only) */}
                {isDesktopEven ? null : <div className="hidden md:block w-1/2" />}

                {/* Content Container */}
                <div className={`w-full pl-24 pr-4 md:px-0 md:w-1/2 relative ${isDesktopEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
                  
                  <div className="bg-white shadow-xl shadow-gray-200 p-2 sm:p-3 relative z-10">
                    
                    <div className="bg-[#f3d052] flex items-stretch min-h-[64px] relative">
                      
                      {/* Chevron Left - Visible on ALL Mobile, and ODD Desktop */}
                      <div className={`absolute top-1/2 -translate-y-1/2 left-[-16px] w-0 h-0 border-y-[24px] sm:border-y-[32px] border-y-transparent border-r-[16px] border-r-[#f3d052] ${isDesktopEven ? 'md:hidden' : 'block'}`} />
                      
                      {/* Chevron Right - Visible on EVEN Desktop */}
                      <div className={`hidden absolute top-1/2 -translate-y-1/2 right-[-16px] w-0 h-0 border-y-[32px] border-y-transparent border-l-[16px] border-l-[#f3d052] md:${isDesktopEven ? 'block' : 'hidden'}`} />

                      {/* Number Block */}
                      <div className={`bg-[#333333] w-14 sm:w-16 text-[#f3d052] flex items-center justify-center font-bold text-xl sm:text-2xl shrink-0 ${(!isDesktopEven) ? 'ml-3 sm:ml-5' : 'ml-0 md:ml-0 max-md:ml-3'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      
                      <div className="flex items-center px-4 sm:px-6 py-3 text-gray-900 text-sm sm:text-lg font-bold">
                        {step.title}
                      </div>

                    </div>
                    
                    <div className="mt-3">
                      <img 
                        src={step.img} 
                        alt={step.title} 
                        className="w-full h-[180px] sm:h-[250px] object-cover" 
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>

                {/* Right Offset for Even (Desktop only) */}
                {isDesktopEven ? <div className="hidden md:block w-1/2" /> : null}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
