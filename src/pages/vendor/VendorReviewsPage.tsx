import React, { useState } from 'react';
import VendorDashboardLayout from '@/components/VendorDashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  Send, 
  Star, 
  TrendingUp,
  MessageCircle,
  ThumbsUp,
  Filter,
  Search,
  Reply
} from 'lucide-react';

const VendorReviewsPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'I can help you manage reviews, respond to feedback, and improve your rating!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { type: 'user', message: chatInput },
        { type: 'ai', message: 'Let me help you craft professional responses and improve your customer satisfaction.' }
      ]);
      setChatInput('');
    }
  };

  const reviews = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      eventName: 'Wedding Photography',
      rating: 5,
      date: '2024-02-28',
      comment: 'Alex was absolutely amazing! The photos turned out better than we could have ever imagined. Professional, creative, and captured every precious moment perfectly.',
      response: 'Thank you so much, Sarah! It was such a joy capturing your special day. Wishing you both a lifetime of happiness!',
      helpful: 12
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      eventName: 'Corporate Event',
      rating: 5,
      date: '2024-02-25',
      comment: 'Excellent work! Alex was punctual, professional, and delivered high-quality photos that exceeded our expectations. Will definitely book again.',
      response: '',
      helpful: 8
    },
    {
      id: 3,
      clientName: 'Emma Williams',
      eventName: 'Birthday Party',
      rating: 4,
      date: '2024-02-20',
      comment: 'Great photographer with good attention to detail. The photos came out nice, though delivery took a bit longer than expected.',
      response: 'Thank you for your feedback, Emma! I apologize for the delay in delivery. I\'ve since improved my workflow to ensure faster turnaround times.',
      helpful: 5
    },
    {
      id: 4,
      clientName: 'David Rodriguez',
      eventName: 'Family Portrait',
      rating: 5,
      date: '2024-02-15',
      comment: 'Fantastic experience from start to finish. Alex made our family feel comfortable and the results were stunning. Highly recommended!',
      response: 'It was wonderful working with your beautiful family, David! Thank you for choosing Alex Photography.',
      helpful: 15
    },
    {
      id: 5,
      clientName: 'Lisa Thompson',
      eventName: 'Engagement Session',
      rating: 3,
      date: '2024-02-10',
      comment: 'Photos were good but communication could have been better. Would have appreciated more guidance during the shoot.',
      response: '',
      helpful: 3
    }
  ];

  const stats = [
    { label: 'Average Rating', value: '4.8/5', icon: Star, color: 'text-yellow-500', count: '(47 reviews)' },
    { label: 'Recent Reviews', value: '12', icon: MessageCircle, color: 'text-blue-500', count: 'This month' },
    { label: 'Response Rate', value: '89%', icon: Reply, color: 'text-green-500', count: 'Last 30 days' },
    { label: 'Helpful Votes', value: '156', icon: ThumbsUp, color: 'text-purple-500', count: 'Total' },
  ];

  const ratingDistribution = [
    { stars: 5, count: 32, percentage: 68 },
    { stars: 4, count: 8, percentage: 17 },
    { stars: 3, count: 5, percentage: 11 },
    { stars: 2, count: 1, percentage: 2 },
    { stars: 1, count: 1, percentage: 2 }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = ratingFilter === 'all' || review.rating.toString() === ratingFilter;
    return matchesSearch && matchesRating;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <VendorDashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Reviews & Ratings</h1>
          <p className="text-muted-foreground mt-2">Manage customer feedback and build your reputation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* PLANIVA AI */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  PLANIVA AI - REVIEW MANAGER
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
                    placeholder="Ask about review responses, reputation management, or feedback analysis..."
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

            {/* Reviews List */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
                <div className="flex gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search reviews..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={ratingFilter} onValueChange={setRatingFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                      <SelectItem value="4">4 Stars</SelectItem>
                      <SelectItem value="3">3 Stars</SelectItem>
                      <SelectItem value="2">2 Stars</SelectItem>
                      <SelectItem value="1">1 Star</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {filteredReviews.map((review) => (
                    <div key={review.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{review.clientName}</h3>
                            {renderStars(review.rating)}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.eventName} • {review.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{review.helpful}</span>
                        </div>
                      </div>
                      
                      <p className="text-foreground mb-4">{review.comment}</p>
                      
                      {review.response ? (
                        <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-primary">
                          <div className="flex items-center gap-2 mb-2">
                            <Reply className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Your Response</span>
                          </div>
                          <p className="text-sm">{review.response}</p>
                        </div>
                      ) : (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Reply className="h-4 w-4 mr-2" />
                              Respond
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Respond to Review</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="bg-muted/50 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="font-medium">{review.clientName}</span>
                                  {renderStars(review.rating)}
                                </div>
                                <p className="text-sm">{review.comment}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Your Response</label>
                                <Textarea 
                                  placeholder="Write a professional response..."
                                  className="mt-1"
                                  rows={4}
                                />
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm">Post Response</Button>
                                <Button variant="outline" size="sm">Cancel</Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats and Distribution */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label.toUpperCase()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.count}</p>
                </CardContent>
              </Card>
            ))}

            {/* Rating Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Rating Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-12">
                      <span className="text-sm">{item.stars}</span>
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    </div>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{item.count}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default VendorReviewsPage;