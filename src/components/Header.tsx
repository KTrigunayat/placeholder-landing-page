import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-8 py-4" style={{backgroundColor: '#f3d3da'}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">LANIVA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Features</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Solutions</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Contact Us</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium">
            Login
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium">
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;