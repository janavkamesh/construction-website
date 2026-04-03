"use client";

import { useState } from "react";
import { CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import FinalCTASection from "@/components/home/FinalCTASection";
import SoftCTA from "@/components/home/SoftCTA";
import LeadMagnet from "@/components/ui/LeadMagnet";

// Generate 4 supplementary mock images for the slider
const mockSupplementaryImages = [
  "/images/building-exterior-1.png",
  "/images/building-exterior-2.png",
  "/images/building-exterior-3.png",
  "/images/building-exterior-4.png",
];

const categories = ["All", "Villas", "Independent Homes", "Duplex"];

const projects = [
  { id: 1, name: "The Shoreline Villa", category: "Villas", location: "ECR, Chennai", area: "4,200 Sq.Ft", delivery: "11 Months", budget: 350, testimonial: "The VaastuCorp team delivered exactly what they promised. No hidden fees, beautiful finish, and right on schedule.", clientName: "Karthik N.", images: ["/images/building-exterior-5.png", ...mockSupplementaryImages] },
  { id: 2, name: "Anna Nagar Residence", category: "Independent Homes", location: "Anna Nagar", area: "2,800 Sq.Ft", delivery: "9 Months", budget: 280, testimonial: "We were impressed by the daily WhatsApp updates. The structural quality is superb.", clientName: "Priya S.", images: ["/images/building-exterior-6.png", ...mockSupplementaryImages] },
  { id: 3, name: "Velachery Duplex", category: "Duplex", location: "Velachery", area: "3,500 Sq.Ft", delivery: "10 Months", budget: 140, testimonial: "Transparent pricing from day one. Best decision we made for our family.", clientName: "Arun K.", images: ["/images/building-exterior-7.png", ...mockSupplementaryImages] },
  { id: 4, name: "Pallikaranai Home", category: "Independent Homes", location: "Pallikaranai", area: "2,100 Sq.Ft", delivery: "8 Months", budget: 90, testimonial: "Highly professional engineers. They handled all CMDA approvals smoothly without us worrying.", clientName: "Meera R.", images: ["/images/building-exterior-8.png", ...mockSupplementaryImages] },
  { id: 5, name: "Bespoke Adyar Villa", category: "Villas", location: "Adyar", area: "4,500 Sq.Ft", delivery: "12 Months", budget: 420, testimonial: "The luxury finishes and attention to Vasthu were exactly what my parents wanted.", clientName: "Rajesh V.", images: ["/images/building-exterior-9.png", ...mockSupplementaryImages] },
  { id: 6, name: "T-Nagar Townhouse", category: "Duplex", location: "T-Nagar", area: "3,100 Sq.Ft", delivery: "10 Months", budget: 220, testimonial: "Built our dream home in a very congested street with zero neighbor complaints.", clientName: "Deepa L.", images: ["/images/building-exterior-10.png", ...mockSupplementaryImages] },
  { id: 7, name: "OMR Tech Reserve", category: "Independent Homes", location: "OMR, Chennai", area: "2,400 Sq.Ft", delivery: "9 Months", budget: 110, testimonial: "Perfect for NRI investors. They managed the entire build while I was in Singapore.", clientName: "Senthil P.", images: ["/images/building-exterior-11.png", ...mockSupplementaryImages] },
  { id: 8, name: "Guindy Riverside", category: "Villas", location: "Guindy", area: "5,000 Sq.Ft", delivery: "14 Months", budget: 500, testimonial: "The architectural design and the 3D walkthrough perfectly matched the final output.", clientName: "Dr. Lakshmi", images: ["/images/building-exterior-12.png", ...mockSupplementaryImages] },
  { id: 9, name: "Tambaram Heritage", category: "Independent Homes", location: "Tambaram", area: "2,200 Sq.Ft", delivery: "8 Months", budget: 85, testimonial: "Quality materials used throughout. The site was always kept incredibly clean.", clientName: "Venkat T.", images: ["/images/building-exterior-1.png", ...mockSupplementaryImages] },
  { id: 10, name: "Besant Nagar Breezes", category: "Duplex", location: "Besant Nagar", area: "3,200 Sq.Ft", delivery: "10 Months", budget: 260, testimonial: "Fixed price really meant fixed price. I am genuinely stunned by their integrity.", clientName: "Anand M.", images: ["/images/building-exterior-2.png", ...mockSupplementaryImages] },
  { id: 11, name: "Nungambakkam Elite", category: "Villas", location: "Nungambakkam", area: "4,800 Sq.Ft", delivery: "13 Months", budget: 450, testimonial: "They transformed our vision into an architectural masterpiece ahead of schedule.", clientName: "Suresh & Co.", images: ["/images/building-exterior-3.png", ...mockSupplementaryImages] },
  { id: 12, name: "Porur Lakeview", category: "Independent Homes", location: "Porur", area: "2,600 Sq.Ft", delivery: "9 Months", budget: 130, testimonial: "The best civil contractors in Chennai. We felt safe throughout the entire journey.", clientName: "Bhavani R.", images: ["/images/building-exterior-4.png", ...mockSupplementaryImages] },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeArea, setActiveArea] = useState("All Chennai");
  const [activeBudget, setActiveBudget] = useState("Show All Budgets");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = projects.filter((p) => {
    // Check Category
    if (activeTab !== "All" && p.category !== activeTab) return false;
    
    // Check Area
    if (activeArea !== "All Chennai" && !p.location.includes(activeArea)) return false;

    // Check Budget
    if (activeBudget === "₹80L - ₹1.5Cr" && (p.budget < 80 || p.budget > 150)) return false;
    if (activeBudget === "₹1.5Cr - ₹3Cr" && (p.budget <= 150 || p.budget > 300)) return false;
    if (activeBudget === "₹3Cr+" && p.budget <= 300) return false;

    return true;
  });

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    // Prevent background scrolling
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
    }
  };

  return (
    <>
    <div className="pt-6 bg-gray-50 min-h-screen flex flex-col w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2 font-heading">Our Completed Projects</h1>
          <p className="text-sm md:text-base text-gray-600 font-medium max-w-2xl mx-auto">Building premium homes in Chennai with absolute transparency, fixed-price contracts, and zero hidden costs.</p>
        </div>

        {/* Filter Bar */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-6 bg-white p-6 rounded-3xl border border-gray-200 shadow-sm relative z-20">
          <div className="md:col-span-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block px-2">Property Type</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === cat 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                      : "bg-gray-50 text-gray-600 border border-gray-100 hover:border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {cat === "Independent Homes" ? "Independent" : cat}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block px-2">Key Areas</label>
            <select 
              className="w-full bg-gray-50 rounded-xl px-4 py-2.5 text-sm font-bold border border-gray-100 outline-none focus:ring-2 focus:ring-blue-600 text-gray-700 appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
              value={activeArea}
              onChange={(e) => setActiveArea(e.target.value)}
            >
              <option value="All Chennai">All Chennai</option>
              <option value="Anna Nagar">Anna Nagar</option>
              <option value="OMR">OMR</option>
              <option value="ECR">ECR</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-4 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <div className="relative">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block px-2">Budget Match</label>
            <select 
              className="w-full bg-gray-50 rounded-xl px-4 py-2.5 text-sm font-bold border border-gray-100 outline-none focus:ring-2 focus:ring-blue-600 text-gray-700 appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
              value={activeBudget}
              onChange={(e) => setActiveBudget(e.target.value)}
            >
              <option value="Show All Budgets">Show All Budgets</option>
              <option value="₹80L - ₹1.5Cr">₹80L - ₹1.5Cr</option>
              <option value="₹1.5Cr - ₹3Cr">₹1.5Cr - ₹3Cr</option>
              <option value="₹3Cr+">₹3Cr+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-4 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        {/* Gallery Grid - Top Half */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {filteredProjects.slice(0, 3).map((project) => (
            <div 
              key={project.id} 
              onClick={() => openLightbox(project)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow cursor-pointer flex flex-col"
            >
              <div className="relative h-[250px] overflow-hidden bg-gray-200 shrink-0">
                <img 
                  src={project.images[0]} 
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-blue-800 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm uppercase tracking-widest">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  Delivered on Time
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between shrink-0">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors font-heading">{project.name}</h3>
                  <p className="text-sm font-medium text-gray-500 mb-6">{project.category} | {project.location} | {project.area} | {project.delivery}</p>
                </div>
              </div>

              {/* Injected Social Proof Testimonial Block */}
              <div className="p-6 bg-blue-50/50 border-t border-blue-100 flex-1 flex flex-col justify-between">
                <p className="text-gray-700 text-sm italic font-medium leading-relaxed mb-4">"{project.testimonial}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-xs shrink-0">{project.clientName.charAt(0)}</div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 line-clamp-1">{project.clientName}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider line-clamp-1">{project.category} • {project.location}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <SoftCTA 
            heading="Want a home like the ones above?" 
            subtext="We specialize in custom residential constructions exactly to your taste." 
            buttonText="Book a site visit" 
          />
        )}

        {/* Gallery Grid - Bottom Half */}
        {filteredProjects.length > 3 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 mb-10">
            {filteredProjects.slice(3).map((project) => (
              <div 
                key={project.id} 
                onClick={() => openLightbox(project)}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow cursor-pointer flex flex-col"
              >
                <div className="relative h-[250px] overflow-hidden bg-gray-200 shrink-0">
                  <img 
                    src={project.images[0]} 
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-blue-800 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm uppercase tracking-widest">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                    Delivered on Time
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between shrink-0">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors font-heading">{project.name}</h3>
                    <p className="text-sm font-medium text-gray-500 mb-6">{project.category} | {project.location} | {project.area} | {project.delivery}</p>
                  </div>
                </div>

                <div className="p-6 bg-blue-50/50 border-t border-blue-100 flex-1 flex flex-col justify-between">
                  <p className="text-gray-700 text-sm italic font-medium leading-relaxed mb-4">"{project.testimonial}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-xs shrink-0">{project.clientName.charAt(0)}</div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 line-clamp-1">{project.clientName}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider line-clamp-1">{project.category} • {project.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <LeadMagnet />
      <FinalCTASection />

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content container */}
          <div 
            className="relative w-full max-w-5xl aspect-video flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Nav */}
            <button 
              onClick={prevImage}
              className="absolute left-2 md:-left-12 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Image */}
            <div className="relative w-full h-full overflow-hidden rounded-lg sm:rounded-2xl shadow-2xl bg-gray-900">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.name} image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Overlay Text */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8">
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1 font-heading">{selectedProject.name}</h3>
                <p className="text-gray-300 font-medium mb-4">{selectedProject.location} • {selectedProject.area}</p>
                
                {/* Indicator Dots */}
                <div className="flex gap-2">
                  {selectedProject.images.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentImageIndex ? "w-8 bg-blue-500" : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Nav */}
            <button 
              onClick={nextImage}
              className="absolute right-2 md:-right-12 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
