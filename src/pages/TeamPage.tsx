import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Users2, 
  Plus, 
  Send, 
  Mail, 
  Phone,
  Calendar,
  Search,
  Filter,
  Star,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

const TeamPage = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: 'Hi! I can help you manage team assignments, track performance, and optimize workload distribution. How can I assist with your team management today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const teamStats = [
    { label: 'Total Members', value: 15, color: 'text-blue-600' },
    { label: 'Active Projects', value: 8, color: 'text-green-600' },
    { label: 'Avg Performance', value: '92%', color: 'text-purple-600' },
    { label: 'Team Satisfaction', value: '4.8', color: 'text-orange-600' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Alice Cooper',
      role: 'Event Coordinator',
      email: 'alice.cooper@planvia.com',
      phone: '+1 (555) 123-4567',
      status: 'Active',
      currentProjects: 3,
      performance: 95,
      joinDate: '2023-01-15',
      department: 'Operations',
      location: 'New York'
    },
    {
      id: 2,
      name: 'Bob Martinez',
      role: 'Vendor Relations Manager',
      email: 'bob.martinez@planvia.com',
      phone: '+1 (555) 234-5678',
      status: 'Active',
      currentProjects: 5,
      performance: 88,
      joinDate: '2023-03-22',
      department: 'Vendor Management',
      location: 'Los Angeles'
    },
    {
      id: 3,
      name: 'Carol Davis',
      role: 'Finance Specialist',
      email: 'carol.davis@planvia.com',
      phone: '+1 (555) 345-6789',
      status: 'Active',
      currentProjects: 2,
      performance: 97,
      joinDate: '2022-11-08',
      department: 'Finance',
      location: 'Chicago'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Creative Director',
      email: 'david.kim@planvia.com',
      phone: '+1 (555) 456-7890',
      status: 'On Leave',
      currentProjects: 0,
      performance: 91,
      joinDate: '2023-06-12',
      department: 'Creative',
      location: 'San Francisco'
    },
    {
      id: 5,
      name: 'Emma Wilson',
      role: 'Client Relations',
      email: 'emma.wilson@planvia.com',
      phone: '+1 (555) 567-8901',
      status: 'Active',
      currentProjects: 4,
      performance: 93,
      joinDate: '2023-02-28',
      department: 'Client Services',
      location: 'Miami'
    }
  ];

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, 
      { type: 'user', content: chatInput },
      { type: 'ai', content: 'Excellent point! I can analyze team performance data and suggest optimal task assignments. Based on current workloads, I recommend redistributing some projects to balance efficiency.' }
    ]);
    setChatInput('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'On Leave': return 'bg-orange-500';
      case 'Inactive': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return 'text-green-600';
    if (performance >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Team</h1>
            <p className="text-muted-foreground">Manage your team members, roles, and collaboration</p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            <Plus className="mr-2 h-5 w-5" />
            ADD TEAM MEMBER
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
                    placeholder="Ask about team..." 
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

          {/* Right Column - Team Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {teamStats.map((stat, index) => (
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

        {/* Team Management Section */}
        <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">Team Management</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search team members..." 
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
                  <TableHead>Member</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Projects</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.location}</div>
                      </div>
                    </TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                          {member.email}
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-3 w-3 mr-2 text-muted-foreground" />
                          {member.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{member.department}</TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(member.status)} text-white`}>
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        {member.currentProjects}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className={`font-medium ${getPerformanceColor(member.performance)}`}>
                          {member.performance}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        {new Date(member.joinDate).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
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

export default TeamPage;