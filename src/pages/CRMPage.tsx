import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  UserCheck, 
  Plus, 
  Send, 
  Phone, 
  Mail, 
  Calendar,
  Search,
  Filter,
  TrendingUp,
  Heart
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CRMPage = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: 'Hi! I can help you manage client relationships, track communications, and analyze customer data. How can I assist you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const crmStats = [
    { label: 'Total Clients', value: 148, color: 'text-blue-600' },
    { label: 'Active Leads', value: 23, color: 'text-green-600' },
    { label: 'Follow-ups Due', value: 12, color: 'text-orange-600' },
    { label: 'Client Satisfaction', value: '94%', color: 'text-purple-600' }
  ];

  const clients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      company: 'Johnson & Associates',
      status: 'Active',
      lastContact: '2024-01-10',
      eventType: 'Wedding',
      value: 25000,
      priority: 'High'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@techcorp.com',
      phone: '+1 (555) 234-5678',
      company: 'TechCorp Inc.',
      status: 'Lead',
      lastContact: '2024-01-08',
      eventType: 'Corporate Event',
      value: 85000,
      priority: 'High'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@gmail.com',
      phone: '+1 (555) 345-6789',
      company: 'Private',
      status: 'Follow-up',
      lastContact: '2024-01-05',
      eventType: 'Birthday Party',
      value: 12000,
      priority: 'Medium'
    },
    {
      id: 4,
      name: 'David Thompson',
      email: 'david.t@nonprofitorg.org',
      phone: '+1 (555) 456-7890',
      company: 'Nonprofit Org',
      status: 'Proposal Sent',
      lastContact: '2024-01-12',
      eventType: 'Charity Gala',
      value: 45000,
      priority: 'High'
    }
  ];

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, 
      { type: 'user', content: chatInput },
      { type: 'ai', content: 'Excellent question! I can help you analyze client patterns, suggest follow-up strategies, and identify opportunities for upselling based on their event history.' }
    ]);
    setChatInput('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'Lead': return 'bg-blue-500';
      case 'Follow-up': return 'bg-orange-500';
      case 'Proposal Sent': return 'bg-purple-500';
      case 'Closed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">CRM</h1>
            <p className="text-muted-foreground">Manage client relationships and track customer interactions</p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            <Plus className="mr-2 h-5 w-5" />
            ADD NEW CLIENT
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
                    placeholder="Ask about clients..." 
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

          {/* Right Column - Summary Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {crmStats.map((stat, index) => (
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

        {/* Client Management Section */}
        <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">Client Management</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search clients..." 
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
                  <TableHead>Contact</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Event Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Last Contact</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>
                      <div className="font-medium">{client.name}</div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                          {client.email}
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-3 w-3 mr-2 text-muted-foreground" />
                          {client.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{client.company}</TableCell>
                    <TableCell>{client.eventType}</TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(client.status)} text-white`}>
                        {client.status}
                      </Badge>
                    </TableCell>
                    <TableCell>${client.value.toLocaleString()}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${getPriorityColor(client.priority)}`}>
                        {client.priority}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        {new Date(client.lastContact).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Contact</Button>
                        <Button variant="outline" size="sm">View</Button>
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

export default CRMPage;