import React, { useState } from 'react';
import VendorDashboardLayout from '@/components/VendorDashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Send, 
  MessageSquare, 
  Search,
  Clock,
  Check,
  CheckCheck,
  Phone,
  Video,
  Paperclip,
  User
} from 'lucide-react';

const VendorMessagesPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'I can help you manage client communications and draft professional responses!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { type: 'user', message: chatInput },
        { type: 'ai', message: 'Let me help you with professional communication strategies and message templates.' }
      ]);
      setChatInput('');
    }
  };

  const conversations = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      lastMessage: 'Thank you so much! The photos are perfect. Can we discuss additional prints?',
      timestamp: '2024-03-02 14:30',
      unread: 2,
      status: 'active',
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      lastMessage: 'Looking forward to the corporate event next week. What time should we expect you?',
      timestamp: '2024-03-02 11:15',
      unread: 0,
      status: 'active',
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      clientName: 'Emma Williams',
      lastMessage: 'Hi Alex! I\'m interested in booking a family portrait session. Are you available next month?',
      timestamp: '2024-03-01 16:45',
      unread: 1,
      status: 'new',
      avatar: '/placeholder.svg'
    },
    {
      id: 4,
      clientName: 'David Rodriguez',
      lastMessage: 'Perfect! See you at 2 PM on Saturday.',
      timestamp: '2024-02-29 09:20',
      unread: 0,
      status: 'archived',
      avatar: '/placeholder.svg'
    }
  ];

  const messages = {
    1: [
      { sender: 'client', message: 'Hi Alex! I wanted to follow up on our wedding photos.', time: '14:25' },
      { sender: 'vendor', message: 'Hi Sarah! I hope you\'re doing well. I\'ll have the edited photos ready by tomorrow.', time: '14:27' },
      { sender: 'client', message: 'That\'s wonderful! They looked amazing in the preview.', time: '14:28' },
      { sender: 'client', message: 'Thank you so much! The photos are perfect. Can we discuss additional prints?', time: '14:30' }
    ],
    2: [
      { sender: 'client', message: 'Hi Alex, this is Michael from Tech Corp.', time: '11:10' },
      { sender: 'vendor', message: 'Hello Michael! Thanks for reaching out. How can I help you?', time: '11:12' },
      { sender: 'client', message: 'Looking forward to the corporate event next week. What time should we expect you?', time: '11:15' }
    ],
    3: [
      { sender: 'client', message: 'Hi Alex! I\'m interested in booking a family portrait session. Are you available next month?', time: '16:45' }
    ]
  };

  const stats = [
    { label: 'Unread Messages', value: '5', icon: MessageSquare, color: 'text-blue-500' },
    { label: 'Response Time', value: '2h', icon: Clock, color: 'text-green-500' },
    { label: 'Active Chats', value: '8', icon: User, color: 'text-purple-500' },
    { label: 'New Inquiries', value: '3', icon: Send, color: 'text-yellow-500' },
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedConv = conversations.find(c => c.id === selectedConversation);
  const conversationMessages = messages[selectedConversation as keyof typeof messages] || [];

  return (
    <VendorDashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground mt-2">Communicate with your clients efficiently</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Left Column - AI Assistant */}
          <div className="space-y-6">
            {/* PLANIVA AI */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  PLANIVA AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 rounded-lg p-3 mb-3 h-32 overflow-y-auto">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                      <span className={`inline-block p-2 rounded-lg text-xs ${
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
                    placeholder="Ask for help..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                    className="flex-1 text-sm"
                    size="sm"
                  />
                  <Button onClick={sendChatMessage} size="sm">
                    <Send className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    <div>
                      <p className="text-lg font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Middle Column - Conversations List */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Conversations</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    size="sm"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[500px]">
                  {filteredConversations.map((conv) => (
                    <div
                      key={conv.id}
                      onClick={() => setSelectedConversation(conv.id)}
                      className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors ${
                        selectedConversation === conv.id ? 'bg-muted' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-medium text-sm truncate">{conv.clientName}</h3>
                            {conv.unread > 0 && (
                              <Badge variant="default" className="text-xs">
                                {conv.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{conv.lastMessage}</p>
                          <p className="text-xs text-muted-foreground mt-1">{conv.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Chat Window */}
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              {selectedConv ? (
                <>
                  {/* Chat Header */}
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{selectedConv.clientName}</h3>
                          <p className="text-sm text-muted-foreground">Online</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Video className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Messages */}
                  <CardContent className="flex-1 p-0">
                    <ScrollArea className="h-[400px] p-4">
                      <div className="space-y-4">
                        {conversationMessages.map((msg, index) => (
                          <div
                            key={index}
                            className={`flex ${msg.sender === 'vendor' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[70%] p-3 rounded-lg ${
                                msg.sender === 'vendor'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted text-foreground'
                              }`}
                            >
                              <p className="text-sm">{msg.message}</p>
                              <div className={`flex items-center gap-1 mt-1 ${
                                msg.sender === 'vendor' ? 'justify-end' : 'justify-start'
                              }`}>
                                <span className="text-xs opacity-70">{msg.time}</span>
                                {msg.sender === 'vendor' && (
                                  <CheckCheck className="h-3 w-3 opacity-70" />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>

                  {/* Message Input */}
                  <div className="border-t border-border p-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && newMessage.trim()) {
                            // Add message logic here
                            setNewMessage('');
                          }
                        }}
                      />
                      <Button>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <CardContent className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Select a conversation to start messaging</p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default VendorMessagesPage;