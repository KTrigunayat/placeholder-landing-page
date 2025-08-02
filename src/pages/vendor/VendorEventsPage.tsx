import React, { useState } from 'react';
import VendorDashboardLayout from '@/components/VendorDashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Send, 
  Calendar, 
  MapPin,
  Clock,
  DollarSign,
  Users,
  Eye,
  Search,
  Filter
} from 'lucide-react';

const VendorEventsPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'I can help you manage your event bookings and track upcoming gigs!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { type: 'user', message: chatInput },
        { type: 'ai', message: 'I can help you with event management. Let me assist you with that.' }
      ]);
      setChatInput('');
    }
  };

  const events = [
    { 
      id: 1, 
      name: 'Sarah & Mike Wedding', 
      date: '2024-03-15', 
      time: '14:00', 
      location: 'Grand Hotel Ballroom', 
      status: 'confirmed', 
      payment: '$2,500',
      guests: 150,
      type: 'Wedding'
    },
    { 
      id: 2, 
      name: 'Tech Corp Annual Gala', 
      date: '2024-03-18', 
      time: '18:00', 
      location: 'Convention Center', 
      status: 'pending', 
      payment: '$1,800',
      guests: 200,
      type: 'Corporate'
    },
    { 
      id: 3, 
      name: 'Emma\'s 25th Birthday', 
      date: '2024-03-22', 
      time: '19:00', 
      location: 'Private Residence', 
      status: 'confirmed', 
      payment: '$950',
      guests: 50,
      type: 'Birthday'
    },
    { 
      id: 4, 
      name: 'Johnson Anniversary', 
      date: '2024-03-25', 
      time: '16:00', 
      location: 'Garden Venue', 
      status: 'inquiry', 
      payment: '$1,200',
      guests: 75,
      type: 'Anniversary'
    },
  ];

  const stats = [
    { label: 'Total Events', value: '15', icon: Calendar, color: 'text-blue-500' },
    { label: 'Confirmed', value: '8', icon: Calendar, color: 'text-green-500' },
    { label: 'Pending', value: '4', icon: Clock, color: 'text-yellow-500' },
    { label: 'Inquiries', value: '3', icon: Users, color: 'text-purple-500' },
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <VendorDashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Event Management</h1>
          <p className="text-muted-foreground mt-2">Manage your bookings and upcoming events</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* PLANIVA AI */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  PLANIVA AI - EVENT ASSISTANT
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
                    placeholder="Ask about event scheduling, preparation, or requirements..."
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

            {/* Event Management */}
            <Card>
              <CardHeader>
                <CardTitle>Event Bookings</CardTitle>
                <div className="flex gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="inquiry">Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEvents.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{event.name}</p>
                            <p className="text-sm text-muted-foreground">{event.type} • {event.guests} guests</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <div>
                              <p>{event.date}</p>
                              <p className="text-sm text-muted-foreground">{event.time}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            event.status === 'confirmed' ? 'default' : 
                            event.status === 'pending' ? 'secondary' : 
                            'outline'
                          }>
                            {event.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">{event.payment}</TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>{event.name}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium">Date & Time</label>
                                    <p>{event.date} at {event.time}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Event Type</label>
                                    <p>{event.type}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Location</label>
                                    <p>{event.location}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Guest Count</label>
                                    <p>{event.guests} guests</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Status</label>
                                    <Badge variant={event.status === 'confirmed' ? 'default' : 'secondary'}>
                                      {event.status}
                                    </Badge>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Payment</label>
                                    <p className="font-medium text-green-600">{event.payment}</p>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label.toUpperCase()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default VendorEventsPage;