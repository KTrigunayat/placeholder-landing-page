import { Button } from "@/components/ui/button";

const TransformSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-light">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Transform Your Business <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                with Scalable AI Automation
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join thousands of businesses that have revolutionized their operations with our 
              intelligent automation platform. Experience unprecedented growth and efficiency.
            </p>
          </div>

          {/* Purple gradient grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-gradient-purple rounded-2xl p-6 flex items-center justify-center text-white">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto flex items-center justify-center backdrop-blur-sm">
                    <div className="w-8 h-8 bg-white/40 rounded-lg"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Feature {item}</h3>
                    <p className="text-white/80 text-sm">Advanced automation capabilities for your business</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-border/20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join the revolution in business automation. Start your free trial today 
                  and experience the power of AI-driven productivity.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary text-white border-0 hover:opacity-90 transition-opacity px-8 py-4 text-lg">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
                  Schedule Demo
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                No credit card required • 14-day free trial • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;