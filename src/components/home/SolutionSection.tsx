import { FileText, Smartphone, UserCheck } from "lucide-react";

export default function SolutionSection() {
  const pillars = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Fixed-Price Contract",
      desc: "Every single brick is accounted for. The price we quote is the price you pay. Period. No mid-construction revisions or surprises."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "WhatsApp Updates",
      desc: "Stay connected from anywhere in the world. Get daily geo-tagged photos and site progress directly on your WhatsApp."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: "Full Accountability",
      desc: "One dedicated project manager. One point of contact. We handle every vendor, every material, and every permit."
    }
  ];

  return (
    <section className="py-12 bg-blue-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-8 px-4">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block font-heading">The VaastuCorp Way</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 font-heading">
            Construction the way it should always have been.
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 rounded-full mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {pillars.map((pillar, i) => (
            <div 
              key={i}
              className="group bg-blue-800/30 border border-blue-700/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-white hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-700 group-hover:bg-blue-50 rounded-2xl flex items-center justify-center mb-8 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-900 mb-4 transition-colors font-heading">
                {pillar.title}
              </h3>
              <p className="text-blue-200 group-hover:text-gray-600 leading-relaxed font-medium transition-colors">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
