import React, { useState } from 'react';
import ClientDashboardLayout from '@/components/ClientDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  FileText,
  Download,
  Share2,
  Eye,
  Upload,
  Search,
  Filter,
  Calendar,
  User,
  CheckCircle,
  Clock,
  AlertTriangle,
  File,
  Image,
  FileSpreadsheet
} from 'lucide-react';

const ClientDocuments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documents = [
    {
      id: 1,
      name: 'Wedding Contract - Final.pdf',
      category: 'contracts',
      type: 'pdf',
      size: '2.4 MB',
      uploadedBy: 'Sarah Johnson',
      uploadDate: '2024-08-15',
      status: 'signed',
      description: 'Main wedding planning contract with all terms and conditions'
    },
    {
      id: 2,
      name: 'Venue Rental Agreement.pdf',
      category: 'contracts',
      type: 'pdf',
      size: '1.8 MB',
      uploadedBy: 'Marriott Hotel',
      uploadDate: '2024-08-22',
      status: 'pending-signature',
      description: 'Venue rental agreement for Grand Ballroom'
    },
    {
      id: 3,
      name: 'Catering Menu & Pricing.pdf',
      category: 'vendor-docs',
      type: 'pdf',
      size: '3.2 MB',
      uploadedBy: 'Elite Catering',
      uploadDate: '2024-08-28',
      status: 'approved',
      description: 'Final menu selections with pricing breakdown'
    },
    {
      id: 4,
      name: 'Guest List Spreadsheet.xlsx',
      category: 'planning',
      type: 'excel',
      size: '0.8 MB',
      uploadedBy: 'You',
      uploadDate: '2024-08-30',
      status: 'in-progress',
      description: 'Complete guest list with contact information and RSVP status'
    },
    {
      id: 5,
      name: 'Photography Package Details.pdf',
      category: 'vendor-docs',
      type: 'pdf',
      size: '2.1 MB',
      uploadedBy: 'Alex Photography',
      uploadDate: '2024-09-01',
      status: 'pending-review',
      description: 'Photography package details and timeline'
    },
    {
      id: 6,
      name: 'Floral Design Sketches.jpg',
      category: 'design',
      type: 'image',
      size: '4.5 MB',
      uploadedBy: 'Emma Wilson',
      uploadDate: '2024-09-02',
      status: 'approved',
      description: 'Hand-drawn sketches of centerpiece designs'
    },
    {
      id: 7,
      name: 'Timeline & Schedule.pdf',
      category: 'planning',
      type: 'pdf',
      size: '1.2 MB',
      uploadedBy: 'Sarah Johnson',
      uploadDate: '2024-09-03',
      status: 'draft',
      description: 'Detailed day-of timeline and vendor schedule'
    },
    {
      id: 8,
      name: 'Insurance Certificate.pdf',
      category: 'legal',
      type: 'pdf',
      size: '0.9 MB',
      uploadedBy: 'Insurance Provider',
      uploadDate: '2024-08-20',
      status: 'approved',
      description: 'Event liability insurance certificate'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Documents', count: documents.length },
    { id: 'contracts', name: 'Contracts', count: documents.filter(doc => doc.category === 'contracts').length },
    { id: 'vendor-docs', name: 'Vendor Documents', count: documents.filter(doc => doc.category === 'vendor-docs').length },
    { id: 'planning', name: 'Planning', count: documents.filter(doc => doc.category === 'planning').length },
    { id: 'design', name: 'Design', count: documents.filter(doc => doc.category === 'design').length },
    { id: 'legal', name: 'Legal', count: documents.filter(doc => doc.category === 'legal').length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'signed': return 'bg-green-100 text-green-800 border-green-200';
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending-signature': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'pending-review': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'draft': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'signed':
      case 'approved': return <CheckCircle className="w-3 h-3" />;
      case 'pending-signature':
      case 'pending-review': return <Clock className="w-3 h-3" />;
      case 'in-progress': return <AlertTriangle className="w-3 h-3" />;
      default: return <FileText className="w-3 h-3" />;
    }
  };

  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <File className="w-6 h-6 text-red-600" />;
      case 'excel': return <FileSpreadsheet className="w-6 h-6 text-green-600" />;
      case 'image': return <Image className="w-6 h-6 text-blue-600" />;
      default: return <FileText className="w-6 h-6 text-gray-600" />;
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <ClientDashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Documents</h1>
            <p className="text-muted-foreground mt-1">Manage all your event-related documents</p>
          </div>
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            Upload Document
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{documents.length}</div>
              <div className="text-sm text-muted-foreground">Total Documents</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {documents.filter(doc => doc.status === 'signed' || doc.status === 'approved').length}
              </div>
              <div className="text-sm text-muted-foreground">Approved</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">
                {documents.filter(doc => doc.status.includes('pending')).length}
              </div>
              <div className="text-sm text-muted-foreground">Pending Review</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {(documents.reduce((acc, doc) => acc + parseFloat(doc.size), 0) / 1024).toFixed(1)} GB
              </div>
              <div className="text-sm text-muted-foreground">Total Size</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
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
            </div>
          </CardContent>
        </Card>

        {/* Documents List */}
        <Card>
          <CardHeader>
            <CardTitle>Documents ({filteredDocuments.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              {filteredDocuments.map((doc, index) => (
                <div key={doc.id} className={`p-4 ${index !== filteredDocuments.length - 1 ? 'border-b border-border' : ''}`}>
                  <div className="flex items-start space-x-4">
                    {/* File type icon */}
                    <div className="flex-shrink-0 mt-1">
                      {getFileTypeIcon(doc.type)}
                    </div>

                    {/* Document details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold truncate">{doc.name}</h3>
                            <Badge className={getStatusColor(doc.status)}>
                              {getStatusIcon(doc.status)}
                              <span className="ml-1 capitalize">{doc.status.replace('-', ' ')}</span>
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(doc.uploadDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{doc.uploadedBy}</span>
                            </div>
                            <span>{doc.size}</span>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex space-x-2 ml-4">
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
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-medium">Sign Pending Documents</div>
                  <div className="text-sm text-muted-foreground">
                    {documents.filter(doc => doc.status === 'pending-signature').length} documents awaiting signature
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-medium">Download All Contracts</div>
                  <div className="text-sm text-muted-foreground">
                    Get ZIP file with all signed contracts
                  </div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-medium">Share with Family</div>
                  <div className="text-sm text-muted-foreground">
                    Create shared folder for family access
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ClientDashboardLayout>
  );
};

export default ClientDocuments;