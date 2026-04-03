import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Karthik N.",
    role: "Software Engineer",
    location: "OMR, Chennai",
    quote: "With my 9-to-5 job, I had zero time to visit the site or chase painters. VaastuCorp handled everything. Not a single day of unexplainable delay, and they handed over the keys exactly when promised.",
    objectionDefeated: "Time & Delays",
  },
  {
    name: "Suresh & Priya",
    role: "NRI Investors",
    location: "Dubai → ECR",
    quote: "Building a house in Chennai while living in Dubai sounded like a nightmare. Their daily WhatsApp photo updates and fixed-price guarantee gave us complete peace of mind. We didn't have to fly down even once during the structural phase.",
    objectionDefeated: "Remote Management & Trust",
  },
  {
    name: "Mr. Venkatraman",
    role: "Retired Civil Engineer",
    location: "Anna Nagar",
    quote: "As an ex-civil engineer, I am extremely particular about beam curing and steel quality. I cross-checked their JSW steel and Ultratech cement bills. Their structural integrity is flawless. Zero hidden costs.",
    objectionDefeated: "Material Quality & Hidden Costs",
  },
  {
    name: "Dr. Lakshmi V.",
    role: "Government Doctor",
    location: "Tambaram",
    quote: "I was extremely anxious about budget escalations. Every other contractor I spoke to had vague pricing. VaastuCorp's itemized bill was identical to my final payment amount. Highly trustworthy people.",
    objectionDefeated: "Budget Escalation",
  },
  {
    name: "Prakash R.",
    role: "Business Owner",
    location: "T. Nagar",
    quote: "The in-house architect team completely optimized our small 1200 Sq.Ft plot. The house feels incredibly spacious, beautifully ventilated, and 100% Vaastu compliant without compromising on modern aesthetics.",
    objectionDefeated: "Design Limitations",
  },
  {
    name: "Deepa & Ramesh",
    role: "First-time Builders",
    location: "Pallikaranai",
    quote: "We didn't know anything about approvals, soil testing, or electricity boards. The VaastuCorp liaison team seamlessly handled every single government permit without us having to step into a single office.",
    objectionDefeated: "Bureaucracy & Permits"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Don&apos;t just take our word for it.
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Hear from people who built their dream homes without the nightmare of dealing with local contractors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div 
              key={i} 
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative group hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100 group-hover:text-blue-50 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed font-medium mb-8 relative z-10">
                "{test.quote}"
              </p>
              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <div>
                  <h4 className="font-bold text-gray-900">{test.name}</h4>
                  <p className="text-sm text-gray-500">{test.role} • {test.location}</p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700">
                Overcame: {test.objectionDefeated}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
