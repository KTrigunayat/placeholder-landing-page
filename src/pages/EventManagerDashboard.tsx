import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
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
  Send,
  Plus,
  CalendarDays
} from 'lucide-react';
import { cn } from '@/lib/utils';

const EventManagerDashboard = () => {
  const sidebarLinks = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Events', icon: Calendar, active: false },
    { name: 'Vendors', icon: Users, active: false },
    { name: 'Tasks', icon: CheckSquare, active: false },
    { name: 'CRM', icon: UserCheck, active: false },
    { name: 'Finances', icon: DollarSign, active: false },
    { name: 'Team', icon: Team, active: false },
    { name: 'Inventory', icon: Package, active: false },
    { name: 'Consultation', icon: MessageCircle, active: false },
  ];

  const upcomingEvents = [
    { name: 'Johnson Wedding', date: 'Dec 15, 2024', progress: 75 },
    { name: 'Tech Conference', date: 'Jan 8, 2025', progress: 45 },
    { name: 'Birthday Gala', date: 'Jan 22, 2025', progress: 30 },
  ];

  const urgentTasks = [
    'Finalize floral arrangements',
    'Confirm menu selection',
    'Send invitations to vendors'
  ];

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
                <a
                  href="#"
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    link.active
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  )}
                >
                  <link.icon className="mr-3 h-5 w-5" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
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
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome Back, Priya</h1>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            CREATE A NEW EVENT
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* PLANVIA AI Widget */}
            <Card className="shadow-lg border-0 bg-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold">PLANVIA AI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Hello! I'm here to help you plan your events. Ask me anything about vendor management, 
                    timeline planning, or budget optimization.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Input 
                    placeholder="Ask PLANVIA AI..." 
                    className="flex-1"
                  />
                  <Button size="icon" variant="outline">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events Widget */}
            <Card className="shadow-lg border-0 bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">Your Upcoming Events</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Event
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CalendarDays className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-semibold">{event.name}</h3>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-24">
                          <Progress value={event.progress} className="h-2" />
                        </div>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Smaller Widgets */}
          <div className="grid grid-cols-2 gap-4">
            {/* Finance Widget */}
            <Card className="shadow-lg border-0 bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">$45,230</div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
              </CardContent>
            </Card>

            {/* Consultation Widget */}
            <Card className="shadow-lg border-0 bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">8</div>
                <p className="text-sm text-muted-foreground">Pending Calls</p>
              </CardContent>
            </Card>

            {/* Tasks Widget */}
            <Card className="shadow-lg border-0 bg-card col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Urgent Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {urgentTasks.map((task, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 text-primary border-2 border-muted-foreground rounded focus:ring-primary" 
                      />
                      <span className="text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vendor Widget */}
            <Card className="shadow-lg border-0 bg-card col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Vendor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">24</div>
                <p className="text-sm text-muted-foreground">Active Vendors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagerDashboard;