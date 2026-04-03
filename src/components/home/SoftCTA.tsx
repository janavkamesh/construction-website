import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface SoftCTAProps {
  heading: string;
  subtext: string;
  buttonText?: string;
}

export default function SoftCTA({ heading, subtext, buttonText = "Book Free Site Visit" }: SoftCTAProps) {
  return (
    <section className="py-8 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-600/20 border border-blue-500">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-white text-center sm:text-left w-full md:w-auto">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
              <Calendar className="w-8 h-8 text-blue-50" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1 tracking-tight font-heading">{heading}</h3>
              <p className="text-blue-100 text-sm font-medium leading-relaxed">{subtext}</p>
            </div>
          </div>
          
          <Link
            href="#book"
            className="shrink-0 w-full md:w-auto text-center bg-white text-blue-700 px-8 py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-gray-50 transition-colors shadow-lg active:scale-95"
          >
            {buttonText} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
