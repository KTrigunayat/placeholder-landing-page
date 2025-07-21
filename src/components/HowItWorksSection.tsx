const HowItWorksSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">HOW IT WORKS?</span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* First row - dashboard screenshots */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gradient-primary/20 rounded w-32 mx-auto"></div>
                      <div className="h-2 bg-gradient-primary/10 rounded w-24 mx-auto"></div>
                      <div className="h-2 bg-gradient-primary/10 rounded w-28 mx-auto"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">Step {item} Interface</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Purple gradient section */}
          <div className="bg-gradient-purple rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Seamless Integration</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Connect your favorite tools and platforms in seconds. Our AI learns your preferences 
                  and adapts to your workflow automatically.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="aspect-[4/3] bg-white/5 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto"></div>
                    <div className="text-sm text-white/60">Integration Preview</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second row - more dashboard screenshots */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border/20">
              <div className="aspect-[3/2] bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-lg opacity-80"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-primary/20 rounded w-40 mx-auto"></div>
                    <div className="h-3 bg-gradient-primary/10 rounded w-32 mx-auto"></div>
                    <div className="h-3 bg-gradient-primary/10 rounded w-36 mx-auto"></div>
                  </div>
                  <div className="text-sm text-muted-foreground">Analytics Dashboard</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border/20">
              <div className="aspect-[3/2] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-secondary rounded-2xl mx-auto flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-lg opacity-80"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-secondary/20 rounded w-36 mx-auto"></div>
                    <div className="h-3 bg-gradient-secondary/10 rounded w-28 mx-auto"></div>
                    <div className="h-3 bg-gradient-secondary/10 rounded w-32 mx-auto"></div>
                  </div>
                  <div className="text-sm text-muted-foreground">Task Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;