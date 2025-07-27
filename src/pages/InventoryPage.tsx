import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Package, 
  Plus, 
  Send, 
  AlertTriangle,
  CheckCircle,
  MapPin,
  Search,
  Filter,
  Package2,
  Truck
} from 'lucide-react';
import { cn } from '@/lib/utils';

const InventoryPage = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: 'Hello! I can help you track inventory levels, predict supply needs, and optimize storage efficiency. What inventory questions do you have?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const inventoryStats = [
    { label: 'Total Items', value: 324, color: 'text-blue-600' },
    { label: 'Low Stock', value: 12, color: 'text-orange-600' },
    { label: 'Out of Stock', value: 3, color: 'text-red-600' },
    { label: 'Total Value', value: '$45K', color: 'text-green-600' }
  ];

  const inventoryItems = [
    {
      id: 1,
      name: 'Round Tables (8-seat)',
      category: 'Furniture',
      quantity: 25,
      minStock: 20,
      maxStock: 50,
      location: 'Warehouse A - Section 1',
      unitCost: 85,
      totalValue: 2125,
      status: 'In Stock',
      lastRestocked: '2024-01-08',
      supplier: 'Event Furniture Co.'
    },
    {
      id: 2,
      name: 'LED String Lights (100ft)',
      category: 'Lighting',
      quantity: 8,
      minStock: 15,
      maxStock: 30,
      location: 'Warehouse B - Section 3',
      unitCost: 35,
      totalValue: 280,
      status: 'Low Stock',
      lastRestocked: '2023-12-20',
      supplier: 'Bright Lights Inc.'
    },
    {
      id: 3,
      name: 'White Linens (Table)',
      category: 'Textiles',
      quantity: 0,
      minStock: 25,
      maxStock: 75,
      location: 'Warehouse A - Section 2',
      unitCost: 12,
      totalValue: 0,
      status: 'Out of Stock',
      lastRestocked: '2023-11-15',
      supplier: 'Linen Express'
    },
    {
      id: 4,
      name: 'Sound System (PA)',
      category: 'Audio Equipment',
      quantity: 6,
      minStock: 3,
      maxStock: 10,
      location: 'Equipment Room',
      unitCost: 450,
      totalValue: 2700,
      status: 'In Stock',
      lastRestocked: '2024-01-12',
      supplier: 'Audio Pro Solutions'
    },
    {
      id: 5,
      name: 'Folding Chairs',
      category: 'Furniture',
      quantity: 150,
      minStock: 100,
      maxStock: 200,
      location: 'Warehouse A - Section 1',
      unitCost: 25,
      totalValue: 3750,
      status: 'In Stock',
      lastRestocked: '2024-01-05',
      supplier: 'Event Furniture Co.'
    }
  ];

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, 
      { type: 'user', content: chatInput },
      { type: 'ai', content: 'Great question! Based on your event schedule, I recommend restocking LED lights and white linens within the next week. I can also predict optimal inventory levels for the upcoming wedding season.' }
    ]);
    setChatInput('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-500';
      case 'Low Stock': return 'bg-orange-500';
      case 'Out of Stock': return 'bg-red-500';
      case 'Overstock': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStockIcon = (status: string) => {
    switch (status) {
      case 'In Stock': return <CheckCircle className="h-4 w-4" />;
      case 'Low Stock': return <AlertTriangle className="h-4 w-4" />;
      case 'Out of Stock': return <Package className="h-4 w-4" />;
      default: return <Package2 className="h-4 w-4" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inventory</h1>
            <p className="text-muted-foreground">Track and manage your event inventory and supplies</p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            <Plus className="mr-2 h-5 w-5" />
            ADD INVENTORY ITEM
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
                    placeholder="Ask about inventory..." 
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

          {/* Right Column - Inventory Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {inventoryStats.map((stat, index) => (
                <Card key={index} className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
                  <CardContent className="p-6 text-center">
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Inventory Management Section */}
        <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">Inventory Management</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search inventory..." 
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
                  <TableHead>Item</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Unit Cost</TableHead>
                  <TableHead>Total Value</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventoryItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="font-medium">{item.name}</div>
                    </TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>
                      <div>
                        <span className="font-medium">{item.quantity}</span>
                        <div className="text-xs text-muted-foreground">
                          Min: {item.minStock} | Max: {item.maxStock}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(item.status)} text-white flex items-center w-fit`}>
                        {getStockIcon(item.status)}
                        <span className="ml-1">{item.status}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        {item.location}
                      </div>
                    </TableCell>
                    <TableCell>${item.unitCost}</TableCell>
                    <TableCell>${item.totalValue.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 mr-2 text-muted-foreground" />
                        {item.supplier}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Restock</Button>
                        <Button variant="outline" size="sm">Edit</Button>
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

export default InventoryPage;