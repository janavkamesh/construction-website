import { MessageCircle, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] p-2 px-3 pb-safe flex gap-3">
      <Link
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center bg-[#25D366] text-white py-2.5 rounded-xl active:bg-[#20BE5A] transition-colors"
      >
        <MessageCircle className="w-6 h-6 mb-1" strokeWidth={2.5} />
        <span className="text-[11px] font-bold leading-none">WhatsApp us</span>
      </Link>
      <Link
        href="#book"
        className="flex-1 flex flex-col items-center justify-center bg-blue-600 text-white py-2.5 rounded-xl active:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
      >
        <CalendarDays className="w-6 h-6 mb-1" strokeWidth={2.5} />
        <span className="text-[11px] font-bold leading-none">Book free visit</span>
      </Link>
    </div>
  );
}
