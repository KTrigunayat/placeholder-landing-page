const Footer = () => {
  return (
    <footer id="contact" className="w-full py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-2xl font-bold">LANIVA</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Event organizing made as easy as talking to your friend on WhatsApp with AI by PLANVIA.
            </p>
          </div>

          {/* Product links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <div className="space-y-2">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors block">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors block">Pricing</a>
              <a href="#solutions" className="text-gray-400 hover:text-white transition-colors block">Portals</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">AI Assistant</a>
            </div>
          </div>

          {/* Company links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors block">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Careers</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Blog</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors block">Contact</a>
            </div>
          </div>

          {/* Support links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Help Center</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Documentation</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Community</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">WhatsApp Support</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 PLANVIA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;