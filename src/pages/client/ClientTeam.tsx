import React, { useState } from 'react';
import ClientDashboardLayout from '@/components/ClientDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Star,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  Award,
  Heart,
  Camera,
  Music,
  Utensils,
  Flower,
  Building
} from 'lucide-react';

const ClientTeam = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Lead Wedding Planner',
      company: 'Planiva Events',
      avatar: '/placeholder.svg',
      phone: '+1 (555) 123-4567',
      email: 'sarah@planiva.com',
      specialty: 'Wedding Coordination',
      experience: '8 years',
      rating: 4.9,
      status: 'primary-contact',
      description: 'Your dedicated wedding planner who will oversee every detail of your special day.',
      responsibilities: ['Overall event coordination', 'Vendor management', 'Timeline planning', 'Day-of coordination'],
      availability: 'Available 24/7 for urgent matters',
      recentActivity: 'Updated venue timeline 2 hours ago'
    },
    {
      id: 2,
      name: 'Chef Michael Rodriguez',
      role: 'Executive Chef',
      company: 'Elite Catering',
      avatar: '/placeholder.svg',
      phone: '+1 (555) 234-5678',
      email: 'chef@elitecatering.com',
      specialty: 'Fine Dining & Wedding Cuisine',
      experience: '12 years',
      rating: 4.8,
      status: 'vendor',
      description: 'Award-winning chef specializing in elegant wedding menus and dietary accommodations.',
      responsibilities: ['Menu planning', 'Food preparation', 'Kitchen coordination', 'Special dietary needs'],
      availability: 'Mon-Fri 9AM-6PM, weekends by appointment',
      recentActivity: 'Confirmed final menu selections yesterday'
    },
    {
      id: 3,
      name: 'Alex Chen',
      role: 'Wedding Photographer',
      company: 'Alex Photography Studio',
      avatar: '/placeholder.svg',
      phone: '+1 (555) 345-6789',
      email: 'alex@alexphotography.com',
      specialty: 'Wedding & Portrait Photography',
      experience: '6 years',
      rating: 4.9,
      status: 'vendor',
      description: 'Creative photographer known for capturing emotional moments and stunning portraits.',
      responsibilities: ['Engagement photos', 'Wedding day photography', 'Photo editing', 'Album creation'],
      availability: 'Flexible schedule, responds within 2 hours',
      recentActivity: 'Delivered engagement photos 3 days ago'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Floral Designer',
      company: 'Bloom & Blossom',
      avatar: '/placeholder.svg',
      phone: '+1 (555) 456-7890',
      email: 'emma@bloomblossom.com',
      specialty: 'Bridal Bouquets & Centerpieces',
      experience: '10 years',
      rating: 4.7,
      status: 'vendor',
      description: 'Artistic floral designer creating beautiful arrangements with seasonal and sustainable flowers.',
      responsibilities: ['Bridal bouquet', 'Centerpieces', 'Ceremony decorations', 'Venue styling'],
      availability: 'Tue-Sat 10AM-5PM',
      recentActivity: 'Shared design mockups this morning'
    },
    {
      id: 5,
      name: 'David Miller',
      role: 'Event Coordinator',
      company: 'Marriott Hotel',
      avatar: '/placeholder.svg',
      phone: '+1 (555) 567-8901',
      email: 'david@marriott.com',
      specialty: 'Venue Management',
      experience: '5 years',
      rating: 4.6,
      status: 'venue',
      description: 'Experienced venue coordinator ensuring smooth operations and perfect setup.',
      responsibilities: ['Venue setup', 'Equipment management', 'Guest services', 'Security coordination'],
      availability: 'Daily 8AM-10PM',
      recentActivity: 'Confirmed setup timeline last week'
    },
    {
      id: 6,
      name: 'Jessica Park',
      role: 'Assistant Planner',
      company: 'Planiva Events',
      avatar: '/placeholder.svg',
      phone: '+1 (555) 678-9012',
      email: 'jessica@planiva.com',
      specialty: 'Logistics & Communication',
      experience: '3 years',
      rating: 4.8,
      status: 'support',
      description: 'Detail-oriented assistant helping with logistics and vendor communication.',
      responsibilities: ['Vendor communication', 'Guest list management', 'RSVP tracking', 'Day-of assistance'],
      availability: 'Mon-Fri 9AM-6PM',
      recentActivity: 'Updated guest list this afternoon'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'primary-contact': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'vendor': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'venue': return 'bg-green-100 text-green-800 border-green-200';
      case 'support': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSpecialtyIcon = (specialty: string) => {
    if (specialty.includes('Photography')) return <Camera className="w-4 h-4" />;
    if (specialty.includes('Catering') || specialty.includes('Cuisine')) return <Utensils className="w-4 h-4" />;
    if (specialty.includes('Floral') || specialty.includes('Bouquet')) return <Flower className="w-4 h-4" />;
    if (specialty.includes('Music') || specialty.includes('DJ')) return <Music className="w-4 h-4" />;
    if (specialty.includes('Venue')) return <Building className="w-4 h-4" />;
    return <Users className="w-4 h-4" />;
  };

  const teamStats = {
    totalMembers: teamMembers.length,
    averageRating: (teamMembers.reduce((acc, member) => acc + member.rating, 0) / teamMembers.length).toFixed(1),
    totalExperience: teamMembers.reduce((acc, member) => acc + parseInt(member.experience), 0),
    activeVendors: teamMembers.filter(member => member.status === 'vendor').length
  };

  return (
    <ClientDashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Your Event Team</h1>
          <p className="text-muted-foreground mt-1">Meet the professionals making your special day perfect</p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{teamStats.totalMembers}</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600 flex items-center justify-center">
                <Star className="w-5 h-5 mr-1 fill-current" />
                {teamStats.averageRating}
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{teamStats.totalExperience}+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{teamStats.activeVendors}</div>
              <div className="text-sm text-muted-foreground">Active Vendors</div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold truncate">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <p className="text-xs text-muted-foreground">{member.company}</p>
                      </div>
                      <Badge className={getStatusColor(member.status)}>
                        {member.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        {getSpecialtyIcon(member.specialty)}
                        <span className="text-muted-foreground">{member.specialty}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{member.rating}</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{member.experience} experience</span>
                      </div>
                      
                      <p className="text-xs text-muted-foreground line-clamp-2">{member.description}</p>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Phone className="w-3 h-3 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Mail className="w-3 h-3 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Communication Hub */}
        <Card>
          <CardHeader>
            <CardTitle>Team Communication Hub</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recent">Recent Activity</TabsTrigger>
                <TabsTrigger value="schedule">Upcoming Meetings</TabsTrigger>
                <TabsTrigger value="contacts">Quick Contacts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recent" className="space-y-4">
                {teamMembers.slice(0, 4).map((member) => (
                  <div key={`recent-${member.id}`} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-xs">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.recentActivity}</p>
                    </div>
                    <Button size="sm" variant="ghost">
                      <MessageSquare className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="schedule" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Calendar className="w-8 h-8 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Photography Consultation</p>
                      <p className="text-xs text-muted-foreground">Tomorrow at 3:00 PM with Alex Chen</p>
                    </div>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Calendar className="w-8 h-8 text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Floral Design Review</p>
                      <p className="text-xs text-muted-foreground">Sep 12 at 1:00 PM with Emma Wilson</p>
                    </div>
                    <Button size="sm" variant="outline">Schedule</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="contacts" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teamMembers.filter(member => member.status === 'primary-contact' || member.status === 'vendor').slice(0, 4).map((member) => (
                    <div key={`contact-${member.id}`} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="text-xs">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost">
                          <Phone className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Mail className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </ClientDashboardLayout>
  );
};

export default ClientTeam;