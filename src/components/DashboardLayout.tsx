import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Calendar, 
  Users, 
  CheckSquare, 
  UserCheck, 
  DollarSign, 
  Users2 as Team, 
  Package, 
  MessageCircle,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarLinks = [
    { name: 'Home', icon: Home, path: '/dashboard/event-manager' },
    { name: 'Events', icon: Calendar, path: '/dashboard/event-manager/events' },
    { name: 'Vendors', icon: Users, path: '/dashboard/event-manager/vendors' },
    { name: 'Tasks', icon: CheckSquare, path: '/dashboard/event-manager/tasks' },
    { name: 'CRM', icon: UserCheck, path: '/dashboard/event-manager/crm' },
    { name: 'Finances', icon: DollarSign, path: '/dashboard/event-manager/finances' },
    { name: 'Team', icon: Team, path: '/dashboard/event-manager/team' },
    { name: 'Inventory', icon: Package, path: '/dashboard/event-manager/inventory' },
    { name: 'Consultation', icon: MessageCircle, path: '/dashboard/event-manager/consultation' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 flex flex-col">
        {/* Top Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="text-white text-xl font-bold">PLANVIA</div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {sidebarLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavigate(link.path)}
                  className={cn(
                    "w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  )}
                >
                  <link.icon className="mr-3 h-5 w-5" />
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Logout Button */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Log Out
            </Button>
          </div>
        </nav>

        {/* Bottom Logo and Settings */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <Settings className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#f3d3da]">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;