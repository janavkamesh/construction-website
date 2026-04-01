"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Will the final price change mid-way through construction?",
      a: "Absolutely not. The price we sign on the agreement is the absolute maximum you will pay. If cement or steel prices increase during construction, VaastuCorp absorbs the cost, not you. It's a true fixed-price contract."
    },
    {
      q: "What if you delay the handover of my house?",
      a: "Delays are unacceptable. Our contract includes a strict Penalty Clause. If we cross the promised handover date, we pay you a penalty of ₹10,000 for every week of delay. This forces us to be disciplined."
    },
    {
      q: "Can I bring my own interior designer or switch materials?",
      a: "Yes. Our pricing is completely modular. If you want to use a specific tile from a vendor you prefer, we simply deduct the standard tile budget from your package, and you pay the difference directly."
    },
    {
      q: "Who handles the CMDA / Panchayat / DTCP approvals?",
      a: "We have an in-house liaison team. We handle the entire bureaucratic process: layout approvals, EB connections, water connections, and building planning permissions on your behalf."
    },
    {
      q: "How do you ensure the exact quality of materials like cement and steel?",
      a: "We exclusively use Tier-1 brands like Dalmia/Ultratech for cement and JSW/Tata or equivalent ISI grade for steel. You will receive all material delivery challans, and we encourage clients to randomly lab-test our materials at any stage."
    },
    {
      q: "Will I get regular updates if I am an NRI or living out of state?",
      a: "Yes! You will receive daily geo-tagged photos and a consolidated weekly progress report. The dedicated engineer and project manager will communicate transparently on a dedicated WhatsApp group."
    },
    {
      q: "Do you help with securing a construction home loan?",
      a: "We are officially empaneled with major banks like SBI, HDFC, and Axis Bank. Our financial team provides you with the detailed engineering estimates and legal papers required to process the loan smoothly."
    },
    {
      q: "What is the warranty period for the construction?",
      a: "We provide a solid 10-year structural warranty and a complete 1-year guarantee against any minor leakages, cracks, or electrical/plumbing snags. We will fix it at our own cost."
    },
    {
      q: "Can we modify the floor plan after construction has started?",
      a: "Minor partition wall changes can be accommodated before column casting, but structural changes (moving load-bearing walls) are avoided post-approval to ensure safety and prevent delays."
    },
    {
      q: "Are there any hidden costs like transportation or GST?",
      a: "Everything—including GST, material transportation, scaffold rentals, and labor welfare cess—is clearly itemized in your first detailed quotation. There are zero hidden fees."
    },
    {
      q: "How long does a standard G+1 independent house take to build?",
      a: "Usually 8 to 11 months, depending on the square footage, soil condition, and seasonal factors like heavy monsoons. The exact, binding timeline is locked in the agreement before we dig."
    },
    {
      q: "Is soil testing really mandatory even for small plots?",
      a: "Yes. We never design a foundation blindly based on neighboring plots. A structural soil test determines the precise pile depth and footprint required, permanently preventing cracks and settling years later."
    },
    {
      q: "Can I supply my own materials to save costs?",
      a: "We generally discourage this for primary structural materials to maintain our strict timeline and structural warranty. However, aesthetic materials like specific tiles, lighting, or imported bathroom fixtures can absolutely be supplied by you."
    },
    {
      q: "What happens if there is unexpected rock or water during excavation?",
      a: "Minor variations are handled by us. If major rock blasting or heavy continuous dewatering is required beyond standard limits, it will be transparently discussed at actuals (supported by bills) before proceeding."
    },
    {
      q: "Do you design Vaastu-compliant homes?",
      a: "Yes. 100% of our floor plans are vetted by our in-house Vaastu experts before being presented to you for approval. We perfectly balance traditional cosmic beliefs with modern ventilation and natural lighting."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Straight answers to the hardest questions in Chennai real estate.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:border-blue-300 transition-colors"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-6 flex items-center justify-between gap-4"
              >
                <span className="font-bold text-gray-900 text-lg leading-tight pr-8">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
