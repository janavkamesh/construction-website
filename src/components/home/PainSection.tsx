import { AlertOctagon, TrendingUp, ClockAlert } from "lucide-react";

const pains = [
  {
    icon: <AlertOctagon className="w-8 h-8 text-red-500" />,
    title: "Contractor Abandonment",
    desc: "They promise the moon, take the advance, and disappear halfway through the structure."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-red-500" />,
    title: "Hidden Costs Multiplying",
    desc: "The initial quote was cheap, but halfway through, 'material costs' suddenly skyrocketed."
  },
  {
    icon: <ClockAlert className="w-8 h-8 text-red-500" />,
    title: "Endless Delays",
    desc: "A 10-month project turns into 2 years of chasing workers and coordinating with unreliable vendors."
  }
];

export default function PainSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Building a home in Chennai is exciting.<br />
            <span className="text-red-600">Until it isn&apos;t.</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            We asked 500+ homebuilders in Chennai about their biggest nightmare. Here is what they said:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {pains.map((pain, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
