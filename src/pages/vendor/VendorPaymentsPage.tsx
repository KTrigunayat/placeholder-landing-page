import React, { useState } from 'react';
import VendorDashboardLayout from '@/components/VendorDashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Send, 
  DollarSign, 
  TrendingUp,
  Calendar,
  CreditCard,
  Download,
  Eye,
  Search,
  Filter
} from 'lucide-react';

const VendorPaymentsPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'I can help you track payments, understand your earnings, and manage financial records!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { type: 'user', message: chatInput },
        { type: 'ai', message: 'Let me help you with your payment and financial management questions.' }
      ]);
      setChatInput('');
    }
  };

  const payments = [
    {
      id: 'PAY001',
      clientName: 'Sarah Johnson',
      eventName: 'Wedding Photography',
      amount: '$2,500',
      date: '2024-03-15',
      status: 'paid',
      method: 'Credit Card',
      invoiceId: 'INV-001',
      dueDate: '2024-03-01'
    },
    {
      id: 'PAY002',
      clientName: 'Tech Corp',
      eventName: 'Corporate Event',
      amount: '$1,800',
      date: '2024-03-10',
      status: 'pending',
      method: 'Bank Transfer',
      invoiceId: 'INV-002',
      dueDate: '2024-03-20'
    },
    {
      id: 'PAY003',
      clientName: 'Emma Williams',
      eventName: 'Birthday Party',
      amount: '$950',
      date: '2024-02-28',
      status: 'paid',
      method: 'PayPal',
      invoiceId: 'INV-003',
      dueDate: '2024-02-25'
    },
    {
      id: 'PAY004',
      clientName: 'David Chen',
      eventName: 'Family Portrait',
      amount: '$450',
      date: '2024-02-20',
      status: 'overdue',
      method: 'Credit Card',
      invoiceId: 'INV-004',
      dueDate: '2024-02-15'
    }
  ];

  const stats = [
    { label: 'Total Revenue', value: '$28,450', icon: DollarSign, color: 'text-green-500', change: '+15%' },
    { label: 'This Month', value: '$8,450', icon: TrendingUp, color: 'text-blue-500', change: '+12%' },
    { label: 'Pending', value: '$3,200', icon: Calendar, color: 'text-yellow-500', change: '-5%' },
    { label: 'Overdue', value: '$850', icon: CreditCard, color: 'text-red-500', change: '+2%' },
  ];

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.invoiceId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <VendorDashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Payment Management</h1>
          <p className="text-muted-foreground mt-2">Track earnings, invoices, and payment status</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* PLANIVA AI */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  PLANIVA AI - FINANCIAL ASSISTANT
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
                    placeholder="Ask about payments, invoicing, or financial reports..."
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

            {/* Payment History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Payment History
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </CardTitle>
                <div className="flex gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search payments..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.invoiceId}</TableCell>
                        <TableCell>{payment.clientName}</TableCell>
                        <TableCell>{payment.eventName}</TableCell>
                        <TableCell className="font-medium">{payment.amount}</TableCell>
                        <TableCell>{payment.dueDate}</TableCell>
                        <TableCell>
                          <Badge variant={
                            payment.status === 'paid' ? 'default' : 
                            payment.status === 'pending' ? 'secondary' : 
                            'destructive'
                          }>
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{payment.method}</TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Payment Details - {payment.invoiceId}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium">Client</label>
                                    <p>{payment.clientName}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Event</label>
                                    <p>{payment.eventName}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Amount</label>
                                    <p className="font-medium text-green-600">{payment.amount}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Payment Method</label>
                                    <p>{payment.method}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Due Date</label>
                                    <p>{payment.dueDate}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Status</label>
                                    <Badge variant={payment.status === 'paid' ? 'default' : 'secondary'}>
                                      {payment.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="flex gap-2 pt-4">
                                  <Button variant="outline" size="sm">
                                    <Download className="h-4 w-4 mr-1" />
                                    Download Invoice
                                  </Button>
                                  {payment.status === 'pending' && (
                                    <Button size="sm">
                                      Send Reminder
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className={`h-4 w-4 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`} />
                    <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change} from last month
                    </span>
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
                  <DollarSign className="h-4 w-4 mr-2" />
                  Create Invoice
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Payment Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </VendorDashboardLayout>
  );
};

export default VendorPaymentsPage;