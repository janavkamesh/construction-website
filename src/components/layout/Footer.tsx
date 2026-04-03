import Link from "next/link";
import { MoveRight, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-10 pb-10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          
          {/* Brand & Trust Column */}
          <div className="space-y-6 lg:col-span-2 xl:pr-16">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-black tracking-tight text-white mb-2 block font-heading">
                Vaastu<span className="text-blue-500">Corp</span>
              </span>
              <p className="text-sm text-gray-400 font-medium">Builders you can trust</p>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Chennai’s most transparent residential and commercial construction company. Bringing engineering precision and fixed-price reliability to the local real estate market.
            </p>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:bg-gray-800 transition-colors inline-block">
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
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight font-heading">Company</h3>
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
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight font-heading">Get in Touch</h3>
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
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 pb-8 md:pb-0">
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
