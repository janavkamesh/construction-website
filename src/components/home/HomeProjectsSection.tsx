"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const projects = [
  { id: 1, name: "The Shoreline Villa", category: "Villas", location: "ECR, Chennai", area: "4,200 Sq.Ft", delivery: "11 Months", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
  { id: 2, name: "Anna Nagar Residence", category: "Independent Homes", location: "Anna Nagar", area: "2,800 Sq.Ft", delivery: "9 Months", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
  { id: 3, name: "Velachery Duplex", category: "Duplex", location: "Velachery", area: "3,500 Sq.Ft", delivery: "10 Months", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" },
  { id: 4, name: "Pallikaranai Home", category: "Independent Homes", location: "Pallikaranai", area: "2,100 Sq.Ft", delivery: "8 Months", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" },
  { id: 5, name: "Bespoke Adyar Villa", category: "Villas", location: "Adyar", area: "4,500 Sq.Ft", delivery: "12 Months", img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80" },
  { id: 6, name: "T-Nagar Townhouse", category: "Duplex", location: "T-Nagar", area: "3,100 Sq.Ft", delivery: "10 Months", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d63c5d?auto=format&fit=crop&q=80" },
];

const categories = ["All", "Villas", "Independent Homes", "Duplex"];

export default function HomeProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="pt-20 pb-24 bg-white border-t border-gray-100" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">Our Completed Projects</h2>
          <p className="text-base text-gray-600 font-medium tracking-wide">150+ homes delivered across Chennai. Explore our latest work.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
                activeTab === cat 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                  : "bg-gray-100 text-gray-600 border border-transparent hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid - 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
              <div className="relative h-[220px] overflow-hidden bg-gray-200">
                {/* Fallback to standard img tag so unsplash external images load regardless of Next.js domains config restrictions */}
                <img 
                  src={project.img} 
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
                <h3 className="text-lg font-black text-gray-900 mb-1">{project.name}</h3>
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
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-colors shadow-lg active:scale-95"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
