const WhyChooseSection = () => {
  const features = [
    {
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations tailored to your workflow"
    },
    {
      title: "WhatsApp Integration", 
      description: "Organize your tasks through familiar messaging interface"
    },
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and focus on what matters most"
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">PLANVIA?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of simplicity and power with our innovative approach to productivity.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-6">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center border border-border/20">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">Feature Preview</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Purple gradient cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[2/1] bg-gradient-purple rounded-2xl p-8 flex items-center justify-center text-white">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Boost Productivity by 300%</h3>
                <p className="text-white/80">Transform your workflow with AI-driven insights</p>
              </div>
            </div>
            <div className="aspect-[2/1] bg-gradient-purple rounded-2xl p-8 flex items-center justify-center text-white">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Save 10+ Hours Weekly</h3>
                <p className="text-white/80">Automate routine tasks and focus on growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;