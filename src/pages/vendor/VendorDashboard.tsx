import React, { useState } from 'react';
import VendorDashboardLayout from '@/components/VendorDashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Send, 
  Calendar, 
  DollarSign, 
  Star,
  ShoppingBag,
  TrendingUp,
  MessageSquare,
  Camera
} from 'lucide-react';

const VendorDashboard: React.FC = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'Hello! I\'m your Planiva AI assistant. How can I help you grow your vendor business today?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { type: 'user', message: chatInput },
        { type: 'ai', message: 'I understand you want to ' + chatInput + '. Let me help you with that.' }
      ]);
      setChatInput('');
    }
  };

  const upcomingEvents = [
    { name: 'Sarah & Mike Wedding', date: '2024-03-15', status: 'confirmed', payment: '$2,500' },
    { name: 'Corporate Gala', date: '2024-03-18', status: 'pending', payment: '$1,800' },
    { name: 'Birthday Party', date: '2024-03-22', status: 'confirmed', payment: '$950' },
  ];

  return (
    <VendorDashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex Photography!</h1>
          <p className="text-muted-foreground mt-2">Manage your bookings and grow your business</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* PLANIVA AI */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  PLANIVA AI - VENDOR ASSISTANT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 rounded-lg p-4 mb-4 h-40 overflow-y-auto">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                      <span className={`inline-block p-2 rounded-lg text-sm ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-foreground'
                      }`}>
                        {msg.message}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about bookings, pricing, or business tips..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendChatMessage} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h3 className="font-semibold text-foreground">{event.name}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={event.status === 'confirmed' ? 'default' : 'secondary'}>
                          {event.status}
                        </Badge>
                        <p className="text-sm font-medium text-foreground mt-1">{event.payment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Monthly Earnings */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">MONTHLY EARNINGS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-green-500" />
                  <span className="text-2xl font-bold text-foreground">$8,450</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">+12% from last month</span>
                </div>
              </CardContent>
            </Card>

            {/* Active Bookings */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">ACTIVE BOOKINGS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-blue-500" />
                  <span className="text-2xl font-bold text-foreground">12</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">3 pending confirmation</p>
              </CardContent>
            </Card>

            {/* Customer Rating */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">CUSTOMER RATING</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  <span className="text-2xl font-bold text-foreground">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Based on 47 reviews</p>
              </CardContent>
            </Card>

            {/* Messages */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">NEW MESSAGES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-purple-500" />
                  <span className="text-2xl font-bold text-foreground">5</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">2 booking inquiries</p>
              </CardContent>
            </Card>

            {/* Portfolio Views */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">PORTFOLIO VIEWS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Camera className="h-6 w-6 text-indigo-500" />
                  <span className="text-2xl font-bold text-foreground">248</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">This week</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default VendorDashboard;