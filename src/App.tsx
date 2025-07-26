import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import EventManagerDashboard from "./pages/EventManagerDashboard";
import VendorsPage from "./pages/VendorsPage";
import EventsPage from "./pages/EventsPage";
import TasksPage from "./pages/TasksPage";
import CRMPage from "./pages/CRMPage";
import FinancesPage from "./pages/FinancesPage";
import TeamPage from "./pages/TeamPage";
import InventoryPage from "./pages/InventoryPage";
import ConsultationPage from "./pages/ConsultationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/:userType" element={<LoginPage />} />
          <Route path="/dashboard/event-manager" element={<EventManagerDashboard />} />
          <Route path="/dashboard/event-manager/events" element={<EventsPage />} />
          <Route path="/dashboard/event-manager/vendors" element={<VendorsPage />} />
          <Route path="/dashboard/event-manager/tasks" element={<TasksPage />} />
          <Route path="/dashboard/event-manager/crm" element={<CRMPage />} />
          <Route path="/dashboard/event-manager/finances" element={<FinancesPage />} />
          <Route path="/dashboard/event-manager/team" element={<TeamPage />} />
          <Route path="/dashboard/event-manager/inventory" element={<InventoryPage />} />
          <Route path="/dashboard/event-manager/consultation" element={<ConsultationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
