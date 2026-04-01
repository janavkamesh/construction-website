import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function SoftCTA() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-600/20">
          <div className="flex items-center gap-5 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Calendar className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">Ready to start your project?</h3>
              <p className="text-blue-100 text-sm font-medium">Schedule a free site visit with our civil engineers today.</p>
            </div>
          </div>
          
          <Link
            href="#book"
            className="shrink-0 w-full sm:w-auto text-center bg-white text-blue-700 px-8 py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-blue-50 transition-colors shadow-lg shadow-black/10 active:scale-95"
          >
            Book Free Site Visit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
