import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-6 bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="text-2xl font-bold text-foreground">
            PLANVIA
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Features</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">How it works?</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Pricing</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
            Login
          </Button>
          <Button className="bg-gradient-primary text-white border-0 hover:opacity-90 transition-opacity px-6 py-2 rounded-lg font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;