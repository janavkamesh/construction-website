"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

// Generate 4 supplementary mock images for the slider
const mockSupplementaryImages = [
  "/images/building-exterior-2.png",
  "/images/building-exterior-3.png",
  "/images/building-exterior-4.png",
  "/images/building-exterior-5.png",
];

const projects = [
  { id: 1, name: "The Shoreline Villa", location: "ECR, Chennai", area: "4,200 Sq.Ft", delivery: "11 Months", images: ["/images/building-exterior-6.png", ...mockSupplementaryImages] },
  { id: 2, name: "Anna Nagar Residence", location: "Anna Nagar", area: "2,800 Sq.Ft", delivery: "9 Months", images: ["/images/building-exterior-7.png", ...mockSupplementaryImages] },
  { id: 3, name: "Velachery Duplex", location: "Velachery", area: "3,500 Sq.Ft", delivery: "10 Months", images: ["/images/building-exterior-8.png", ...mockSupplementaryImages] },
  { id: 4, name: "Pallikaranai Home", location: "Pallikaranai", area: "2,100 Sq.Ft", delivery: "8 Months", images: ["/images/building-exterior-9.png", ...mockSupplementaryImages] },
  { id: 5, name: "Bespoke Adyar Villa", location: "Adyar", area: "4,500 Sq.Ft", delivery: "12 Months", images: ["/images/building-exterior-10.png", ...mockSupplementaryImages] },
  { id: 6, name: "T-Nagar Townhouse", location: "T-Nagar", area: "3,100 Sq.Ft", delivery: "10 Months", images: ["/images/building-exterior-11.png", ...mockSupplementaryImages] },
];

export default function HomeProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <section className="pt-10 pb-12 bg-white border-t border-gray-100" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 font-heading">Proven Quality Across Chennai</h2>
          <p className="text-base text-gray-600 font-medium tracking-wide">Browse our recently completed and ongoing projects. Real photos. Real locations. No 3D renders.</p>
        </div>

        {/* Gallery Grid - 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openLightbox(project)}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all cursor-pointer"
            >
              <div className="relative h-[220px] overflow-hidden bg-gray-200">
                <img 
                  src={project.images[0]} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-gray-900 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm uppercase tracking-widest">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  Delivered on Time
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors font-heading">{project.name}</h3>
                <p className="text-sm text-gray-500 font-semibold mb-4">{project.location}</p>
                <div className="grid grid-cols-2 gap-3 border-t border-gray-200 pt-4">
                  <div>
                    <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Built-up Area</span>
                    <span className="font-extrabold text-sm text-gray-900">{project.area}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Time Taken</span>
                    <span className="font-extrabold text-sm text-gray-900">{project.delivery}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gray-900 text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-colors active:scale-95"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>

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
    </section>
  );
}
