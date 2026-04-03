"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do prices change after construction starts?",
      a: "Absolutely not. The price we sign on the agreement is the absolute maximum you will pay. If cement or steel prices increase during construction, VaastuCorp absorbs the cost, not you. It's a true fixed-price contract."
    },
    {
      q: "How do I track progress if I am busy or out of town?",
      a: "Yes! You will receive daily geo-tagged photos and a consolidated weekly progress report. The dedicated engineer and project manager will communicate transparently on a dedicated WhatsApp group."
    },
    {
      q: "What brands of materials do you use?",
      a: "We exclusively use Tier-1 brands like Dalmia/Ultratech for cement and JSW/Tata or equivalent ISI grade for steel. You will receive all material delivery challans, and we encourage clients to randomly lab-test our materials at any stage."
    },
    {
      q: "What happens if there is a defect after handover?",
      a: "We provide a solid 10-year structural warranty and a complete 1-year guarantee against any minor leakages, cracks, or electrical/plumbing snags. We will fix it at our own cost."
    },
    {
      q: "Do you handle CMDA / DTCP plan approvals and paperwork?",
      a: "We have an in-house liaison team. We handle the entire bureaucratic process: layout approvals, EB connections, water connections, and building planning permissions on your behalf."
    },
    {
      q: "What happens if the project is delayed past the agreed handover date?",
      a: "Delays are unacceptable. Our contract includes a strict Penalty Clause. If we cross the promised handover date, we pay you a penalty of ₹10,000 for every week of delay. This forces us to be disciplined."
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 font-heading">
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
