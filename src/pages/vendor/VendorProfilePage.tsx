import React, { useState } from 'react';
import VendorDashboardLayout from '@/components/VendorDashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { 
  Send, 
  User, 
  Camera,
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  Save,
  Edit
} from 'lucide-react';

const VendorProfilePage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'I can help you optimize your profile to attract more clients and improve your visibility!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { type: 'user', message: chatInput },
        { type: 'ai', message: 'Let me help you improve your profile and business presence.' }
      ]);
      setChatInput('');
    }
  };

  const profileData = {
    businessName: 'Alex Photography Studio',
    ownerName: 'Alex Johnson',
    email: 'alex@alexphoto.com',
    phone: '+1 (555) 123-4567',
    website: 'www.alexphoto.com',
    location: 'San Francisco, CA',
    bio: 'Professional photographer with 8+ years of experience specializing in weddings, events, and portraits. Passionate about capturing life\'s precious moments with artistic flair.',
    specialties: ['Wedding Photography', 'Event Photography', 'Portrait Sessions', 'Corporate Events'],
    experience: '8 years',
    rating: 4.9,
    reviewCount: 47,
    completedEvents: 156,
    responseTime: '2 hours'
  };

  const stats = [
    { label: 'Profile Views', value: '1,248', icon: User, color: 'text-blue-500' },
    { label: 'Rating', value: '4.9/5', icon: Star, color: 'text-yellow-500' },
    { label: 'Completed Events', value: '156', icon: Camera, color: 'text-green-500' },
    { label: 'Response Time', value: '2h', icon: Phone, color: 'text-purple-500' },
  ];

  return (
    <VendorDashboardLayout>
      <div className="p-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Profile Management</h1>
            <p className="text-muted-foreground mt-2">Manage your business profile and settings</p>
          </div>
          <Button 
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "outline" : "default"}
          >
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? 'Cancel' : 'Edit Profile'}
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
                  PLANIVA AI - PROFILE OPTIMIZER
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
                    placeholder="Ask about profile optimization, SEO tips, or business growth..."
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

            {/* Profile Information */}
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                    <Camera className="h-8 w-8 text-muted-foreground" />
                  </div>
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Business Name</label>
                    {isEditing ? (
                      <Input defaultValue={profileData.businessName} className="mt-1" />
                    ) : (
                      <p className="mt-1">{profileData.businessName}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Owner Name</label>
                    {isEditing ? (
                      <Input defaultValue={profileData.ownerName} className="mt-1" />
                    ) : (
                      <p className="mt-1">{profileData.ownerName}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    {isEditing ? (
                      <Input defaultValue={profileData.email} className="mt-1" />
                    ) : (
                      <p className="mt-1 flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {profileData.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    {isEditing ? (
                      <Input defaultValue={profileData.phone} className="mt-1" />
                    ) : (
                      <p className="mt-1 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {profileData.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Website</label>
                    {isEditing ? (
                      <Input defaultValue={profileData.website} className="mt-1" />
                    ) : (
                      <p className="mt-1 flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        {profileData.website}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    {isEditing ? (
                      <Input defaultValue={profileData.location} className="mt-1" />
                    ) : (
                      <p className="mt-1 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {profileData.location}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Bio</label>
                  {isEditing ? (
                    <Textarea defaultValue={profileData.bio} className="mt-1" rows={4} />
                  ) : (
                    <p className="mt-1 text-muted-foreground">{profileData.bio}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Specialties</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profileData.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-2 pt-4">
                    <Button>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive booking updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive urgent notifications via SMS</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Emails</p>
                    <p className="text-sm text-muted-foreground">Receive tips and promotional content</p>
                  </div>
                  <Switch />
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

            {/* Business Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Business Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Profile Completion</span>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                
                <div className="pt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monthly Views</span>
                    <span className="font-medium">+23%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Booking Rate</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Client Retention</span>
                    <span className="font-medium">85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default VendorProfilePage;