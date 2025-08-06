import React, { useState } from 'react';
import ClientDashboardLayout from '@/components/ClientDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Eye,
  MessageSquare,
  Calendar,
  User,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  FileText
} from 'lucide-react';

const ClientDecisions = () => {
  const [selectedDecision, setSelectedDecision] = useState(null);
  const [feedback, setFeedback] = useState('');

  const decisions = [
    {
      id: 1,
      title: 'Venue Layout Design',
      category: 'Venue',
      status: 'pending',
      priority: 'high',
      description: 'Review and approve the final venue layout including seating arrangements, dance floor positioning, and ceremony setup.',
      submittedBy: 'Sarah Johnson',
      submittedDate: '2024-02-20',
      dueDate: '2024-02-25',
      attachments: ['floor_plan_v2.pdf', 'seating_chart.png'],
      details: {
        options: [
          {
            id: 1,
            name: 'Traditional Layout',
            description: 'Classic arrangement with ceremony at front, reception area behind',
            image: '/api/placeholder/300/200'
          },
          {
            id: 2,
            name: 'Garden Style Layout',
            description: 'Circular seating arrangement with ceremony in center',
            image: '/api/placeholder/300/200'
          },
          {
            id: 3,
            name: 'Modern Layout',
            description: 'Contemporary setup with lounge areas and flexible spaces',
            image: '/api/placeholder/300/200'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Catering Menu Final Selection',
      category: 'Catering',
      status: 'approved',
      priority: 'high',
      description: 'Three-course dinner menu with vegetarian and gluten-free options.',
      submittedBy: 'Chef Michael',
      submittedDate: '2024-02-15',
      dueDate: '2024-02-20',
      approvedDate: '2024-02-18',
      feedback: 'Perfect selection! The salmon option looks amazing and the vegetarian alternatives are great.',
      details: {
        selectedOption: 'Premium Menu Package',
        notes: 'Includes premium wine pairing and late-night snack station'
      }
    },
    {
      id: 3,
      title: 'Floral Arrangement Design',
      category: 'Decoration',
      status: 'pending',
      priority: 'medium',
      description: 'Centerpiece designs and bridal bouquet arrangements for approval.',
      submittedBy: 'Bloom & Blossom Florists',
      submittedDate: '2024-02-18',
      dueDate: '2024-02-28',
      details: {
        options: [
          {
            id: 1,
            name: 'Classic White & Blush',
            description: 'Traditional roses and peonies in white and soft pink',
            image: '/api/placeholder/300/200'
          },
          {
            id: 2,
            name: 'Wildflower Garden',
            description: 'Mixed seasonal flowers with greenery for natural look',
            image: '/api/placeholder/300/200'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Photography Package Selection',
      category: 'Photography',
      status: 'revision-requested',
      priority: 'medium',
      description: 'Review photography package options and timeline.',
      submittedBy: 'Alex Photography',
      submittedDate: '2024-02-16',
      dueDate: '2024-02-22',
      feedback: 'Could we include more candid shots during the reception? Also, what about drone photography options?',
      details: {
        requestedChanges: 'Add reception candid package and drone photography option'
      }
    },
    {
      id: 5,
      title: 'Music & Entertainment Schedule',
      category: 'Entertainment',
      status: 'pending',
      priority: 'low',
      description: 'DJ playlist preferences and special song requests.',
      submittedBy: 'Beat Masters DJ',
      submittedDate: '2024-02-19',
      dueDate: '2024-03-05',
      details: {
        options: [
          {
            id: 1,
            name: 'Classic & Contemporary Mix',
            description: 'Blend of timeless hits and current popular songs'
          },
          {
            id: 2,
            name: 'Genre-Specific Playlist',
            description: 'Focus on specific genres based on your preferences'
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Transportation Arrangements',
      category: 'Logistics',
      status: 'approved',
      priority: 'low',
      description: 'Guest shuttle service and bridal party transportation.',
      submittedBy: 'Sarah Johnson',
      submittedDate: '2024-02-10',
      dueDate: '2024-02-15',
      approvedDate: '2024-02-12',
      feedback: 'Luxury bus for guests and separate limo for bridal party works perfectly!',
      details: {
        selectedOption: 'Premium Transportation Package'
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-100 border-green-200';
      case 'pending': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'revision-requested': return 'text-blue-600 bg-blue-100 border-blue-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'revision-requested': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-orange-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  const handleApprove = (decisionId: number) => {
    // Handle approval logic
    console.log('Approving decision:', decisionId);
  };

  const handleReject = (decisionId: number) => {
    // Handle rejection logic
    console.log('Rejecting decision:', decisionId);
  };

  const handleRequestRevision = (decisionId: number) => {
    // Handle revision request logic
    console.log('Requesting revision for decision:', decisionId);
  };

  const pendingCount = decisions.filter(d => d.status === 'pending').length;
  const approvedCount = decisions.filter(d => d.status === 'approved').length;
  const revisionCount = decisions.filter(d => d.status === 'revision-requested').length;

  return (
    <ClientDashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Decision Center</h1>
          <p className="text-muted-foreground mt-1">Review and approve event planning decisions</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold">{pendingCount}</p>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">{approvedCount}</p>
                  <p className="text-sm text-muted-foreground">Approved</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">{revisionCount}</p>
                  <p className="text-sm text-muted-foreground">Needs Revision</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <FileText className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold">{decisions.length}</p>
                  <p className="text-sm text-muted-foreground">Total Decisions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Decisions List */}
        <Card>
          <CardHeader>
            <CardTitle>All Decisions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {decisions.map((decision) => (
                <div key={decision.id} className={`border-l-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors ${getPriorityColor(decision.priority)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={`text-xs ${getStatusColor(decision.status)}`}>
                          {getStatusIcon(decision.status)}
                          <span className="ml-1 capitalize">{decision.status.replace('-', ' ')}</span>
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {decision.category}
                        </Badge>
                        <Badge variant={decision.priority === 'high' ? 'destructive' : decision.priority === 'medium' ? 'default' : 'secondary'} className="text-xs">
                          {decision.priority} priority
                        </Badge>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2">{decision.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{decision.description}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {decision.submittedBy}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Due: {new Date(decision.dueDate).toLocaleDateString()}
                        </div>
                      </div>

                      {decision.feedback && (
                        <div className="bg-muted/50 rounded-lg p-3 mb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <MessageSquare className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Your Feedback:</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{decision.feedback}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 ml-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{decision.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold mb-2">Description</h4>
                              <p className="text-muted-foreground">{decision.description}</p>
                            </div>

                            {decision.details?.options && (
                              <div>
                                <h4 className="font-semibold mb-4">Available Options</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {decision.details.options.map((option) => (
                                    <Card key={option.id} className="cursor-pointer hover:border-primary transition-colors">
                                      <CardContent className="p-4">
                                        {option.image && (
                                          <img src={option.image} alt={option.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                                        )}
                                        <h5 className="font-semibold mb-2">{option.name}</h5>
                                        <p className="text-sm text-muted-foreground">{option.description}</p>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            )}

                            {decision.status === 'pending' && (
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2">Add Feedback (Optional)</h4>
                                  <Textarea
                                    placeholder="Add any comments or questions..."
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    className="min-h-[80px]"
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <Button onClick={() => handleApprove(decision.id)} className="bg-green-600 hover:bg-green-700">
                                    <ThumbsUp className="w-4 h-4 mr-2" />
                                    Approve
                                  </Button>
                                  <Button variant="outline" onClick={() => handleRequestRevision(decision.id)}>
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    Request Revision
                                  </Button>
                                  <Button variant="destructive" onClick={() => handleReject(decision.id)}>
                                    <ThumbsDown className="w-4 h-4 mr-2" />
                                    Reject
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>

                      {decision.status === 'pending' && (
                        <>
                          <Button size="sm" onClick={() => handleApprove(decision.id)} className="bg-green-600 hover:bg-green-700">
                            <ThumbsUp className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleRequestRevision(decision.id)}>
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
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

export default ClientDecisions;