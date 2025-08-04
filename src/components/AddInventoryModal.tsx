import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

interface AddInventoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddInventoryModal: React.FC<AddInventoryModalProps> = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    location: '',
    cost: '',
    supplier: '',
    description: '',
    minimumStock: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Inventory Item Added",
      description: `${formData.name} has been added to your inventory.`,
    });
    
    setFormData({
      name: '',
      category: '',
      quantity: '',
      location: '',
      cost: '',
      supplier: '',
      description: '',
      minimumStock: ''
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add Inventory Item</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Item Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                placeholder="e.g., Round Tables"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="lighting">Lighting</SelectItem>
                  <SelectItem value="audio-visual">Audio/Visual</SelectItem>
                  <SelectItem value="decorations">Decorations</SelectItem>
                  <SelectItem value="tableware">Tableware</SelectItem>
                  <SelectItem value="linens">Linens</SelectItem>
                  <SelectItem value="flowers">Flowers</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity *</Label>
              <Input
                id="quantity"
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                required
                placeholder="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="minimumStock">Minimum Stock</Label>
              <Input
                id="minimumStock"
                type="number"
                value={formData.minimumStock}
                onChange={(e) => setFormData(prev => ({ ...prev, minimumStock: e.target.value }))}
                placeholder="5"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cost">Cost per Unit</Label>
              <Input
                id="cost"
                type="number"
                step="0.01"
                value={formData.cost}
                onChange={(e) => setFormData(prev => ({ ...prev, cost: e.target.value }))}
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Storage Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="e.g., Warehouse A, Shelf 2"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="supplier">Supplier</Label>
              <Input
                id="supplier"
                value={formData.supplier}
                onChange={(e) => setFormData(prev => ({ ...prev, supplier: e.target.value }))}
                placeholder="Supplier name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Item details, specifications, or notes..."
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Add Item
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};