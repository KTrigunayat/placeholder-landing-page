import React from 'react';
import ClientDashboardLayout from '@/components/ClientDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Camera,
  DollarSign,
  BarChart3
} from 'lucide-react';

const ClientDashboard = () => {
  const eventDetails = {
    name: "Sarah & Michael's Wedding",
    date: "June 15, 2024",
    venue: "Grand Ballroom, Marriott Hotel",
    guests: 150,
    budget: "$45,000",
    progress: 75
  };

  const recentUpdates = [
    {
      id: 1,
      message: "Catering menu finalized and approved",
      time: "2 hours ago",
      type: "success"
    },
    {
      id: 2,
      message: "Venue decoration planning in progress",
      time: "1 day ago",
      type: "info"
    },
    {
      id: 3,
      message: "Photographer confirmation required",
      time: "2 days ago",
      type: "warning"
    }
  ];

  const pendingDecisions = [
    "Confirm final guest count",
    "Approve floral arrangements",
    "Select wedding cake design"
  ];

  return (
    <ClientDashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
            <p className="text-muted-foreground mt-1">Track your event progress and stay updated</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Planner
          </Button>
        </div>

        {/* Event Overview Card */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{eventDetails.name}</CardTitle>
                <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {eventDetails.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {eventDetails.venue}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {eventDetails.guests} guests
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600">
                In Progress
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">{eventDetails.progress}%</span>
                </div>
                <Progress value={eventDetails.progress} className="h-3" />
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Budget Utilized</span>
                <span className="font-medium">{eventDetails.budget}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Tasks Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Pending Tasks</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">New Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-muted-foreground">Budget Used</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUpdates.map((update) => (
                  <div key={update.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      update.type === 'success' ? 'bg-green-500' :
                      update.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">{update.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{update.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Decisions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                Pending Decisions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingDecisions.map((decision, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">{decision}</span>
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Decisions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <BarChart3 className="w-6 h-6 mb-2" />
                View Progress
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <MessageSquare className="w-6 h-6 mb-2" />
                Messages
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Camera className="w-6 h-6 mb-2" />
                Gallery
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Calendar className="w-6 h-6 mb-2" />
                Timeline
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ClientDashboardLayout>
  );
};

export default ClientDashboard;