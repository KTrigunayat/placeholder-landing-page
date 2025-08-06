import React, { useState } from 'react';
import ClientDashboardLayout from '@/components/ClientDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Camera,
  Download,
  Share2,
  Heart,
  Eye,
  Filter,
  Grid3X3,
  List,
  Calendar,
  User,
  MapPin
} from 'lucide-react';

const ClientGallery = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Venue Walkthrough Photos',
      category: 'venue',
      date: '2024-08-22',
      photographer: 'Sarah Johnson',
      images: 12,
      thumbnail: '/placeholder.svg',
      description: 'Initial venue photos from our site visit',
      status: 'new',
      location: 'Marriott Hotel Grand Ballroom'
    },
    {
      id: 2,
      title: 'Engagement Photo Session',
      category: 'photography',
      date: '2024-08-20',
      photographer: 'Alex Photography',
      images: 45,
      thumbnail: '/placeholder.svg',
      description: 'Beautiful engagement photos from the park session',
      status: 'favorite',
      location: 'Central Park'
    },
    {
      id: 3,
      title: 'Catering Menu Samples',
      category: 'catering',
      date: '2024-08-28',
      photographer: 'Chef Michael',
      images: 8,
      thumbnail: '/placeholder.svg',
      description: 'Photos of menu items from tasting session',
      status: 'approved',
      location: 'Elite Catering Kitchen'
    },
    {
      id: 4,
      title: 'Floral Design Concepts',
      category: 'flowers',
      date: '2024-09-01',
      photographer: 'Emma Wilson',
      images: 15,
      thumbnail: '/placeholder.svg',
      description: 'Initial floral arrangement concepts and color schemes',
      status: 'pending',
      location: 'Bloom & Blossom Studio'
    },
    {
      id: 5,
      title: 'Invitation Design Mockups',
      category: 'design',
      date: '2024-08-25',
      photographer: 'Design Team',
      images: 6,
      thumbnail: '/placeholder.svg',
      description: 'Wedding invitation design variations',
      status: 'approved',
      location: 'Planiva Studio'
    },
    {
      id: 6,
      title: 'Cake Design Options',
      category: 'catering',
      date: '2024-09-03',
      photographer: 'Sweet Dreams Bakery',
      images: 10,
      thumbnail: '/placeholder.svg',
      description: 'Custom cake design concepts and flavor options',
      status: 'new',
      location: 'Sweet Dreams Bakery'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryItems.length },
    { id: 'venue', name: 'Venue', count: galleryItems.filter(item => item.category === 'venue').length },
    { id: 'photography', name: 'Photography', count: galleryItems.filter(item => item.category === 'photography').length },
    { id: 'catering', name: 'Catering', count: galleryItems.filter(item => item.category === 'catering').length },
    { id: 'flowers', name: 'Flowers', count: galleryItems.filter(item => item.category === 'flowers').length },
    { id: 'design', name: 'Design', count: galleryItems.filter(item => item.category === 'design').length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'favorite': return 'bg-red-100 text-red-800 border-red-200';
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'favorite': return <Heart className="w-3 h-3 fill-current" />;
      default: return null;
    }
  };

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <ClientDashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Event Gallery</h1>
            <p className="text-muted-foreground mt-1">View and manage all your event photos and media</p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">96</div>
              <div className="text-sm text-muted-foreground">Total Photos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">15</div>
              <div className="text-sm text-muted-foreground">Approved</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">8</div>
              <div className="text-sm text-muted-foreground">Favorites</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">6</div>
              <div className="text-sm text-muted-foreground">New Albums</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gallery Content */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={getStatusColor(item.status)}>
                      {getStatusIcon(item.status)}
                      <span className={getStatusIcon(item.status) ? 'ml-1' : ''}>
                        {item.status}
                      </span>
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    <Camera className="w-3 h-3 inline mr-1" />
                    {item.images} photos
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{item.photographer}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-0">
              <div className="space-y-0">
                {filteredItems.map((item, index) => (
                  <div key={item.id} className={`p-4 ${index !== filteredItems.length - 1 ? 'border-b border-border' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{item.title}</h3>
                          <Badge className={getStatusColor(item.status)}>
                            {getStatusIcon(item.status)}
                            <span className={getStatusIcon(item.status) ? 'ml-1' : ''}>
                              {item.status}
                            </span>
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                          <span>{item.images} photos</span>
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                          <span>{item.photographer}</span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </ClientDashboardLayout>
  );
};

export default ClientGallery;