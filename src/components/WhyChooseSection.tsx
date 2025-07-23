const WhyChooseSection = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI Assistance",
      description: "Get intelligent recommendations and automate routine planning tasks with advanced AI technology."
    },
    {
      icon: "✅",
      title: "Task Management",
      description: "Organize and track your event tasks efficiently with our comprehensive management system."
    },
    {
      icon: "👥",
      title: "Chat Support",
      description: "Communicate seamlessly with your team and vendors through integrated chat features."
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Monitor your event progress with detailed analytics and performance insights."
    },
    {
      icon: "🔧",
      title: "Vendor Management",
      description: "Coordinate with vendors efficiently and manage all your service providers in one place."
    },
    {
      icon: "📍",
      title: "Event Tracking",
      description: "Track every aspect of your events from planning to execution with comprehensive monitoring tools."
    }
  ];

  return (
    <section id="features" className="w-full py-20 px-6" style={{backgroundColor: '#f3d3da'}}>
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Why Choose PLANVIA?
            </h2>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 text-white space-y-4">
                <div className="text-4xl">{feature.icon}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;