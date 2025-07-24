import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CalendarIcon, ArrowLeft, ArrowRight, Send } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface CreateEventModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateEventModal: React.FC<CreateEventModalProps> = ({ open, onOpenChange }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    clientName: '',
    weddingFunctions: [] as string[],
    functionDates: {} as Record<string, Date>,
    guestCount: '',
    budget: '',
    clientVision: '',
    venueType: [] as string[],
    seatingStyle: '',
    amenities: [] as string[],
    themes: [] as string[],
    colorSchemes: '',
    decoratorSpecialization: [] as string[],
    cuisinePreferences: [] as string[],
    cateringServiceType: '',
    requiredProfessionals: [] as string[]
  });
  
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: 'Hello! I\'m here to help you create the perfect wedding event. Feel free to ask me anything about planning, vendors, or any other details!' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const functions = ['Mehendi', 'Sangeet', 'Haldi', 'Wedding Ceremony', 'Reception'];
  const venueTypes = ['Banquet Hall', 'Outdoor Lawn', 'Farmhouse', 'Hotel Ballroom'];
  const seatingStyles = ['Theater', 'Round Table', 'Classroom'];
  const amenitiesList = ['In-house Catering Available', 'Sound System', 'Projector'];
  const themesList = ['Royal', 'Modern Minimalist', 'Floral Paradise', 'Vintage'];
  const decoratorSpecs = ['Traditional', 'Modern', 'Fusion'];
  const cuisines = ['North Indian', 'South Indian', 'Continental', 'Italian', 'Chinese'];
  const cateringTypes = ['Buffet', 'Plated Service'];
  const professionalServices = ['Photography', 'Videography', 'Live Music Band', 'DJ', 'Makeup Artist'];

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleDateChange = (func: string, date: Date | undefined) => {
    if (date) {
      setFormData(prev => ({
        ...prev,
        functionDates: { ...prev.functionDates, [func]: date }
      }));
    }
  };

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, 
      { type: 'user', content: chatInput },
      { type: 'ai', content: 'That\'s a great question! Based on your requirements, I can help you with detailed suggestions and vendor recommendations.' }
    ]);
    setChatInput('');
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Core Wedding Details</h3>
            
            <div>
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                id="clientName"
                value={formData.clientName}
                onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
                className="mt-1"
              />
            </div>

            <div>
              <Label>Wedding Functions</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {functions.map(func => (
                  <div key={func} className="flex items-center space-x-2">
                    <Checkbox
                      id={func}
                      checked={formData.weddingFunctions.includes(func)}
                      onCheckedChange={(checked) => handleCheckboxChange('weddingFunctions', func, checked as boolean)}
                    />
                    <Label htmlFor={func} className="text-sm">{func}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label>Function Dates</Label>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {formData.weddingFunctions.map(func => (
                  <div key={func} className="flex items-center space-x-3">
                    <Label className="w-32 text-sm">{func}:</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.functionDates[func] ? format(formData.functionDates[func], "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.functionDates[func]}
                          onSelect={(date) => handleDateChange(func, date)}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="guestCount">Total Guest Count</Label>
                <Input
                  id="guestCount"
                  type="number"
                  value={formData.guestCount}
                  onChange={(e) => setFormData(prev => ({ ...prev, guestCount: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="budget">Overall Budget ($)</Label>
                <Input
                  id="budget"
                  type="number"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="clientVision">Client's Vision</Label>
              <Textarea
                id="clientVision"
                value={formData.clientVision}
                onChange={(e) => setFormData(prev => ({ ...prev, clientVision: e.target.value }))}
                className="mt-1 h-24"
                placeholder="Describe your ideal wedding vision, preferences, and any special requirements..."
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Venue Preferences</h3>
            
            <div>
              <Label>Preferred Venue Type</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {venueTypes.map(type => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={formData.venueType.includes(type)}
                      onCheckedChange={(checked) => handleCheckboxChange('venueType', type, checked as boolean)}
                    />
                    <Label htmlFor={type} className="text-sm">{type}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="seatingStyle">Seating Style</Label>
              <Select value={formData.seatingStyle} onValueChange={(value) => setFormData(prev => ({ ...prev, seatingStyle: value }))}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select seating style" />
                </SelectTrigger>
                <SelectContent>
                  {seatingStyles.map(style => (
                    <SelectItem key={style} value={style}>{style}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Essential Amenities</Label>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {amenitiesList.map(amenity => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox
                      id={amenity}
                      checked={formData.amenities.includes(amenity)}
                      onCheckedChange={(checked) => handleCheckboxChange('amenities', amenity, checked as boolean)}
                    />
                    <Label htmlFor={amenity} className="text-sm">{amenity}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Decoration & Ambiance</h3>
            
            <div>
              <Label>Desired Themes</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {themesList.map(theme => (
                  <div key={theme} className="flex items-center space-x-2">
                    <Checkbox
                      id={theme}
                      checked={formData.themes.includes(theme)}
                      onCheckedChange={(checked) => handleCheckboxChange('themes', theme, checked as boolean)}
                    />
                    <Label htmlFor={theme} className="text-sm">{theme}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="colorSchemes">Primary Color Schemes</Label>
              <Input
                id="colorSchemes"
                value={formData.colorSchemes}
                onChange={(e) => setFormData(prev => ({ ...prev, colorSchemes: e.target.value }))}
                className="mt-1"
                placeholder="e.g., Blush Pink & Gold, Royal Blue & Silver"
              />
            </div>

            <div>
              <Label>Decorator Specialization</Label>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {decoratorSpecs.map(spec => (
                  <div key={spec} className="flex items-center space-x-2">
                    <Checkbox
                      id={spec}
                      checked={formData.decoratorSpecialization.includes(spec)}
                      onCheckedChange={(checked) => handleCheckboxChange('decoratorSpecialization', spec, checked as boolean)}
                    />
                    <Label htmlFor={spec} className="text-sm">{spec}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Food & Catering</h3>
            
            <div>
              <Label>Cuisine Preferences</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {cuisines.map(cuisine => (
                  <div key={cuisine} className="flex items-center space-x-2">
                    <Checkbox
                      id={cuisine}
                      checked={formData.cuisinePreferences.includes(cuisine)}
                      onCheckedChange={(checked) => handleCheckboxChange('cuisinePreferences', cuisine, checked as boolean)}
                    />
                    <Label htmlFor={cuisine} className="text-sm">{cuisine}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="cateringServiceType">Catering Service Type</Label>
              <Select value={formData.cateringServiceType} onValueChange={(value) => setFormData(prev => ({ ...prev, cateringServiceType: value }))}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select catering type" />
                </SelectTrigger>
                <SelectContent>
                  {cateringTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Additional Services</h3>
            
            <div>
              <Label>Required Professionals</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {professionalServices.map(service => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={formData.requiredProfessionals.includes(service)}
                      onCheckedChange={(checked) => handleCheckboxChange('requiredProfessionals', service, checked as boolean)}
                    />
                    <Label htmlFor={service} className="text-sm">{service}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl max-h-[90vh] w-[95vw] h-[85vh] p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="text-2xl font-bold">Let's Create a New Event Blueprint</DialogTitle>
        </DialogHeader>
        
        <div className="flex h-full">
          {/* Left Column - Form */}
          <div className="flex-1 p-6">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map(step => (
                  <div
                    key={step}
                    onClick={() => setCurrentStep(step)}
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity",
                      step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <span className="ml-4 text-sm text-muted-foreground">Step {currentStep} of 5</span>
            </div>
            
            <ScrollArea className="h-[calc(100%-120px)] pr-4">
              <div className="space-y-6 pr-2">
                {renderStep()}
              </div>
            </ScrollArea>
            
            <div className="flex justify-between mt-6 pt-4 border-t">
              <Button 
                variant="outline" 
                onClick={prevStep} 
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
              
              {currentStep === 5 ? (
                <Button onClick={() => onOpenChange(false)} className="bg-primary text-primary-foreground">
                  Generate Blueprint
                </Button>
              ) : (
                <Button onClick={nextStep} className="flex items-center space-x-2">
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          
          {/* Right Column - AI Chat */}
          <div className="w-96 border-l bg-muted/30 flex flex-col">
            <div className="p-4 border-b">
              <h3 className="font-semibold">PLANVIA AI Assistant</h3>
            </div>
            
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-3 rounded-lg max-w-[85%]",
                      message.type === 'ai' 
                        ? "bg-background text-foreground" 
                        : "bg-primary text-primary-foreground ml-auto"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask PLANVIA AI..."
                  onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()}
                  className="flex-1"
                />
                <Button size="icon" onClick={sendChatMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};