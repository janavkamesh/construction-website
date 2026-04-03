"use client";

import { FileText, MonitorSmartphone, Search, UserCheck, Clock, ShieldCheck } from "lucide-react";

const whyUsPoints = [
  {
    id: 1,
    title: "Fixed-Price Contracts",
    desc: "The price you sign is the price you pay. Zero sudden escalations.",
    icon: FileText,
  },
  {
    id: 2,
    title: "Live Progress Dashboard",
    desc: "NRI or out-of-town? Monitor weekly site photos and updates remotely.",
    icon: MonitorSmartphone,
  },
  {
    id: 3,
    title: "100% Material Transparency",
    desc: "We list every brand we use upfront before we pour the first layer of concrete.",
    icon: Search,
  },
  {
    id: 4,
    title: "Single Point of Contact",
    desc: "No subcontractor chaos. One dedicated project manager for your entire build.",
    icon: UserCheck,
  },
  {
    id: 5,
    title: "On-Time Delivery Guarantee",
    desc: "Strict adherence to our timeline, backed by heavy penalty clauses for any delay.",
    icon: Clock,
  },
  {
    id: 6,
    title: "10-Year Structural Warranty",
    desc: "True peace of mind with our decade-long guarantee against structural defects.",
    icon: ShieldCheck,
  },
];

export default function WhyUsSection() {
  return (
    <section className="pt-10 pb-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 font-heading">
            Why VaastuCorp?
          </h2>
          <h3 className="text-xl font-bold text-blue-600 mb-6 font-heading">
            Building a home shouldn’t be the most stressful decision of your life.
          </h3>
          <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
            Hiring the wrong contractor in Chennai often means hidden cost escalations, compromised materials, and months of timeline delays. Whether you are building your first G+2 home in Velachery or managing an investment property from Dubai, you deserve complete visibility.
          </p>
        </div>

        {/* 6 Cards, 2 Rows, 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div 
                key={point.id} 
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5 leading-tight group-hover:text-blue-600 transition-colors font-heading">
                    {point.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
