import React, { useState } from 'react';
import VendorDashboardLayout from '@/components/VendorDashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { 
  Send, 
  Plus, 
  Search, 
  Filter,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  User,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

const VendorTasksPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'I can help you manage your vendor tasks, track deadlines, and organize your workflow!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { type: 'user', message: chatInput },
        { type: 'ai', message: 'Let me help you optimize your task management and workflow efficiency.' }
      ]);
      setChatInput('');
    }
  };

  const tasks = [
    {
      id: 1,
      title: 'Prepare wedding photography equipment',
      description: 'Check all cameras, lenses, and lighting equipment for Sarah & John wedding',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2024-03-15',
      assignee: 'Alex Photography',
      eventName: 'Sarah & John Wedding',
      category: 'Equipment',
      estimatedHours: 3,
      completedHours: 1.5
    },
    {
      id: 2,
      title: 'Review venue layout for corporate event',
      description: 'Visit TechCorp office to plan photography setup and lighting',
      status: 'Pending',
      priority: 'Medium',
      dueDate: '2024-03-12',
      assignee: 'Alex Photography',
      eventName: 'TechCorp Annual Meeting',
      category: 'Planning',
      estimatedHours: 2,
      completedHours: 0
    },
    {
      id: 3,
      title: 'Edit engagement photo session',
      description: 'Post-process and deliver edited photos from Emma & David session',
      status: 'Completed',
      priority: 'High',
      dueDate: '2024-03-10',
      assignee: 'Alex Photography',
      eventName: 'Emma & David Engagement',
      category: 'Post-Production',
      estimatedHours: 6,
      completedHours: 6
    },
    {
      id: 4,
      title: 'Create portfolio presentation',
      description: 'Prepare portfolio showcase for potential new clients',
      status: 'In Progress',
      priority: 'Medium',
      dueDate: '2024-03-20',
      assignee: 'Alex Photography',
      eventName: 'Client Acquisition',
      category: 'Business Development',
      estimatedHours: 4,
      completedHours: 2
    },
    {
      id: 5,
      title: 'Backup and organize photo archives',
      description: 'Organize and backup all photos from February events',
      status: 'Pending',
      priority: 'Low',
      dueDate: '2024-03-25',
      assignee: 'Alex Photography',
      eventName: 'Archive Management',
      category: 'Administration',
      estimatedHours: 8,
      completedHours: 0
    }
  ];

  const stats = [
    { 
      title: 'Urgent Tasks', 
      value: tasks.filter(t => t.priority === 'High' && t.status !== 'Completed').length,
      icon: AlertTriangle, 
      color: 'text-red-500' 
    },
    { 
      title: 'In Progress', 
      value: tasks.filter(t => t.status === 'In Progress').length,
      icon: Clock, 
      color: 'text-yellow-500' 
    },
    { 
      title: 'Completed', 
      value: tasks.filter(t => t.status === 'Completed').length,
      icon: CheckCircle, 
      color: 'text-green-500' 
    },
    { 
      title: 'Pending', 
      value: tasks.filter(t => t.status === 'Pending').length,
      icon: Calendar, 
      color: 'text-blue-500' 
    },
  ];

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.eventName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <VendorDashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Task Management</h1>
          <p className="text-muted-foreground mt-2">Organize and track your vendor tasks efficiently</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* PLANIVA AI */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                PLANIVA AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-background/50 rounded-lg p-3 mb-3 h-32 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-2 rounded-lg text-xs ${
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
                  placeholder="Ask for help..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  className="flex-1 text-sm"
                />
                <Button onClick={sendChatMessage} size="sm">
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Task Summary Cards */}
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Task Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">Task Management</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create New Task</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Task Title</Label>
                        <Input id="title" placeholder="Enter task title" />
                      </div>
                      <div>
                        <Label htmlFor="event">Related Event</Label>
                        <Input id="event" placeholder="Event name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" placeholder="Task description" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="priority">Priority</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="High">High</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="Low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="dueDate">Due Date</Label>
                        <Input id="dueDate" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="estimatedHours">Estimated Hours</Label>
                        <Input id="estimatedHours" type="number" placeholder="Hours" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Create Task</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Filters */}
            <div className="flex gap-4 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium">Task</th>
                    <th className="text-left p-4 font-medium">Event</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Priority</th>
                    <th className="text-left p-4 font-medium">Due Date</th>
                    <th className="text-left p-4 font-medium">Progress</th>
                    <th className="text-left p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTasks.map((task) => (
                    <tr key={task.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <div>
                          <h4 className="font-medium">{task.title}</h4>
                          <p className="text-sm text-muted-foreground truncate max-w-xs">
                            {task.description}
                          </p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm">{task.eventName}</span>
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusColor(task.status)}>
                          {task.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="text-sm">{task.dueDate}</span>
                      </td>
                      <td className="p-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${(task.completedHours / task.estimatedHours) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {task.completedHours}/{task.estimatedHours}h
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedTask(task)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Task Detail Modal */}
        {selectedTask && (
          <Dialog open={!!selectedTask} onOpenChange={() => setSelectedTask(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{selectedTask.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Description</Label>
                  <p className="text-sm text-muted-foreground mt-1">{selectedTask.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Event</Label>
                    <p className="text-sm mt-1">{selectedTask.eventName}</p>
                  </div>
                  <div>
                    <Label>Category</Label>
                    <p className="text-sm mt-1">{selectedTask.category}</p>
                  </div>
                  <div>
                    <Label>Status</Label>
                    <Badge className={getStatusColor(selectedTask.status)}>
                      {selectedTask.status}
                    </Badge>
                  </div>
                  <div>
                    <Label>Priority</Label>
                    <Badge className={getPriorityColor(selectedTask.priority)}>
                      {selectedTask.priority}
                    </Badge>
                  </div>
                  <div>
                    <Label>Due Date</Label>
                    <p className="text-sm mt-1">{selectedTask.dueDate}</p>
                  </div>
                  <div>
                    <Label>Progress</Label>
                    <p className="text-sm mt-1">{selectedTask.completedHours}/{selectedTask.estimatedHours} hours</p>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setSelectedTask(null)}>
                    Close
                  </Button>
                  <Button>Edit Task</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </VendorDashboardLayout>
  );
};

export default VendorTasksPage;