import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            PLANVIA
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Home</a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Features</a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-foreground/70 hover:text-foreground">
            Sign In
          </Button>
          <Button className="bg-gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;