import React, { useState } from 'react';
import VendorDashboardLayout from '@/components/VendorDashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Send, 
  Camera, 
  Plus,
  Eye,
  Edit,
  Trash2,
  Heart,
  Share2,
  Download
} from 'lucide-react';

const VendorPortfolioPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'I can help you organize your portfolio, optimize descriptions, and showcase your best work!' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { type: 'user', message: chatInput },
        { type: 'ai', message: 'Let me help you improve your portfolio presentation and organization.' }
      ]);
      setChatInput('');
    }
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Elegant Wedding at Grand Hotel',
      category: 'Wedding',
      image: '/placeholder.svg',
      views: 248,
      likes: 35,
      date: '2024-02-15',
      description: 'Beautiful outdoor ceremony with natural lighting'
    },
    {
      id: 2,
      title: 'Corporate Event Photography',
      category: 'Corporate',
      image: '/placeholder.svg',
      views: 156,
      likes: 22,
      date: '2024-02-10',
      description: 'Professional event coverage for tech conference'
    },
    {
      id: 3,
      title: 'Family Portrait Session',
      category: 'Portrait',
      image: '/placeholder.svg',
      views: 89,
      likes: 18,
      date: '2024-02-05',
      description: 'Warm family moments captured in natural setting'
    },
    {
      id: 4,
      title: 'Birthday Party Celebration',
      category: 'Party',
      image: '/placeholder.svg',
      views: 134,
      likes: 28,
      date: '2024-01-28',
      description: 'Joyful celebration with candid moments'
    },
    {
      id: 5,
      title: 'Engagement Photoshoot',
      category: 'Engagement',
      image: '/placeholder.svg',
      views: 203,
      likes: 41,
      date: '2024-01-20',
      description: 'Romantic sunset engagement session'
    },
    {
      id: 6,
      title: 'Product Photography',
      category: 'Commercial',
      image: '/placeholder.svg',
      views: 95,
      likes: 15,
      date: '2024-01-15',
      description: 'Clean product shots for e-commerce brand'
    }
  ];

  const stats = [
    { label: 'Total Photos', value: '247', icon: Camera, color: 'text-blue-500' },
    { label: 'Portfolio Views', value: '1,248', icon: Eye, color: 'text-green-500' },
    { label: 'Total Likes', value: '389', icon: Heart, color: 'text-red-500' },
    { label: 'Downloads', value: '156', icon: Download, color: 'text-purple-500' },
  ];

  return (
    <VendorDashboardLayout>
      <div className="p-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Portfolio Management</h1>
            <p className="text-muted-foreground mt-2">Showcase your best work and attract more clients</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add New Photo
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* PLANIVA AI */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  PLANIVA AI - PORTFOLIO OPTIMIZER
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
                    placeholder="Ask about portfolio optimization, SEO, or photo organization..."
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

            {/* Portfolio Grid */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {portfolioItems.map((item) => (
                    <div key={item.id} className="group relative">
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="secondary" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>{item.title}</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <img 
                                      src={item.image} 
                                      alt={item.title}
                                      className="w-full h-64 object-cover rounded-lg"
                                    />
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                      <div>
                                        <label className="font-medium">Category</label>
                                        <p>{item.category}</p>
                                      </div>
                                      <div>
                                        <label className="font-medium">Date</label>
                                        <p>{item.date}</p>
                                      </div>
                                      <div>
                                        <label className="font-medium">Views</label>
                                        <p>{item.views}</p>
                                      </div>
                                      <div>
                                        <label className="font-medium">Likes</label>
                                        <p>{item.likes}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="font-medium">Description</label>
                                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                    <div className="flex gap-2">
                                      <Button variant="outline" size="sm">
                                        <Edit className="h-4 w-4 mr-1" />
                                        Edit
                                      </Button>
                                      <Button variant="outline" size="sm">
                                        <Share2 className="h-4 w-4 mr-1" />
                                        Share
                                      </Button>
                                      <Button variant="outline" size="sm">
                                        <Trash2 className="h-4 w-4 mr-1" />
                                        Delete
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button variant="secondary" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <Badge className="absolute top-2 left-2" variant="secondary">
                            {item.category}
                          </Badge>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {item.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <Heart className="h-3 w-3" />
                                {item.likes}
                              </span>
                            </div>
                            <span>{item.date}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
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

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Photos
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Bulk Edit
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Portfolio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default VendorPortfolioPage;