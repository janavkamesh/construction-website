"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";
import PricingSection from "@/components/home/PricingSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import LeadMagnet from "@/components/ui/LeadMagnet";

export default function Packages() {
  const [sqft, setSqft] = useState<number | "">("");
  const [tier, setTier] = useState<number>(1799); // standard basic tier

  const tiers = [
    { name: "Standard Built", price: 1799 },
    { name: "Premium Built", price: 2199 },
    { name: "Luxury Built", price: 2799 },
  ];

  const total = typeof sqft === "number" ? sqft * tier : 0;

  return (
    <div className="pt-6 bg-gray-50 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2 font-heading">Packages & Pricing</h1>
          <p className="text-sm md:text-base text-gray-600 font-medium max-w-2xl mx-auto">Building premium homes in Chennai with absolute transparency, fixed-price contracts, and zero hidden costs.</p>
        </div>

        {/* Interactive Calculator */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-6 shadow-xl shadow-blue-900/5 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-heading">Instant Cost Calculator</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8 border-b border-gray-100 pb-8">
            <div>
              <label className="text-sm font-bold text-gray-900 mb-2 block">Built-Up Area (Sq.Ft)</label>
              <input 
                type="number"
                min="0"
                value={sqft}
                onChange={(e) => setSqft(e.target.value ? parseInt(e.target.value) : "")}
                placeholder="E.g. 2000"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold text-lg"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-900 mb-2 block">Construction Quality Tier</label>
              <select 
                value={tier}
                onChange={(e) => setTier(parseInt(e.target.value))}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold text-lg cursor-pointer"
              >
                {tiers.map((t) => (
                  <option key={t.price} value={t.price}>{t.name} (₹{t.price}/sq.ft)</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-blue-600 text-white rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <span className="block text-blue-200 text-sm font-bold mb-1">Estimated Total Cost</span>
              <span className="text-4xl md:text-5xl font-bold tracking-tight leading-none font-heading">
                ₹{total.toLocaleString('en-IN')}
              </span>
            </div>
            <a 
              href="#book"
              className="w-full md:w-auto text-center bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg active:scale-[0.98]"
            >
              Get Detailed Quote
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-gray-500 font-medium">
            * This is a baseline estimation. Final pricing may slightly vary based on soil condition and specific customizations.
          </p>

        </div>
      </div>

      <PricingSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            {/* Material Transparency */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 font-heading">Standard Material Partners</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Cement</p>
                    <p className="text-sm text-gray-500 font-medium">UltraTech / Ramco</p>
                  </div>
                  <div className="hidden sm:block text-xs font-bold text-gray-300 italic">ULTRATECH</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Wiring</p>
                    <p className="text-sm text-gray-500 font-medium">Finolex</p>
                  </div>
                  <div className="hidden sm:block text-[10px] font-bold tracking-widest text-[#d82a2a] uppercase">Finolex</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Plumbing</p>
                    <p className="text-sm text-gray-500 font-medium">Ashirvad</p>
                  </div>
                  <div className="hidden sm:block text-xs font-bold text-blue-900/60 uppercase">Ashirvad</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Steel</p>
                    <p className="text-sm text-gray-500 font-medium">JSW / Tata Tiscon</p>
                  </div>
                  <div className="hidden sm:block text-xs font-bold text-gray-400">TATA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial FAQ */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 font-heading">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-2xl border border-gray-100 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer p-6 font-bold text-gray-900 flex justify-between items-center text-sm md:text-base">
                  Do prices change after construction starts?
                  <span className="text-blue-600 font-normal transition duration-300 group-open:rotate-180">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 font-medium text-sm leading-relaxed border-t border-gray-50 pt-4">
                  No. Once you sign the fixed-price contract, the price is locked. We absorb any normal material price escalations during the contracted timeframe.
                </div>
              </details>
              <details className="group bg-white rounded-2xl border border-gray-100 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer p-6 font-bold text-gray-900 flex justify-between items-center text-sm md:text-base">
                  Are there hidden escalation charges?
                  <span className="text-blue-600 font-normal transition duration-300 group-open:rotate-180">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 font-medium text-sm leading-relaxed border-t border-gray-50 pt-4">
                  Absolutely zero hidden charges. The only time your price changes is if you explicitly request a premium material upgrade or structural change mid-project.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      <LeadMagnet />
      <FinalCTASection />
    </div>
  );
}
