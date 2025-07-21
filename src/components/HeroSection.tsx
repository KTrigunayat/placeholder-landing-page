import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Best Organizing tool yet as easy as </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">talking to your friend on WhatsApp with AI Advice</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your productivity with our revolutionary AI-powered organizing tool. 
                Get personalized advice and streamline your workflow like never before.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary text-white border-0 hover:opacity-90 transition-opacity px-8 py-4 text-lg">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold text-foreground">10,000+</span> teams
              </div>
            </div>
          </div>
          
          {/* Right content - Dashboard preview */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-border/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gradient-primary/20 rounded w-32 mx-auto"></div>
                      <div className="h-2 bg-gradient-primary/10 rounded w-24 mx-auto"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">Dashboard Preview</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-15 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;