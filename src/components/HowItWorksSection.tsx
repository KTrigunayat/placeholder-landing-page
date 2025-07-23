const HowItWorksSection = () => {
  const LandscapePlaceholder = () => (
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
  );

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            HOW IT WORKS?
          </h2>
        </div>

        <div className="space-y-12">
          {/* First step with landscape placeholder */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <LandscapePlaceholder />
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 text-white">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Enter Event Details</h3>
                <p className="text-purple-100 text-lg leading-relaxed">
                  Start by providing your event requirements through our intuitive interface. Our AI analyzes your needs and creates a comprehensive planning framework.
                </p>
              </div>
            </div>
          </div>

          {/* Second step with text on left */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 text-white order-2 lg:order-1">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Let AI Create Your Plan</h3>
                <p className="text-purple-100 text-lg leading-relaxed">
                  Our advanced AI algorithms process your requirements and automatically generate a detailed event plan with timelines, vendor suggestions, and task assignments.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 order-1 lg:order-2">
              <LandscapePlaceholder />
            </div>
          </div>

          {/* Third step */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <LandscapePlaceholder />
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 text-white">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Track & Collaborate</h3>
                <p className="text-purple-100 text-lg leading-relaxed">
                  Monitor progress in real-time, collaborate with your team through integrated chat, and let our AI provide continuous optimization suggestions throughout the planning process.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth step with communication */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 text-white order-2 lg:order-1">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Communicate & Connect</h3>
                <p className="text-purple-100 text-lg leading-relaxed">
                  Keep everyone informed with automated updates, coordinate with vendors seamlessly, and ensure perfect execution with real-time communication tools.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 order-1 lg:order-2">
              <LandscapePlaceholder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;