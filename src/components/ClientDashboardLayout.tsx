import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  BarChart3, 
  MessageSquare, 
  CheckCircle, 
  Camera,
  Settings,
  LogOut,
  FileText,
  Users
} from 'lucide-react';

interface ClientDashboardLayoutProps {
  children: React.ReactNode;
}

const ClientDashboardLayout: React.FC<ClientDashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/client' },
    { name: 'Event Progress', icon: BarChart3, path: '/dashboard/client/progress' },
    { name: 'Timeline', icon: Calendar, path: '/dashboard/client/timeline' },
    { name: 'Decisions', icon: CheckCircle, path: '/dashboard/client/decisions' },
    { name: 'Communication', icon: MessageSquare, path: '/dashboard/client/communication' },
    { name: 'Gallery', icon: Camera, path: '/dashboard/client/gallery' },
    { name: 'Documents', icon: FileText, path: '/dashboard/client/documents' },
    { name: 'Team', icon: Users, path: '/dashboard/client/team' },
    { name: 'Settings', icon: Settings, path: '/dashboard/client/settings' },
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
          <h1 className="text-2xl font-bold text-primary">Planiva Client</h1>
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

export default ClientDashboardLayout;