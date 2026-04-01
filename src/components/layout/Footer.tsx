import Link from "next/link";
import { MoveRight, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Trust Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-black tracking-tight text-white mb-2 block">
                Vaastu<span className="text-blue-500">Corp</span>
              </span>
              <p className="text-sm text-gray-400 font-medium">Builders you can trust</p>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Building homes in Chennai with absolute transparency, fixed-price contracts, and zero hidden costs. Your dream home, exactly as planned.
            </p>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">RERA Registered</p>
                  <p className="text-xs text-gray-400">TN/29/Building/123/2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight">Company</h3>
            <ul className="space-y-4">
              {[
                { name: "Projects", href: "/projects" },
                { name: "Packages & Pricing", href: "/packages" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-blue-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight">Get in Touch</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  123, Mount Road, Teynampet,<br />
                  Chennai, Tamil Nadu 600018
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:hello@vaastucorp.com" className="text-sm hover:text-white transition-colors">
                  hello@vaastucorp.com
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-blue-600 rounded-2xl p-6 shadow-xl shadow-blue-900/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            <div className="relative z-10">
              <h3 className="text-white font-bold text-lg mb-2">Ready to build?</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Book a free site visit today. We'll give you a reliable estimate on the spot.
              </p>
              <Link 
                href="#book"
                className="bg-white text-blue-600 font-bold px-5 py-2.5 rounded-xl text-sm inline-flex items-center justify-between w-full hover:bg-gray-50 transition-colors active:scale-95"
              >
                <span>Book Free Visit</span>
                <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 pb-16 md:pb-0">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} VaastuCorp Builders. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
