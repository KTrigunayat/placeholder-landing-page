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
  ShoppingBag, 
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Search,
  Calendar
} from 'lucide-react';

const VendorBookingsPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'I can help you manage your bookings, track payments, and handle customer requests!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { type: 'user', message: chatInput },
        { type: 'ai', message: 'I understand your booking concern. Let me help you resolve that.' }
      ]);
      setChatInput('');
    }
  };

  const bookings = [
    { 
      id: 'BK001', 
      clientName: 'Sarah Johnson', 
      eventName: 'Wedding Photography', 
      date: '2024-03-15', 
      amount: '$2,500',
      status: 'confirmed',
      paymentStatus: 'paid',
      services: ['Wedding Photography', '8-hour coverage', 'Edited photos'],
      requestDate: '2024-02-10'
    },
    { 
      id: 'BK002', 
      clientName: 'Tech Corp', 
      eventName: 'Corporate Event', 
      date: '2024-03-18', 
      amount: '$1,800',
      status: 'pending',
      paymentStatus: 'partial',
      services: ['Event Photography', '6-hour coverage', 'Social media package'],
      requestDate: '2024-02-15'
    },
    { 
      id: 'BK003', 
      clientName: 'Emma Williams', 
      eventName: 'Birthday Party', 
      date: '2024-03-22', 
      amount: '$950',
      status: 'confirmed',
      paymentStatus: 'pending',
      services: ['Party Photography', '4-hour coverage'],
      requestDate: '2024-02-20'
    },
    { 
      id: 'BK004', 
      clientName: 'David Chen', 
      eventName: 'Family Portrait', 
      date: '2024-03-25', 
      amount: '$450',
      status: 'inquiry',
      paymentStatus: 'none',
      services: ['Portrait Session', '2-hour session', 'Digital gallery'],
      requestDate: '2024-02-25'
    },
  ];

  const stats = [
    { label: 'Total Bookings', value: '28', icon: ShoppingBag, color: 'text-blue-500' },
    { label: 'Confirmed', value: '18', icon: CheckCircle, color: 'text-green-500' },
    { label: 'Pending', value: '7', icon: Clock, color: 'text-yellow-500' },
    { label: 'Revenue', value: '$12,450', icon: DollarSign, color: 'text-purple-500' },
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <VendorDashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Booking Management</h1>
          <p className="text-muted-foreground mt-2">Track and manage your service bookings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* PLANIVA AI */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  PLANIVA AI - BOOKING ASSISTANT
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
                    placeholder="Ask about booking management, pricing, or payment tracking..."
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

            {/* Booking Management */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <div className="flex gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search bookings..."
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
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>{booking.clientName}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{booking.eventName}</p>
                            <p className="text-sm text-muted-foreground">
                              Requested: {booking.requestDate}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {booking.date}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{booking.amount}</TableCell>
                        <TableCell>
                          <Badge variant={
                            booking.status === 'confirmed' ? 'default' : 
                            booking.status === 'pending' ? 'secondary' : 
                            'outline'
                          }>
                            {booking.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            booking.paymentStatus === 'paid' ? 'default' : 
                            booking.paymentStatus === 'partial' ? 'secondary' : 
                            'outline'
                          }>
                            {booking.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>Booking Details - {booking.id}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <label className="text-sm font-medium">Client</label>
                                  <p>{booking.clientName}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Event</label>
                                  <p>{booking.eventName}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium">Event Date</label>
                                    <p>{booking.date}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Amount</label>
                                    <p className="font-medium text-green-600">{booking.amount}</p>
                                  </div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Services Included</label>
                                  <ul className="list-disc list-inside text-sm mt-1">
                                    {booking.services.map((service, index) => (
                                      <li key={index}>{service}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium">Status</label>
                                    <Badge variant={booking.status === 'confirmed' ? 'default' : 'secondary'}>
                                      {booking.status}
                                    </Badge>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Payment</label>
                                    <Badge variant={booking.paymentStatus === 'paid' ? 'default' : 'outline'}>
                                      {booking.paymentStatus}
                                    </Badge>
                                  </div>
                                </div>
                                {booking.status === 'inquiry' && (
                                  <div className="flex gap-2 pt-4">
                                    <Button size="sm" className="flex-1">
                                      <CheckCircle className="h-4 w-4 mr-1" />
                                      Accept
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1">
                                      <XCircle className="h-4 w-4 mr-1" />
                                      Decline
                                    </Button>
                                  </div>
                                )}
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

export default VendorBookingsPage;