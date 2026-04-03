"use client";

import { Home, Building, PencilRuler, Paintbrush, ShieldCheck, Ruler } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { id: 1, title: "Residential Construction", icon: Home },
  { id: 2, title: "Commercial Spaces", icon: Building },
  { id: 3, title: "Architectural Planning", icon: PencilRuler },
  { id: 4, title: "Interior Design", icon: Paintbrush },
];

export default function ServicesSection() {
  return (
    <section className="pt-6 pb-8 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3 font-heading">
            Our Services
          </h2>
          <p className="text-gray-600 font-medium text-sm max-w-2xl mx-auto">
            Comprehensive end-to-end building solutions tailored to your absolute requirements.
          </p>
        </motion.div>

        {/* 4 Items, 1 Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 font-heading">{service.title}</h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
