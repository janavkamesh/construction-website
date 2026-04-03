import { ShieldCheck, Target, Users, CheckCircle, Clock, Home } from "lucide-react";
import Image from "next/image";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function About() {
  return (
    <>
    <div className="pt-6 bg-gray-50 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2 font-heading">The VaastuCorp Story</h1>
          <p className="text-sm md:text-base text-gray-600 font-medium max-w-2xl mx-auto">Building premium homes in Chennai with absolute transparency, fixed-price contracts, and zero hidden costs.</p>
        </div>

        {/* Founder Story */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-12">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden lg:max-w-md mx-auto w-full flex items-center justify-center border-8 border-blue-50 shadow-2xl bg-gray-900">
            <Image
              src="/images/about-us-image.png"
              alt="VaastuCorp Construction team and experience"
              fill
              className="object-cover z-0 opacity-20"
            />
            {/* Dark Brand Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 z-0"></div>
            
            <div className="absolute inset-4 border-2 border-dashed border-white/20 rounded-[1.5rem] pointer-events-none z-10" />
            <div className="text-center relative z-20 p-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white font-heading drop-shadow-md">12 Years of Experience</h3>
              <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-6 drop-shadow-md">Since 2014</p>
              <div className="flex items-center justify-center gap-3 inline-flex mt-2">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md">
                  V
                </div>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold tracking-tight text-white font-heading drop-shadow-md">
                    Vaastu<span className="text-blue-400">Corp</span> Construction
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 font-heading">We saw a broken system. So we fixed it.</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
              <p className="mb-6">
                For 12 years, we watched too many families in Chennai lose their life savings and peace of mind to unreliable contractors. Delayed handovers, sudden "material escalations," and substitute, low-grade products were the painful norm. This was a system built on surprises.
              </p>
              <p className="mb-0">
                We built VaastuCorp to offer a fundamentally better path. We treat home building as an engineering problem that requires precision and total transparency. We guarantee a fixed price and provide a written specification of every single branded material we use before you sign. We give you full control.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values / Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">150+</h3>
            <p className="text-gray-500 font-medium">Happy Families</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Zero</h3>
            <p className="text-gray-500 font-medium">Hidden Costs</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">12 Yrs</h3>
            <p className="text-gray-500 font-medium">Structural Warranty</p>
          </div>
        </div>

        {/* Our History Section */}
        <div className="mb-12">
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 text-center font-heading">Our History</h2>
           <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">
              
              {[
                { year: "2014", title: "The Beginning", desc: "Founded by civil engineers in a small office in Anna Nagar to combat local construction fraud.", icon: Clock },
                { year: "2016", title: "Early Growth", desc: "Successfully delivered our 25th premium residential project with a 100% on-time record.", icon: CheckCircle },
                { year: "2018", title: "The Protocol", desc: "Introduced our strict 'Zero Hidden Cost' protocol and penalty clauses for absolute transparency.", icon: Target },
                { year: "2020", title: "Standardization", desc: "Achieved ISO 9001 certification, standardizing 425+ quality checks across all ongoing projects.", icon: ShieldCheck },
                { year: "2023", title: "Century Mark", desc: "Crossed the 100+ home delivery milestone, cementing our reputation in Chennai's core areas.", icon: Home },
                { year: "2026", title: "Industry Leaders", desc: "150+ happy families. Setting the gold standard for residential contractor transparency in Tamil Nadu.", icon: Users },
              ].map((item, idx) => {
                const Icon = item.icon;
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex items-center justify-between md:justify-normal ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} flex-col group`}>
                     {/* Timeline Dot */}
                     <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-blue-600 text-white shadow-lg shrink-0 absolute left-5 md:left-1/2 -translate-x-[20px] md:-translate-x-1/2 z-10 group-hover:scale-110 transition-transform">
                       <Icon className="w-5 h-5" />
                     </div>
                     
                     {/* Card Content */}
                     <div className={`md:w-[45%] w-full pl-16 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                       <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                         <span className="text-blue-600 font-bold text-2xl tracking-tight block mb-1">{item.year}</span>
                         <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{item.title}</h3>
                         <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                       </div>
                     </div>
                  </div>
                );
              })}

           </div>
        </div>

        {/* EEAT Roster */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 text-center font-heading">The Team Behind the Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Founding Architect" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">Rajesh V.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Founding Architect</p>
             </div>
             
             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Lead Structural Engineer" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">Dr. Priya S.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Lead Structural Engineer</p>
             </div>
             
             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Client Relations Manager" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">Karthik N.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Client Relations</p>
             </div>
             
             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Site Supervisor" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">Arun P.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Site Supervisor</p>
             </div>

             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="MEP Engineer" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">Suresh K.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">MEP Engineer</p>
             </div>

             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Vaastu Consultant" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">Lakshmi D.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Vaastu Expert</p>
             </div>

             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1566492031523-87d28ebd9cb0?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Procurement Head" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">Venkat R.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Procurement Head</p>
             </div>

             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Quality Inspector" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">Bhavani S.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">QA Inspector</p>
             </div>

             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-inner">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="3D Modeler" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">Dinesh K.</h3>
               <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Lead 3D Artist</p>
             </div>
          </div>
        </div>

        {/* Hard Proof Gallery */}
        <div className="mb-6 border-y border-gray-200 py-6">
          <h2 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-8 text-center font-heading">Accreditations & Infrastructure</h2>
          <div className="flex flex-wrap items-center justify-center gap-6 gap-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-3 font-bold text-xl text-gray-800">
              <ShieldCheck className="w-8 h-8 text-blue-600" /> ISO 9001:2015
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-3 font-bold text-xl text-gray-800">
              <Target className="w-8 h-8 text-blue-600" /> RERA Registered
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-3 font-bold text-xl text-gray-800">
              <CheckCircle className="w-8 h-8 text-blue-600" /> 10-Yr Warranty
            </div>
          </div>
        </div>

      </div>
    </div>
    
    <FinalCTASection />
    </>
  );
}
