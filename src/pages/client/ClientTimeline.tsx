import React, { useState } from 'react';
import ClientDashboardLayout from '@/components/ClientDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  MapPin,
  Users,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ClientTimeline = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const timelineEvents = [
    {
      id: 1,
      date: '2024-08-15',
      time: '10:00 AM',
      title: 'Initial Consultation Meeting',
      status: 'completed',
      type: 'meeting',
      description: 'First meeting to discuss your vision and requirements',
      location: 'Planiva Office, Downtown',
      attendees: ['You', 'Sarah Johnson (Planner)', 'Michael Chen (Designer)'],
      notes: 'Discussed theme preferences, budget allocation, and timeline expectations'
    },
    {
      id: 2,
      date: '2024-08-22',
      time: '2:00 PM',
      title: 'Venue Site Visit',
      status: 'completed',
      type: 'visit',
      description: 'Tour of Grand Ballroom at Marriott Hotel',
      location: 'Marriott Hotel, Grand Ballroom',
      attendees: ['You', 'Sarah Johnson', 'Venue Coordinator'],
      notes: 'Approved the space layout and discussed catering restrictions'
    },
    {
      id: 3,
      date: '2024-08-28',
      time: '11:30 AM',
      title: 'Menu Tasting Session',
      status: 'completed',
      type: 'tasting',
      description: 'Sample dishes and finalize catering menu',
      location: 'Elite Catering Kitchen',
      attendees: ['You', 'Chef Michael', 'Sarah Johnson'],
      notes: 'Selected three-course menu with vegetarian options'
    },
    {
      id: 4,
      date: '2024-09-05',
      time: '3:00 PM',
      title: 'Photography Consultation',
      status: 'upcoming',
      type: 'meeting',
      description: 'Discuss photography style and timeline',
      location: 'Alex Photography Studio',
      attendees: ['You', 'Alex Chen (Photographer)', 'Sarah Johnson'],
      notes: 'Review portfolio and discuss must-have shots'
    },
    {
      id: 5,
      date: '2024-09-12',
      time: '1:00 PM',
      title: 'Floral Design Review',
      status: 'upcoming',
      type: 'review',
      description: 'Final approval of centerpieces and bouquet designs',
      location: 'Bloom & Blossom Studio',
      attendees: ['You', 'Emma Wilson (Florist)', 'Sarah Johnson'],
      notes: 'Review color schemes and seasonal flower options'
    },
    {
      id: 6,
      date: '2024-09-20',
      time: '4:00 PM',
      title: 'Final Walkthrough',
      status: 'upcoming',
      type: 'walkthrough',
      description: 'Complete venue setup review',
      location: 'Marriott Hotel, Grand Ballroom',
      attendees: ['You', 'Sarah Johnson', 'All Vendors'],
      notes: 'Confirm all details are in place for the event'
    },
    {
      id: 7,
      date: '2024-10-15',
      time: '6:00 PM',
      title: 'Your Special Event',
      status: 'event',
      type: 'event',
      description: 'The big day arrives!',
      location: 'Marriott Hotel, Grand Ballroom',
      attendees: ['150 Guests', 'Full Event Team'],
      notes: 'All systems go for your perfect celebration'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'event': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'upcoming': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'event': return <Calendar className="w-4 h-4 text-purple-600" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'meeting': return <Users className="w-5 h-5" />;
      case 'visit': return <MapPin className="w-5 h-5" />;
      case 'tasting': return <Clock className="w-5 h-5" />;
      case 'review': return <CheckCircle className="w-5 h-5" />;
      case 'walkthrough': return <MapPin className="w-5 h-5" />;
      case 'event': return <Calendar className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <ClientDashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Event Timeline</h1>
          <p className="text-muted-foreground mt-1">Your complete event planning journey</p>
        </div>

        {/* Timeline Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Timeline Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-muted-foreground">Completed Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-muted-foreground">Upcoming Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1</div>
                <div className="text-sm text-muted-foreground">Main Event</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Events */}
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline line */}
              {index < timelineEvents.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border"></div>
              )}
              
              <Card className={`ml-14 ${event.status === 'event' ? 'border-purple-200 bg-purple-50/50' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Timeline dot */}
                    <div className={`absolute -left-8 mt-2 w-4 h-4 rounded-full border-4 ${
                      event.status === 'completed' ? 'bg-green-500 border-green-200' :
                      event.status === 'upcoming' ? 'bg-blue-500 border-blue-200' :
                      event.status === 'event' ? 'bg-purple-500 border-purple-200' :
                      'bg-gray-300 border-gray-100'
                    }`}></div>

                    {/* Event icon */}
                    <div className={`p-2 rounded-lg ${
                      event.status === 'completed' ? 'bg-green-100' :
                      event.status === 'upcoming' ? 'bg-blue-100' :
                      event.status === 'event' ? 'bg-purple-100' :
                      'bg-gray-100'
                    }`}>
                      {getTypeIcon(event.type)}
                    </div>

                    {/* Event details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-lg">{event.title}</h3>
                            <Badge className={getStatusColor(event.status)}>
                              {getStatusIcon(event.status)}
                              <span className="ml-1 capitalize">{event.status}</span>
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">{event.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                        >
                          {expandedEvent === event.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </Button>
                      </div>

                      {/* Expanded details */}
                      {expandedEvent === event.id && (
                        <div className="mt-4 pt-4 border-t border-border space-y-3">
                          <div>
                            <h4 className="font-medium mb-2">Attendees:</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.attendees.map((attendee, idx) => (
                                <Badge key={idx} variant="secondary">{attendee}</Badge>
                              ))}
                            </div>
                          </div>
                          {event.notes && (
                            <div>
                              <h4 className="font-medium mb-1">Notes:</h4>
                              <p className="text-sm text-muted-foreground">{event.notes}</p>
                            </div>
                          )}
                          {event.status === 'upcoming' && (
                            <div className="flex space-x-2 pt-2">
                              <Button size="sm" variant="outline">
                                <Phone className="w-3 h-3 mr-1" />
                                Call Organizer
                              </Button>
                              <Button size="sm" variant="outline">
                                <Mail className="w-3 h-3 mr-1" />
                                Send Email
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </ClientDashboardLayout>
  );
};

export default ClientTimeline;