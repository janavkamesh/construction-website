"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";
import PricingSection from "@/components/home/PricingSection";

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
    <div className="pt-12 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-4">Packages & Pricing</h1>
          <p className="text-lg text-gray-600 font-medium">Fully transparent pricing. Calculate your exact construction cost right now.</p>
        </div>

        {/* Interactive Calculator */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Instant Cost Calculator</h2>
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
              <span className="text-4xl md:text-5xl font-black tracking-tight leading-none">
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
    </div>
  );
}
