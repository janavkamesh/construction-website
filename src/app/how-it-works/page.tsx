import ProcessSection from "@/components/home/ProcessSection";

export default function HowItWorks() {
  return (
    <div className="pt-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">How It Works</h1>
          <p className="text-lg text-gray-600 font-medium">A systematic, engineering-first approach to building your premium home in Chennai.</p>
        </div>
      </div>
      
      <ProcessSection />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-32 prose prose-lg prose-blue text-gray-600">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Initial Discussion & Site Analysis</h2>
        <p className="mb-8">
          Long before any cement is poured, our structural engineers conduct deep soil tests. Chennai's coastal positioning means soil composition varies dramatically from ECR to Anna Nagar. Our structural load calculations depend entirely on this scientific first step.
        </p>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Architectural Planning & 3D Immersion</h2>
        <p className="mb-8">
          Our architectural philosophy marries traditional Vasthu compliance with radical modern efficiency. You are placed inside a 3D visualization of your home, allowing you to walk the corridors and experience the lighting before approving the plans.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Building the Core</h2>
        <p className="mb-8">
          The structural phase is heavily monitored. Concrete curing times are strictly enforced, and you will receive geo-tagged updates directly to your phone. We don't hide our process; we broadcast it.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Finishes and Final Details</h2>
        <p>
          The interior detailing includes multiple rounds of quality cross-checks. Paint micron layers, tile alignment tolerances, and plumbing pressures are tested meticulously prior to the final key handover. 
        </p>
      </div>
    </div>
  );
}
