import { Check, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  const tiers = [
    {
      name: "Standard Built",
      price: "1,799",
      popular: false,
      desc: "Perfect for rental properties and efficient independent houses.",
      features: [
        "Dalmia / Coromandel Cement",
        "ISI TMT Steel (Meenakshi/Pulkit)",
        "Standard Red Bricks",
        "UPVC Windows with plain glass",
        "Asian Tractor Emulsion Paint",
        "Standard Vitrified Tiles (₹40/sq.ft)"
      ],
      color: "blue"
    },
    {
      name: "Premium Built",
      price: "2,199",
      popular: true,
      desc: "Our most chosen plan for self-use residential villas with high longevity.",
      features: [
        "Ultratech / Ramco Cement",
        "JSW / Tata Tiscon Steel",
        "Premium Chamber Bricks",
        "Teak Wood Main Door (₹25k limit)",
        "Asian Royale Luxury Paint",
        "Premium Vitrified Tiles (₹80/sq.ft)",
        "Parryware / Hindware Sanitary"
      ],
      color: "blue"
    },
    {
      name: "Luxury Built",
      price: "2,799+",
      popular: false,
      desc: "No compromises. Complete luxury end-to-end for bespoke villas.",
      features: [
        "Ultratech Super Premium Cement",
        "JSW Neo Steel",
        "Wire-cut Bricks / Porotherm Blocks",
        "Burma Teak Wood Main Door",
        "Asian Royale Play Stucco",
        "Italian Marble / Granite Flooring",
        "Kohler / Jaguar Premium Sanitary",
        "Complete False Ceiling"
      ],
      color: "gray"
    }
  ];

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 font-heading">
            Transparent House Construction Cost in Chennai (2025-2026)
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Stop guessing. Compare our fully detailed construction packages. We hide nothing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-8">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col bg-white rounded-3xl p-8 border ${
                tier.popular 
                  ? 'border-blue-600 shadow-2xl shadow-blue-900/10 scale-100 lg:scale-105 z-10' 
                  : 'border-gray-200 shadow-lg shadow-gray-200/50 hover:border-gray-300'
              } transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-md">
                  MOST CHOSEN
                </div>
              )}
              
              <div className="mb-8 border-b border-gray-100 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{tier.name}</h3>
                <p className="text-gray-500 text-sm font-medium mb-6 h-10">{tier.desc}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-gray-900 leading-none font-heading">₹</span>
                  <span className="text-5xl font-black text-gray-900 tracking-tighter leading-none font-heading">{tier.price}</span>
                  <span className="text-gray-500 font-semibold">/ sq.ft</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex flex-col gap-1">
                    <div className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${tier.popular ? 'text-blue-600' : 'text-green-500'}`} />
                      <span className="text-gray-700 font-medium leading-tight">{feature}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <Link
                  href="#book"
                  className={`text-center py-4 rounded-xl font-bold transition-all active:scale-[0.98] ${
                    tier.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20' 
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  Get Custom Quote
                </Link>
                
                <div className="flex items-center justify-center gap-3 text-[11px] text-gray-500 font-medium">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-900 font-bold">4.9</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-green-500" strokeWidth={3} />
                    <span>RERA Reg.</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          <span>GST and approval charges are calculated separately as per government norms.</span>
        </div>

      </div>
    </section>
  );
}
