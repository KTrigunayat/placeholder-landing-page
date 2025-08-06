import React, { useState } from 'react';
import ClientDashboardLayout from '@/components/ClientDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageSquare, 
  Send, 
  Phone, 
  Video, 
  Paperclip,
  Search,
  Filter,
  Clock,
  CheckCheck,
  User
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ClientCommunication = () => {
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Event Planner',
      avatar: '/api/placeholder/40/40',
      status: 'online',
      lastMessage: 'The venue decoration samples are ready for your review',
      lastMessageTime: '2 hours ago',
      unreadCount: 2
    },
    {
      id: 2,
      name: 'Alex Photography',
      role: 'Photographer',
      avatar: '/api/placeholder/40/40',
      status: 'offline',
      lastMessage: 'When would you like to schedule the pre-wedding shoot?',
      lastMessageTime: '1 day ago',
      unreadCount: 0
    },
    {
      id: 3,
      name: 'Chef Michael',
      role: 'Catering',
      avatar: '/api/placeholder/40/40',
      status: 'online',
      lastMessage: 'Menu tasting confirmed for Friday at 2 PM',
      lastMessageTime: '3 hours ago',
      unreadCount: 1
    },
    {
      id: 4,
      name: 'Beat Masters DJ',
      role: 'DJ/Entertainment',
      avatar: '/api/placeholder/40/40',
      status: 'away',
      lastMessage: 'Please share your playlist preferences',
      lastMessageTime: '2 days ago',
      unreadCount: 0
    }
  ];

  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      content: 'Hi! I hope you\'re doing well. I wanted to update you on the venue decoration progress.',
      timestamp: '2024-02-20 10:30',
      isMe: false,
      status: 'read'
    },
    {
      id: 2,
      sender: 'You',
      content: 'That\'s great! I\'m excited to see what you have planned.',
      timestamp: '2024-02-20 10:35',
      isMe: true,
      status: 'read'
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      content: 'I\'ve prepared three different theme options for you to choose from. Each includes color schemes, table settings, and centerpiece designs.',
      timestamp: '2024-02-20 10:40',
      isMe: false,
      status: 'read'
    },
    {
      id: 4,
      sender: 'Sarah Johnson',
      content: 'The venue decoration samples are ready for your review. Would you be available this Friday at 3 PM to visit the venue and see the setups?',
      timestamp: '2024-02-20 14:15',
      isMe: false,
      status: 'delivered'
    },
    {
      id: 5,
      sender: 'Sarah Johnson',
      content: 'I\'ve also attached some photos of the sample decorations. Let me know your thoughts!',
      timestamp: '2024-02-20 14:16',
      isMe: false,
      status: 'delivered'
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const announcements = [
    {
      id: 1,
      title: 'Venue Inspection Completed',
      content: 'Final venue inspection was completed successfully. All requirements met.',
      timestamp: '2024-02-19 16:00',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Catering Menu Updated',
      content: 'New dietary options have been added to accommodate all guests.',
      timestamp: '2024-02-18 12:30',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Photography Timeline Confirmed',
      content: 'Wedding day photography schedule has been finalized.',
      timestamp: '2024-02-17 09:15',
      priority: 'low'
    }
  ];

  return (
    <ClientDashboardLayout>
      <div className="p-6 h-[calc(100vh-2rem)]">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Communication Center</h1>
            <p className="text-muted-foreground mt-1">Stay connected with your event planning team</p>
          </div>

          <div className="flex-1 grid grid-cols-12 gap-6">
            {/* Contacts Sidebar */}
            <div className="col-span-4">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Team Members</CardTitle>
                    <Button size="sm" variant="outline">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      placeholder="Search contacts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-1 p-4">
                      {contacts.map((contact) => (
                        <div
                          key={contact.id}
                          onClick={() => setSelectedContact(contact)}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedContact.id === contact.id
                              ? 'bg-primary/10 border border-primary/20'
                              : 'hover:bg-muted/50'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="relative">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={contact.avatar} />
                                <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                                contact.status === 'online' ? 'bg-green-500' :
                                contact.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                              }`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium truncate">{contact.name}</p>
                                {contact.unreadCount > 0 && (
                                  <Badge variant="default" className="w-5 h-5 text-xs flex items-center justify-center p-0">
                                    {contact.unreadCount}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">{contact.role}</p>
                              <p className="text-xs text-muted-foreground truncate mt-1">{contact.lastMessage}</p>
                              <p className="text-xs text-muted-foreground">{contact.lastMessageTime}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Main Chat Area */}
            <div className="col-span-8">
              <Tabs defaultValue="chat" className="h-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="chat">Direct Messages</TabsTrigger>
                  <TabsTrigger value="announcements">Announcements</TabsTrigger>
                </TabsList>

                <TabsContent value="chat" className="h-[calc(100%-40px)] mt-4">
                  <Card className="h-full flex flex-col">
                    {/* Chat Header */}
                    <CardHeader className="border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={selectedContact.avatar} />
                            <AvatarFallback>{selectedContact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{selectedContact.name}</p>
                            <p className="text-sm text-muted-foreground">{selectedContact.role}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Video className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Messages */}
                    <CardContent className="flex-1 p-0">
                      <ScrollArea className="h-[400px] p-4">
                        <div className="space-y-4">
                          {messages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                            >
                              <div className={`max-w-[70%] rounded-lg p-3 ${
                                message.isMe
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted'
                              }`}>
                                <p className="text-sm">{message.content}</p>
                                <div className="flex items-center justify-between mt-2">
                                  <p className="text-xs opacity-70">
                                    {new Date(message.timestamp).toLocaleTimeString()}
                                  </p>
                                  {message.isMe && (
                                    <CheckCheck className={`w-4 h-4 ${
                                      message.status === 'read' ? 'text-blue-400' : 'opacity-50'
                                    }`} />
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>

                    {/* Message Input */}
                    <div className="p-4 border-t">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Paperclip className="w-4 h-4" />
                        </Button>
                        <Input
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="flex-1"
                        />
                        <Button onClick={handleSendMessage}>
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="announcements" className="h-[calc(100%-40px)] mt-4">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Project Announcements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[500px]">
                        <div className="space-y-4">
                          {announcements.map((announcement) => (
                            <div key={announcement.id} className="border rounded-lg p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-semibold">{announcement.title}</h4>
                                    <Badge variant={
                                      announcement.priority === 'high' ? 'destructive' :
                                      announcement.priority === 'medium' ? 'default' : 'secondary'
                                    }>
                                      {announcement.priority}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">{announcement.content}</p>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="w-3 h-3" />
                                    {new Date(announcement.timestamp).toLocaleString()}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </ClientDashboardLayout>
  );
};

export default ClientCommunication;