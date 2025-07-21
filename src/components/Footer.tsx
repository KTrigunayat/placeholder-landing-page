const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PLANVIA
            </div>
            <p className="text-muted-foreground">
              Revolutionizing productivity with AI-powered organization tools.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Careers</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; 2024 PLANVIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;