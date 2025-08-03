import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  ShoppingBag, 
  User, 
  DollarSign, 
  Star, 
  MessageSquare, 
  Settings,
  LogOut,
  Camera,
  CheckSquare
} from 'lucide-react';

interface VendorDashboardLayoutProps {
  children: React.ReactNode;
}

const VendorDashboardLayout: React.FC<VendorDashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/vendor' },
    { name: 'Events', icon: Calendar, path: '/dashboard/vendor/events' },
    { name: 'Tasks', icon: CheckSquare, path: '/dashboard/vendor/tasks' },
    { name: 'Bookings', icon: ShoppingBag, path: '/dashboard/vendor/bookings' },
    { name: 'Portfolio', icon: Camera, path: '/dashboard/vendor/portfolio' },
    { name: 'Profile', icon: User, path: '/dashboard/vendor/profile' },
    { name: 'Payments', icon: DollarSign, path: '/dashboard/vendor/payments' },
    { name: 'Reviews', icon: Star, path: '/dashboard/vendor/reviews' },
    { name: 'Messages', icon: MessageSquare, path: '/dashboard/vendor/messages' },
    { name: 'Settings', icon: Settings, path: '/dashboard/vendor/settings' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <h1 className="text-2xl font-bold text-primary">Planiva Vendors</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            
            return (
              <button
                key={link.name}
                onClick={() => handleNavigate(link.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{link.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default VendorDashboardLayout;