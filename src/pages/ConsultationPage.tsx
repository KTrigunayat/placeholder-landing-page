import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  MessageCircle, 
  Plus, 
  Send, 
  Video,
  Phone,
  Calendar,
  Clock,
  Search,
  Filter,
  User,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ConsultationPage = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: 'Hi! I can help you schedule consultations, prepare meeting agendas, and track client communication. What consultation support do you need?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const consultationStats = [
    { label: 'Scheduled Today', value: 5, color: 'text-blue-600' },
    { label: 'This Week', value: 18, color: 'text-green-600' },
    { label: 'Completed', value: 47, color: 'text-purple-600' },
    { label: 'Avg Rating', value: '4.9', color: 'text-orange-600' }
  ];

  const consultations = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      clientEmail: 'sarah.johnson@email.com',
      type: 'Initial Consultation',
      date: '2024-01-15',
      time: '10:00 AM',
      duration: 60,
      status: 'Scheduled',
      meetingType: 'Video Call',
      consultant: 'Alice Cooper',
      eventType: 'Wedding',
      notes: 'Discuss venue options and catering preferences'
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      clientEmail: 'michael.chen@techcorp.com',
      type: 'Follow-up',
      date: '2024-01-15',
      time: '2:00 PM',
      duration: 30,
      status: 'In Progress',
      meetingType: 'Phone Call',
      consultant: 'Bob Martinez',
      eventType: 'Corporate Event',
      notes: 'Review vendor proposals and timeline'
    },
    {
      id: 3,
      clientName: 'Emily Rodriguez',
      clientEmail: 'emily.rodriguez@gmail.com',
      type: 'Planning Session',
      date: '2024-01-15',
      time: '4:00 PM',
      duration: 90,
      status: 'Scheduled',
      meetingType: 'In-Person',
      consultant: 'Carol Davis',
      eventType: 'Birthday Party',
      notes: 'Finalize decorations and entertainment'
    },
    {
      id: 4,
      clientName: 'David Thompson',
      clientEmail: 'david.t@nonprofitorg.org',
      type: 'Budget Review',
      date: '2024-01-16',
      time: '11:00 AM',
      duration: 45,
      status: 'Completed',
      meetingType: 'Video Call',
      consultant: 'Emma Wilson',
      eventType: 'Charity Gala',
      notes: 'Discussed budget allocation and cost optimization'
    },
    {
      id: 5,
      clientName: 'Lisa Wang',
      clientEmail: 'lisa.wang@startup.com',
      type: 'Proposal Review',
      date: '2024-01-16',
      time: '3:30 PM',
      duration: 60,
      status: 'Scheduled',
      meetingType: 'Video Call',
      consultant: 'Alice Cooper',
      eventType: 'Product Launch',
      notes: 'Present final event proposal and contracts'
    }
  ];

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, 
      { type: 'user', content: chatInput },
      { type: 'ai', content: 'Excellent question! I can help you optimize consultation scheduling to avoid conflicts and suggest preparation materials based on the client\'s event type and requirements.' }
    ]);
    setChatInput('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-500';
      case 'In Progress': return 'bg-green-500';
      case 'Completed': return 'bg-purple-500';
      case 'Cancelled': return 'bg-red-500';
      case 'Rescheduled': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getMeetingTypeIcon = (type: string) => {
    switch (type) {
      case 'Video Call': return <Video className="h-4 w-4" />;
      case 'Phone Call': return <Phone className="h-4 w-4" />;
      case 'In-Person': return <User className="h-4 w-4" />;
      default: return <MessageCircle className="h-4 w-4" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Consultation</h1>
            <p className="text-muted-foreground">Manage client consultations and communication channels</p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            <Plus className="mr-2 h-5 w-5" />
            SCHEDULE CONSULTATION
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - AI Widget */}
          <div className="lg:col-span-1">
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
                    placeholder="Ask about consultations..." 
                    className="flex-1"
                    onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()}
                  />
                  <Button size="icon" variant="outline" onClick={sendChatMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Consultation Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {consultationStats.map((stat, index) => (
                <Card key={index} className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
                  <CardContent className="p-6 text-center">
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Consultation Management Section */}
        <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">Consultation Management</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search consultations..." 
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Meeting Type</TableHead>
                  <TableHead>Consultant</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Event Type</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {consultations.map((consultation) => (
                  <TableRow key={consultation.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{consultation.clientName}</div>
                        <div className="text-sm text-muted-foreground">{consultation.clientEmail}</div>
                      </div>
                    </TableCell>
                    <TableCell>{consultation.type}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          {new Date(consultation.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          {consultation.time}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{consultation.duration} min</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {getMeetingTypeIcon(consultation.meetingType)}
                        <span className="ml-2">{consultation.meetingType}</span>
                      </div>
                    </TableCell>
                    <TableCell>{consultation.consultant}</TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(consultation.status)} text-white`}>
                        {consultation.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{consultation.eventType}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Join</Button>
                        <Button variant="outline" size="sm">Reschedule</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ConsultationPage;