import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Star, 
  DollarSign,
  Building2,
  ChefHat,
  Palette,
  Camera,
  Music,
  Car
} from "lucide-react";
import DashboardLayout from '@/components/DashboardLayout';

// Sample data
const categories = [
  { id: "venue", name: "Venue", icon: Building2, image: "photo-1472396961693-142e6e269027" },
  { id: "catering", name: "Catering", icon: ChefHat, image: "photo-1465146344425-f00d5f5c8f07" },
  { id: "decorator", name: "Decorator", icon: Palette, image: "photo-1500673922987-e212871fec22" },
  { id: "photography", name: "Photography", icon: Camera, image: "photo-1488590528505-98d2b5aba04b" },
  { id: "entertainment", name: "Entertainment", icon: Music, image: "photo-1461749280684-dccba630e2f6" },
  { id: "transport", name: "Transport", icon: Car, image: "photo-1582562124811-c09040d0a901" }
];

const vendors = {
  catering: [
    {
      id: 1,
      name: "Gourmet Delights Catering",
      location: "Downtown, City Center",
      specialty: "Contemporary Fusion Cuisine",
      pricing: "$45-75 per person",
      rating: 4.8,
      reviews: 127,
      image: "photo-1465146344425-f00d5f5c8f07"
    },
    {
      id: 2,
      name: "Classic Events Catering",
      location: "Westside District",
      specialty: "Traditional & International",
      pricing: "$35-60 per person",
      rating: 4.6,
      reviews: 89,
      image: "photo-1500673922987-e212871fec22"
    }
  ],
  venue: [
    {
      id: 3,
      name: "Grand Ballroom Estate",
      location: "Historic District",
      specialty: "Luxury Wedding Venue",
      pricing: "$2,000-5,000 per event",
      rating: 4.9,
      reviews: 156,
      image: "photo-1472396961693-142e6e269027"
    }
  ]
};

const events = [
  { id: 1, name: "Sarah & John's Wedding" },
  { id: 2, name: "Corporate Annual Gala" },
  { id: 3, name: "Birthday Celebration" }
];

const eventVendors = {
  1: [
    { id: 1, name: "Gourmet Delights Catering", role: "Main Catering" },
    { id: 2, name: "Perfect Photos Studio", role: "Lead Photographer" },
    { id: 3, name: "Elegant Decor Co.", role: "Event Decorator" }
  ]
};

const tasks = [
  {
    id: 1,
    description: "Finalize wedding menu selection",
    vendor: "Gourmet Delights Catering",
    dueDate: "2024-01-15",
    status: "Pending",
    event: "Sarah & John's Wedding"
  },
  {
    id: 2,
    description: "Confirm photo session schedule",
    vendor: "Perfect Photos Studio",
    dueDate: "2024-01-12",
    status: "Completed",
    event: "Sarah & John's Wedding"
  },
  {
    id: 3,
    description: "Submit decoration proposal",
    vendor: "Elegant Decor Co.",
    dueDate: "2024-01-18",
    status: "Pending",
    event: "Corporate Annual Gala"
  }
];

const VendorsPage = () => {
  const [activeTab, setActiveTab] = useState("marketplace");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [taskFilter, setTaskFilter] = useState("All");
  const [taskEventFilter, setTaskEventFilter] = useState("All Events");
  const [searchTerm, setSearchTerm] = useState("");

  const CategoryCard = ({ category }: { category: typeof categories[0] }) => {
    const Icon = category.icon;
    return (
      <Card 
        className="cursor-pointer transition-all duration-200 hover:shadow-lg bg-card border-border shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)]"
        onClick={() => setSelectedCategory(category.id)}
      >
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <img 
              src={`https://images.unsplash.com/${category.image}?w=400&h=200&fit=crop`}
              alt={category.name}
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon className="h-8 w-8 text-primary" />
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </div>
        </CardContent>
      </Card>
    );
  };

  const VendorCard = ({ vendor }: { vendor: any }) => {
    return (
      <Card className="bg-card border-border shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)]">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <img 
                src={`https://images.unsplash.com/${vendor.image}?w=150&h=150&fit=crop`}
                alt={vendor.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{vendor.name}</h3>
              <div className="space-y-1 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{vendor.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  <span>{vendor.specialty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>{vendor.pricing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{vendor.rating} ({vendor.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm">More Details</Button>
                <Button variant="outline" size="sm">Check Availability</Button>
                <Button variant="outline" size="sm">Add to Event</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const EventVendorCard = ({ vendor }: { vendor: any }) => {
    return (
      <Card className="bg-card border-border">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{vendor.name}</h3>
              <p className="text-sm text-muted-foreground">{vendor.role}</p>
            </div>
            <Button variant="outline" size="sm">View Details</Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  const filteredTasks = tasks.filter(task => {
    const statusMatch = taskFilter === "All" || task.status === taskFilter;
    const eventMatch = taskEventFilter === "All Events" || task.event === taskEventFilter;
    return statusMatch && eventMatch;
  });

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Vendors</h1>
            <p className="text-muted-foreground">Manage your vendor network and relationships</p>
          </div>
          <Button className="shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)]">
            ADD NEW VENDOR
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)]">
            <TabsTrigger value="marketplace" className="rounded-full px-6">Vendor Marketplace</TabsTrigger>
            <TabsTrigger value="event-vendors" className="rounded-full px-6">Event Vendors</TabsTrigger>
            <TabsTrigger value="vendor-tasks" className="rounded-full px-6">Vendor Tasks</TabsTrigger>
          </TabsList>

          {/* Vendor Marketplace Tab */}
          <TabsContent value="marketplace" className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search vendors or services..." 
                className="pl-10 h-12 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {!selectedCategory ? (
              /* Category Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            ) : (
              /* Vendor List */
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedCategory(null)}
                  >
                    ← Back to Categories
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Advanced Filters
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {(vendors[selectedCategory as keyof typeof vendors] || []).map((vendor) => (
                    <VendorCard key={vendor.id} vendor={vendor} />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Event Vendors Tab */}
          <TabsContent value="event-vendors" className="space-y-6">
            <div className="space-y-4">
              <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                <SelectTrigger className="w-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)]">
                  <SelectValue placeholder="Select an Event to View Vendors" />
                </SelectTrigger>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event.id} value={event.id.toString()}>
                      {event.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {!selectedEvent ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No event selected</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Event Vendors</h3>
                  {(eventVendors[parseInt(selectedEvent) as keyof typeof eventVendors] || []).map((vendor) => (
                    <EventVendorCard key={vendor.id} vendor={vendor} />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          {/* Vendor Tasks Tab */}
          <TabsContent value="vendor-tasks" className="space-y-6">
            {/* Filters */}
            <div className="flex gap-4 items-center">
              <Select value={taskEventFilter} onValueChange={setTaskEventFilter}>
                <SelectTrigger className="w-64 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)]">
                  <SelectValue placeholder="Filter by Event" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Events">All Events</SelectItem>
                  {events.map((event) => (
                    <SelectItem key={event.id} value={event.name}>
                      {event.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                {["All", "Pending", "Completed"].map((status) => (
                  <Button
                    key={status}
                    variant={taskFilter === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTaskFilter(status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>

            {/* Task List Title */}
            <h3 className="text-lg font-semibold">Vendor Task List</h3>

            {/* Tasks Table */}
            <Card className="shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)]">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task Description</TableHead>
                      <TableHead>Assigned To (Vendor)</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>{task.description}</TableCell>
                        <TableCell>{task.vendor}</TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={task.status === "Completed" ? "default" : "destructive"}
                            className={task.status === "Completed" ? "bg-green-500 hover:bg-green-600" : ""}
                          >
                            {task.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VendorsPage;