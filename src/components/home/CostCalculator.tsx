"use client";

import { useState, useEffect } from "react";
import { Calculator, MessageCircle, Info } from "lucide-react";
import Link from "next/link";

export default function CostCalculator() {
  const [plotSize, setPlotSize] = useState<number>(1200);
  const [buildArea, setBuildArea] = useState<number>(1800); // Usually built up area is larger due to multiple floors (G+1)

  const rates = {
    standard: 1799,
    premium: 2199,
    luxury: 2799,
  };

  // Typical G+1 construction assumes 1.5x of plot size roughly for built-up area
  useEffect(() => {
    setBuildArea(Math.round(plotSize * 1.5));
  }, [plotSize]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-12 bg-blue-50 relative overflow-hidden" id="calculator">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 shadow-inner">
            <Calculator className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">
            Instant Construction Cost Calculator
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl mx-auto">
            Get an immediate, no-obligation estimate for your dream home in Chennai. No math required.
          </p>
        </div>

        <div className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-2xl shadow-blue-900/10 border border-blue-100 relative">
          
          <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
              <label className="text-sm font-bold text-gray-900">Your Plot Size (Sq.Ft)</label>
              <div className="text-3xl font-black text-blue-600">{plotSize} sq.ft</div>
            </div>
            
            <input
              type="range"
              min="600"
              max="4000"
              step="100"
              value={plotSize}
              onChange={(e) => setPlotSize(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all"
            />
            
            <div className="flex justify-between text-xs text-gray-500 font-medium mt-3">
              <span>600 sq.ft</span>
              <span>2000 sq.ft</span>
              <span>4000+ sq.ft</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Standard Tier */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center transition-all hover:shadow-md">
              <span className="text-sm font-bold text-gray-600 block mb-2">Standard (₹1,799/sq.ft)</span>
              <div className="text-2xl font-black text-gray-900">{formatPrice(buildArea * rates.standard)}</div>
            </div>
            
            {/* Premium Tier */}
            <div className="bg-blue-600 border border-blue-600 rounded-2xl p-6 text-center shadow-lg shadow-blue-600/20 transform md:-translate-y-2">
              <span className="text-sm font-bold text-blue-100 block mb-2 flex items-center justify-center gap-1">
                Premium (₹2,199/sq.ft) <span className="bg-yellow-400 text-yellow-900 text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider">Most Chosen</span>
              </span>
              <div className="text-3xl font-black text-white">{formatPrice(buildArea * rates.premium)}</div>
            </div>
            
            {/* Luxury Tier */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center transition-all hover:shadow-md">
              <span className="text-sm font-bold text-gray-600 block mb-2">Luxury (₹2,799/sq.ft)</span>
              <div className="text-2xl font-black text-gray-900">{formatPrice(buildArea * rates.luxury)}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-6 border-t border-gray-100">
            <div className="flex items-start gap-3">
              <Info className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                Estimate assumes a standard G+1 structure total built-up area of <strong className="text-gray-900">{buildArea} sq.ft</strong>. Final cost details will be confirmed upon floor plan approval.
              </p>
            </div>
            <Link
              href={`https://wa.me/919876543210?text=Hi!%20I%20used%20your%20calculator.%20My%20plot%20size%20is%20${plotSize}%20sq.ft.%20Can%20I%20get%20a%20detailed%20breakdown%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-[#20BE5A] hover:shadow-xl hover:shadow-[#25D366]/20 transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
              Get Breakdown on WhatsApp
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
