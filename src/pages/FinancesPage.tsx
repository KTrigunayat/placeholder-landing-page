import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  DollarSign, 
  Plus, 
  Send, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Search,
  Filter,
  CreditCard,
  Wallet
} from 'lucide-react';
import { cn } from '@/lib/utils';

const FinancesPage = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: 'Hello! I can help you track expenses, analyze revenue trends, and optimize your event budgets. What financial insights do you need?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const financialStats = [
    { label: 'Total Revenue', value: '$127,450', color: 'text-green-600', trend: 'up', change: '+12%' },
    { label: 'Total Expenses', value: '$89,230', color: 'text-red-600', trend: 'up', change: '+8%' },
    { label: 'Net Profit', value: '$38,220', color: 'text-blue-600', trend: 'up', change: '+18%' },
    { label: 'Pending Payments', value: '$15,750', color: 'text-orange-600', trend: 'down', change: '-5%' }
  ];

  const transactions = [
    {
      id: 1,
      description: 'Johnson Wedding - Final Payment',
      amount: 12500,
      type: 'Income',
      category: 'Event Payment',
      date: '2024-01-10',
      event: 'Johnson Wedding',
      status: 'Completed',
      method: 'Bank Transfer'
    },
    {
      id: 2,
      description: 'Venue Rental - Grand Ballroom',
      amount: -3500,
      type: 'Expense',
      category: 'Venue',
      date: '2024-01-08',
      event: 'Johnson Wedding',
      status: 'Paid',
      method: 'Credit Card'
    },
    {
      id: 3,
      description: 'Catering Deposit - Gourmet Delights',
      amount: -2000,
      type: 'Expense',
      category: 'Catering',
      date: '2024-01-06',
      event: 'Tech Conference',
      status: 'Paid',
      method: 'Check'
    },
    {
      id: 4,
      description: 'Corporate Event - Tech Conference',
      amount: 25000,
      type: 'Income',
      category: 'Event Payment',
      date: '2024-01-05',
      event: 'Tech Conference',
      status: 'Pending',
      method: 'Wire Transfer'
    },
    {
      id: 5,
      description: 'Photography Services - Perfect Photos',
      amount: -1800,
      type: 'Expense',
      category: 'Photography',
      date: '2024-01-04',
      event: 'Birthday Gala',
      status: 'Paid',
      method: 'Bank Transfer'
    }
  ];

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, 
      { type: 'user', content: chatInput },
      { type: 'ai', content: 'Great question! I can analyze your spending patterns and suggest budget optimizations. Based on your data, I see opportunities to reduce venue costs by 15% through better negotiation strategies.' }
    ]);
    setChatInput('');
  };

  const getTransactionTypeColor = (type: string) => {
    return type === 'Income' ? 'text-green-600' : 'text-red-600';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'Paid': return 'bg-blue-500';
      case 'Pending': return 'bg-orange-500';
      case 'Overdue': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Finances</h1>
            <p className="text-muted-foreground">Track expenses, revenue, and financial performance</p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            <Plus className="mr-2 h-5 w-5" />
            ADD TRANSACTION
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - AI Widget */}
          <div className="lg:col-span-1">
            <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">PLANVIA AI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ScrollArea className="h-48 w-full">
                  <div className="space-y-3 pr-4">
                    {chatMessages.map((message, index) => (
                      <div
                        key={index}
                        className={cn(
                          "p-3 rounded-lg max-w-[85%]",
                          message.type === 'ai' 
                            ? "bg-muted text-foreground" 
                            : "bg-primary text-primary-foreground ml-auto"
                        )}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex items-center space-x-2">
                  <Input 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask about finances..." 
                    className="flex-1"
                    onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()}
                  />
                  <Button size="icon" variant="outline" onClick={sendChatMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Financial Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {financialStats.map((stat, index) => (
                <Card key={index} className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
                  <CardContent className="p-6">
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <div className={`flex items-center text-xs mt-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.trend === 'up' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                      {stat.change}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Financial Transactions Section */}
        <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">Financial Transactions</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search transactions..." 
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <div className="font-medium">{transaction.description}</div>
                    </TableCell>
                    <TableCell>
                      <div className={`font-medium ${getTransactionTypeColor(transaction.type)}`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>{transaction.event}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        {new Date(transaction.date).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(transaction.status)} text-white`}>
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {transaction.method.includes('Card') ? 
                          <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" /> : 
                          <Wallet className="h-4 w-4 mr-2 text-muted-foreground" />
                        }
                        {transaction.method}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Receipt</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FinancesPage;