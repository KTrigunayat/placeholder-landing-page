const BenefitsSection = () => {
  const integrationLogos = [
    { name: "WhatsApp", color: "bg-green-500" },
    { name: "Razorpay", color: "bg-blue-600" },
    { name: "Skype", color: "bg-blue-500" },
    { name: "Google Workspace", color: "bg-red-500" },
    { name: "PayU", color: "bg-green-600" },
    { name: "MakeMyTrip", color: "bg-orange-500" },
    { name: "Simpl", color: "bg-teal-500" }
  ];

  const DashboardPlaceholder = ({ title }: { title: string }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 h-full">
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-100 rounded w-full"></div>
          <div className="h-3 bg-gray-100 rounded w-5/6"></div>
          <div className="h-3 bg-gray-100 rounded w-4/5"></div>
        </div>
        <div className="flex space-x-2 pt-4">
          <div className="w-8 h-8 bg-purple-200 rounded"></div>
          <div className="w-8 h-8 bg-blue-200 rounded"></div>
          <div className="w-8 h-8 bg-green-200 rounded"></div>
        </div>
        <div className="text-xs text-gray-500 text-center pt-4">{title}</div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-20 px-6" style={{backgroundColor: '#f3d3da'}}>
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Benefits of Using PLANVIA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Boost your team's efficiency and collaboration effectiveness with our intuitive and powerful project management features for success.
            </p>
          </div>

          {/* Integration logos and dashboard */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Integration logos */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                {integrationLogos.map((logo, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                    <div className={`w-8 h-8 ${logo.color} rounded-lg flex items-center justify-center`}>
                      <div className="w-4 h-4 bg-white rounded opacity-80"></div>
                    </div>
                    <span className="font-medium text-gray-700 text-sm">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Dashboard preview */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Powerful Dashboard</h3>
                  <p className="text-purple-100">Monitor all your events from one centralized location</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="aspect-[4/3] bg-white/5 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto"></div>
                      <div className="text-sm text-white/60">Analytics Overview</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom dashboards */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Client Dashboard */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 text-white">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Client Dashboard</h3>
                  <p className="text-purple-100 text-sm">
                    Track your event progress and communicate with your event manager in real-time
                  </p>
                </div>
              </div>
              <DashboardPlaceholder title="CLIENT DASHBOARD" />
            </div>

            {/* Event Dashboard */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 text-white">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Event Dashboard</h3>
                  <p className="text-purple-100 text-sm">
                    Comprehensive event management with AI-powered insights and automation
                  </p>
                </div>
              </div>
              <DashboardPlaceholder title="EVENT DASHBOARD" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;