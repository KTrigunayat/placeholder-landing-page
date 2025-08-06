import React, { useState } from 'react';
import ClientDashboardLayout from '@/components/ClientDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Calendar,
  Users,
  MapPin,
  Camera,
  Music,
  Utensils,
  Flower
} from 'lucide-react';

const ClientEventProgress = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const eventCategories = [
    { id: 'venue', name: 'Venue', icon: MapPin, progress: 100, status: 'completed' },
    { id: 'catering', name: 'Catering', icon: Utensils, progress: 90, status: 'in-progress' },
    { id: 'photography', name: 'Photography', icon: Camera, progress: 75, status: 'in-progress' },
    { id: 'music', name: 'Music & Entertainment', icon: Music, progress: 60, status: 'in-progress' },
    { id: 'flowers', name: 'Flowers & Decor', icon: Flower, progress: 40, status: 'pending' },
    { id: 'guest', name: 'Guest Management', icon: Users, progress: 85, status: 'in-progress' }
  ];

  const detailedTasks = [
    {
      id: 1,
      category: 'venue',
      task: 'Venue booking confirmed',
      status: 'completed',
      dueDate: '2024-01-15',
      assignee: 'Sarah Johnson',
      description: 'Grand Ballroom at Marriott Hotel reserved for June 15, 2024'
    },
    {
      id: 2,
      category: 'catering',
      task: 'Menu tasting session',
      status: 'completed',
      dueDate: '2024-02-01',
      assignee: 'Chef Michael',
      description: 'Three-course dinner menu finalized with dietary accommodations'
    },
    {
      id: 3,
      category: 'catering',
      task: 'Final headcount confirmation',
      status: 'in-progress',
      dueDate: '2024-03-01',
      assignee: 'You',
      description: 'Confirm final guest count for catering purposes'
    },
    {
      id: 4,
      category: 'photography',
      task: 'Engagement photo session',
      status: 'completed',
      dueDate: '2024-01-20',
      assignee: 'Alex Photography',
      description: 'Pre-wedding engagement photos completed'
    },
    {
      id: 5,
      category: 'photography',
      task: 'Wedding day timeline planning',
      status: 'in-progress',
      dueDate: '2024-03-15',
      assignee: 'Alex Photography',
      description: 'Detailed photography schedule for wedding day'
    },
    {
      id: 6,
      category: 'music',
      task: 'DJ consultation',
      status: 'in-progress',
      dueDate: '2024-02-28',
      assignee: 'Beat Masters DJ',
      description: 'Discuss music preferences and special requests'
    },
    {
      id: 7,
      category: 'flowers',
      task: 'Floral design approval',
      status: 'pending',
      dueDate: '2024-03-10',
      assignee: 'You',
      description: 'Review and approve centerpiece and bouquet designs'
    },
    {
      id: 8,
      category: 'guest',
      task: 'Save the date cards sent',
      status: 'completed',
      dueDate: '2024-01-01',
      assignee: 'Sarah Johnson',
      description: 'Digital save the dates sent to all guests'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredTasks = selectedCategory === 'all' 
    ? detailedTasks 
    : detailedTasks.filter(task => task.category === selectedCategory);

  const overallProgress = Math.round(
    eventCategories.reduce((acc, cat) => acc + cat.progress, 0) / eventCategories.length
  );

  return (
    <ClientDashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Event Progress</h1>
          <p className="text-muted-foreground mt-1">Track the progress of your special event</p>
        </div>

        {/* Overall Progress Card */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Overall Event Progress</span>
              <Badge variant="outline" className="text-green-600 border-green-600">
                {overallProgress}% Complete
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={overallProgress} className="h-4 mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold text-green-600">4</p>
                <p className="text-muted-foreground">Completed</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-blue-600">3</p>
                <p className="text-muted-foreground">In Progress</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-orange-600">1</p>
                <p className="text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedCategory(category.id)}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <Badge className={`text-xs ${getStatusColor(category.status)}`}>
                          {getStatusIcon(category.status)}
                          <span className="ml-1 capitalize">{category.status.replace('-', ' ')}</span>
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">{category.progress}%</span>
                    </div>
                    <Progress value={category.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Tasks */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Detailed Task Progress</CardTitle>
              <div className="flex gap-2">
                <Button 
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('all')}
                >
                  All Tasks
                </Button>
                {selectedCategory !== 'all' && (
                  <Button variant="outline" size="sm" onClick={() => setSelectedCategory('all')}>
                    Clear Filter
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTasks.map((task) => (
                <div key={task.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={`text-xs ${getStatusColor(task.status)}`}>
                          {getStatusIcon(task.status)}
                          <span className="ml-1 capitalize">{task.status.replace('-', ' ')}</span>
                        </Badge>
                        <h4 className="font-semibold">{task.task}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Due: {new Date(task.dueDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {task.assignee}
                        </div>
                      </div>
                    </div>
                    {task.status === 'pending' && task.assignee === 'You' && (
                      <Button size="sm" variant="outline">
                        Take Action
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </ClientDashboardLayout>
  );
};

export default ClientEventProgress;