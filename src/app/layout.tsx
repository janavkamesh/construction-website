import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VaastuCorp Builders - Your Home, Exactly As Planned in Chennai",
  description: "Fixed price. On time. No surprises. 150+ homes built. Book a free site visit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth antialiased h-full`}>
      <body className={`${inter.variable} ${montserrat.variable} font-sans min-h-full flex flex-col bg-white text-gray-900 selection:bg-blue-200`}>
        <Navbar />
        <main className="flex-1 pt-[72px] lg:pt-[88px] selection:bg-blue-100 selection:text-blue-900 flex flex-col">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <MobileStickyBar />
        <ExitIntentPopup />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
