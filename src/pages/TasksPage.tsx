import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CheckSquare, Plus, Clock, AlertTriangle, Calendar, Filter, MessageCircle, User, X } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  category: string;
  assignedTo: string;
  deadline: string;
  priority: 'high' | 'medium' | 'low';
  status: 'Pending' | 'In Progress' | 'Completed';
  description: string;
  comments: { user: string; date: string; message: string; }[];
}

const TasksPage = () => {
  const [createTaskOpen, setCreateTaskOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [newComment, setNewComment] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m here to help you manage your tasks efficiently. How can I assist you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const mockTasks: Task[] = [
    {
      id: '1',
      title: 'Send venue contract',
      category: 'Venue',
      assignedTo: 'Event Planner',
      deadline: 'May 15, 2025',
      priority: 'high',
      status: 'Pending',
      description: 'Finalize and send the contract to the venue. Make sure all requirements are clearly specified, including setup times, space allocations, and any special arrangements needed.',
      comments: [
        { user: 'Alex Morgan', date: 'May 5, 2025 - 10:23 AM', message: 'Let\'s make sure we include the special lighting requirements in the venue contract.' }
      ]
    },
    {
      id: '2',
      title: 'Confirm menu selection with caterer',
      category: 'Catering',
      assignedTo: 'Elite Catering',
      deadline: 'May 20, 2025',
      priority: 'medium',
      status: 'In Progress',
      description: 'Review and confirm the final menu selection with the catering team.',
      comments: []
    },
    {
      id: '3',
      title: 'Finalize floral arrangements',
      category: 'Decor',
      assignedTo: 'Floral Elegance',
      deadline: 'May 25, 2025',
      priority: 'medium',
      status: 'Pending',
      description: 'Complete the floral arrangement design and confirm delivery schedule.',
      comments: []
    },
    {
      id: '4',
      title: 'Send invitations to guests',
      category: 'Planning',
      assignedTo: 'Event Planner',
      deadline: 'May 10, 2025',
      priority: 'high',
      status: 'Completed',
      description: 'Design and send digital invitations to all confirmed guests.',
      comments: []
    },
    {
      id: '5',
      title: 'Book photographer',
      category: 'Vendors',
      assignedTo: 'Event Planner',
      deadline: 'May 12, 2025',
      priority: 'high',
      status: 'Completed',
      description: 'Secure a professional photographer for the event.',
      comments: []
    }
  ];

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    const newMessages = [
      ...chatMessages,
      { role: 'user', content: chatInput },
      { role: 'assistant', content: 'I can help you with task management, deadline tracking, and resource allocation. What specific task would you like assistance with?' }
    ];
    
    setChatMessages(newMessages);
    setChatInput('');
  };

  const filteredTasks = statusFilter === 'All' 
    ? mockTasks 
    : mockTasks.filter(task => task.status === statusFilter);

  const urgentTasks = mockTasks.filter(task => task.priority === 'high' && task.status !== 'Completed').length;
  const upcomingTasks = mockTasks.filter(task => {
    const deadline = new Date(task.deadline);
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return deadline <= nextWeek && task.status !== 'Completed';
  }).length;
  const pendingTasks = mockTasks.filter(task => task.status === 'Pending').length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-orange-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-pink-100 text-pink-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-500 text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const addComment = () => {
    if (!newComment.trim() || !selectedTask) return;
    
    const updatedTask = {
      ...selectedTask,
      comments: [
        ...selectedTask.comments,
        {
          user: 'Current User',
          date: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString(),
          message: newComment
        }
      ]
    };
    
    setSelectedTask(updatedTask);
    setNewComment('');
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Tasks</h1>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full"
            onClick={() => setCreateTaskOpen(true)}
          >
            <Plus className="mr-2 h-5 w-5" />
            CREATE NEW TASK
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* PLANVIA AI Widget */}
          <div className="lg:col-span-1">
            <Card className="border-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  PLANVIA AI
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-[400px]">
                <ScrollArea className="flex-1 mb-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="space-y-4">
                    {chatMessages.map((message, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground ml-4'
                            : 'bg-gray-100 dark:bg-gray-700 text-foreground mr-4'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                    placeholder="Ask about task management..."
                    className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button 
                    size="sm" 
                    onClick={sendChatMessage}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Task Summary Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 bg-red-50 dark:bg-red-900/20 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Urgent Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">{urgentTasks}</div>
                  <p className="text-sm text-red-500 dark:text-red-300">High priority tasks</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-blue-50 dark:bg-blue-900/20 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                    <Calendar className="mr-2 h-5 w-5" />
                    Upcoming Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{upcomingTasks}</div>
                  <p className="text-sm text-blue-500 dark:text-blue-300">Due this week</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-orange-50 dark:bg-orange-900/20 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-orange-600 dark:text-orange-400">
                    <Clock className="mr-2 h-5 w-5" />
                    Pending Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{pendingTasks}</div>
                  <p className="text-sm text-orange-500 dark:text-orange-300">Awaiting action</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Task Management Table */}
        <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <CheckSquare className="mr-2 h-5 w-5" />
                Task Management
              </CardTitle>
              <div className="flex items-center gap-2">
                <Tabs value={statusFilter} onValueChange={setStatusFilter}>
                  <TabsList>
                    <TabsTrigger value="All">All</TabsTrigger>
                    <TabsTrigger value="Pending">Pending</TabsTrigger>
                    <TabsTrigger value="In Progress">In Progress</TabsTrigger>
                    <TabsTrigger value="Completed">Completed</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{task.title}</div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {task.category}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>{task.assignedTo}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        {task.deadline}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(task.status)}>
                        {task.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedTask(task)}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Task Detail Modal */}
        <Dialog open={!!selectedTask} onOpenChange={() => setSelectedTask(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle>{selectedTask?.title}</DialogTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTask(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>
            
            {selectedTask && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Assigned To</h4>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {selectedTask.assignedTo}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Deadline</h4>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {selectedTask.deadline}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">Status</h4>
                  <div className="flex gap-2">
                    {['Pending', 'In Progress', 'Completed'].map((status) => (
                      <Button
                        key={status}
                        variant={selectedTask.status === status ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTask({...selectedTask, status: status as any})}
                      >
                        {status === 'Completed' && <CheckSquare className="h-4 w-4 mr-1" />}
                        {status}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Task Details</h4>
                  <p className="text-sm text-muted-foreground">{selectedTask.description}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Comments & Notes</h4>
                  <div className="space-y-3 mb-4">
                    {selectedTask.comments.map((comment, index) => (
                      <div key={index} className="bg-muted p-3 rounded-lg">
                        <div className="font-medium text-sm">{comment.user}</div>
                        <div className="text-xs text-muted-foreground mb-2">{comment.date}</div>
                        <p className="text-sm">{comment.message}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm mb-2">Add Comment</h5>
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Add a comment or note..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={addComment}>Add</Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline" onClick={() => setSelectedTask(null)}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default TasksPage;