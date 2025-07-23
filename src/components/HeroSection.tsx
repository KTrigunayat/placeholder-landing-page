import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full py-20 px-6" style={{backgroundColor: '#f3d3da'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
                Event Organizing just got as easy as talking to your friend on WhatsApp with AI by PLANVIA
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience seamless event coordination with AI-powered WhatsApp conversations. 
                Just talk naturally and let our AI handle the complex planning for all your special event coordination.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full">
                Start Free
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Right content - Landscape placeholder */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
              <div className="aspect-[4/3] bg-gradient-to-b from-blue-300 via-blue-200 to-green-400 rounded-xl relative overflow-hidden">
                {/* Sky with clouds */}
                <div className="absolute top-4 left-8 w-16 h-8 bg-white rounded-full opacity-80"></div>
                <div className="absolute top-6 right-12 w-12 h-6 bg-white rounded-full opacity-70"></div>
                <div className="absolute top-8 left-1/2 w-20 h-10 bg-white rounded-full opacity-60"></div>
                
                {/* Rolling hills */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 400 200" className="w-full h-32">
                    <path d="M0,120 Q100,80 200,100 T400,90 L400,200 L0,200 Z" fill="#22c55e" />
                    <path d="M0,140 Q150,100 300,120 T400,110 L400,200 L0,200 Z" fill="#16a34a" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;