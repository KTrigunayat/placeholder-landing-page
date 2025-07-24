import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const { userType } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getPageConfig = () => {
    switch (userType) {
      case 'event-manager':
        return {
          title: 'Event Manager Portal',
          subtitle: 'Access your event management dashboard',
          icon: '📋',
          bgColor: 'from-blue-500 to-blue-700'
        };
      case 'vendor':
        return {
          title: 'Vendor Portal',
          subtitle: 'Manage your services and bookings',
          icon: '🛠️',
          bgColor: 'from-green-500 to-green-700'
        };
      case 'client':
        return {
          title: 'Client Portal',
          subtitle: 'Track your event progress',
          icon: '👤',
          bgColor: 'from-purple-500 to-purple-700'
        };
      default:
        return {
          title: 'Login Portal',
          subtitle: 'Access your account',
          icon: '🔐',
          bgColor: 'from-gray-500 to-gray-700'
        };
    }
  };

  const config = getPageConfig();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password, userType });
    
    // Redirect to appropriate dashboard based on user type
    if (userType === 'event-manager') {
      window.location.href = '/dashboard/event-manager';
    }
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f3d3da'}}>
      {/* Header */}
      <header className="w-full px-8 py-4" style={{backgroundColor: '#f3d3da'}}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">LANIVA</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header Section */}
            <div className={`bg-gradient-to-r ${config.bgColor} px-8 py-12 text-center text-white`}>
              <div className="text-6xl mb-4">{config.icon}</div>
              <h1 className="text-2xl font-bold mb-2">{config.title}</h1>
              <p className="text-white/80">{config.subtitle}</p>
            </div>

            {/* Form Section */}
            <div className="px-8 py-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 text-gray-600">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                    Forgot password?
                  </a>
                </div>

                <Button 
                  type="submit"
                  className={`w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${config.bgColor} hover:opacity-90 text-white`}
                >
                  Sign In
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  Don't have an account?{' '}
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold">
                    Sign up here
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Need help? <a href="#contact" className="text-purple-600 hover:text-purple-700 font-semibold">Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;