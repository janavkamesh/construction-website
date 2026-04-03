import { Compass, ShieldCheck } from "lucide-react";

export default function VaastuQualityBlock() {
  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Column 1: Vaastu */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-blue-900/5 flex flex-col items-start group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight font-heading">100% Vaastu Compliant Designs</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Every floor plan is vetted by expert Vaastu consultants before the first brick is laid. We ensure your home brings prosperity, light, and perfect directional alignment.
            </p>
          </div>

          {/* Column 2: Engineering */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-blue-900/5 flex flex-col items-start group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight font-heading">Triple-Checked Structural Integrity</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Tradition meets modern engineering. We conduct rigorous 3-stage quality checks on all TMT steel and cement grades. Your home isn't just Vaastu-compliant; it's built to last generations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
