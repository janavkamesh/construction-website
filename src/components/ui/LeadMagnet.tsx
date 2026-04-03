import { Lock, FileText, Download } from "lucide-react";

export default function LeadMagnet() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          
          {/* Text/Content side */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 border border-slate-200 shadow-sm">
              <FileText className="w-4 h-4 text-blue-600" /> Free PDF Guide
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Not ready to build just yet?</h2>
            <p className="text-gray-600 font-medium leading-relaxed mb-0">
              Download our free <strong className="text-gray-900">2026 Chennai Home Builder's Cost Guide</strong>. Learn exactly how to budget for materials, approvals, and labor without getting cheated.
            </p>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-[400px] shrink-0 bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-slate-50 border border-slate-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="WhatsApp Number" 
                  className="w-full bg-slate-50 border border-slate-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium placeholder:text-gray-400"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold rounded-xl px-4 py-4 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] transition-all flex justify-center items-center gap-2"
              >
                <Download className="w-5 h-5" /> Download PDF Now
              </button>
              <div className="flex justify-center items-center gap-1.5 pt-2">
                <Lock className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs text-gray-400 font-medium">100% Secure. We never spam.</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
