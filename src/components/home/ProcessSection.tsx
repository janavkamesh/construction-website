"use client";

import { Handshake, Hammer, PaintBucket, Key, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: "01", title: "Consultation & Approvals", icon: Handshake, desc: "Finalize fixed-price quote, 3D design, and acquire CMDA permits." },
  { id: "02", title: "Core Construction", icon: Hammer, desc: "Soil testing, excavation, foundation, and superstructure build." },
  { id: "03", title: "Interiors & Finishes", icon: PaintBucket, desc: "Plastering, premium tiles, plumbing, and wall painting." },
  { id: "04", title: "Handover & Warranty", icon: Key, desc: "Deep cleaning, key handover, and 10-year warranty activation." },
];

export default function ProcessSection() {
  return (
    <section className="py-12 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 font-heading">
            How We Work: The 4-Step Stress-Free Build
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto">
            We have engineered a foolproof process that guarantees quality and peace of mind.
          </p>
        </div>

        {/* 4 Column Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 w-full">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 relative group flex flex-col h-full w-full">
                
                {/* Step Number Badge */}
                <div className="absolute top-4 right-4 text-sm font-bold text-gray-300 group-hover:text-blue-200 transition-colors">
                  {step.id}
                </div>

                {/* Icon Circle */}
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm outline outline-2 outline-white">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors shrink-0 pr-4 font-heading">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mt-auto">
                  {step.desc}
                </p>

              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-6 text-center relative z-10 w-full flex justify-center">
          <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-50 transition-colors">
            View detailed construction process <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
