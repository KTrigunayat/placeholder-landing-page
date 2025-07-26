import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Plus } from 'lucide-react';

const ConsultationPage = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Consultation</h1>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            <Plus className="mr-2 h-5 w-5" />
            SCHEDULE CONSULTATION
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0 bg-card shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),2px_2px_8px_rgba(0,0,0,0.15)] rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Client Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Manage client consultations and communication channels.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConsultationPage;