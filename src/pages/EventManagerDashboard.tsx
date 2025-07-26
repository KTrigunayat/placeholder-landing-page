import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Send,
  Plus,
  CalendarDays
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { CreateEventModal } from '@/components/CreateEventModal';
import DashboardLayout from '@/components/DashboardLayout';

const EventManagerDashboard = () => {
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: 'Hello! I\'m here to help you plan your events. Ask me anything about vendor management, timeline planning, or budget optimization.' }
  ]);
  const [chatInput, setChatInput] = useState('');

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


  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, 
      { type: 'user', content: chatInput },
      { type: 'ai', content: 'That\'s a great suggestion! Based on your current events, I can help you optimize your timeline and suggest the best vendors for your requirements.' }
    ]);
    setChatInput('');
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome Back, Priya</h1>
          <Button 
            size="lg" 
            onClick={() => setCreateEventOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full"
          >
            CREATE A NEW EVENT
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* PLANVIA AI Widget */}
            <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">PLANVIA AI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ScrollArea className="h-48 w-full">
                  <div className="space-y-3 pr-4">
                    {chatMessages.map((message, index) => (
                      <div
                        key={index}
                        className={cn(
                          "p-3 rounded-lg max-w-[85%]",
                          message.type === 'ai' 
                            ? "bg-muted text-foreground" 
                            : "bg-primary text-primary-foreground ml-auto"
                        )}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex items-center space-x-2">
                  <Input 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask PLANVIA AI..." 
                    className="flex-1"
                    onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()}
                  />
                  <Button size="icon" variant="outline" onClick={sendChatMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events Widget */}
            <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
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
            <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">$45,230</div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
              </CardContent>
            </Card>

            {/* Consultation Widget */}
            <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">8</div>
                <p className="text-sm text-muted-foreground">Pending Calls</p>
              </CardContent>
            </Card>

            {/* Tasks Widget */}
            <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl col-span-2">
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
            <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl col-span-2">
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
      
      {/* Create Event Modal */}
      <CreateEventModal open={createEventOpen} onOpenChange={setCreateEventOpen} />
    </DashboardLayout>
  );
};

export default EventManagerDashboard;