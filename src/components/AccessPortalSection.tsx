import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AccessPortalSection = () => {
  return (
    <section id="solutions" className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Access Your Portal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your role to help you access the appropriate portal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Manager Portal */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 space-y-6">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Event Manager Portal</h3>
                <p className="text-gray-600 text-sm">
                  Connect with AI to organize events, manage vendors, and oversee every detail with intelligent assistance.
                </p>
              </div>
              <Link to="/login/event-manager">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3">
                  Access Portal
                </Button>
              </Link>
            </div>

            {/* Vendor Portal */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 space-y-6">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-2xl mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Vendor Portal</h3>
                <p className="text-gray-600 text-sm">
                  Join our network, work efficiently with event managers, and streamline your service delivery.
                </p>
              </div>
              <Link to="/login/vendor">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-3">
                  Access Portal
                </Button>
              </Link>
            </div>

            {/* Client Portal */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 space-y-6">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Client Portal</h3>
                <p className="text-gray-600 text-sm">
                  View your event progress, communicate with event managers, and communicate with vendors about your special event.
                </p>
              </div>
              <Link to="/login/client">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3">
                  Access Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessPortalSection;