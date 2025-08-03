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
import VendorDashboard from "./pages/vendor/VendorDashboard";
import VendorEventsPage from "./pages/vendor/VendorEventsPage";
import VendorBookingsPage from "./pages/vendor/VendorBookingsPage";
import VendorPortfolioPage from "./pages/vendor/VendorPortfolioPage";
import VendorProfilePage from "./pages/vendor/VendorProfilePage";
import VendorPaymentsPage from "./pages/vendor/VendorPaymentsPage";
import VendorReviewsPage from "./pages/vendor/VendorReviewsPage";
import VendorMessagesPage from "./pages/vendor/VendorMessagesPage";
import VendorSettingsPage from "./pages/vendor/VendorSettingsPage";

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
          
          {/* Event Manager Routes */}
          <Route path="/dashboard/event-manager" element={<EventManagerDashboard />} />
          <Route path="/dashboard/event-manager/events" element={<EventsPage />} />
          <Route path="/dashboard/event-manager/vendors" element={<VendorsPage />} />
          <Route path="/dashboard/event-manager/tasks" element={<TasksPage />} />
          <Route path="/dashboard/event-manager/crm" element={<CRMPage />} />
          <Route path="/dashboard/event-manager/finances" element={<FinancesPage />} />
          <Route path="/dashboard/event-manager/team" element={<TeamPage />} />
          <Route path="/dashboard/event-manager/inventory" element={<InventoryPage />} />
          <Route path="/dashboard/event-manager/consultation" element={<ConsultationPage />} />
          
          {/* Vendor Routes */}
          <Route path="/dashboard/vendor" element={<VendorDashboard />} />
          <Route path="/dashboard/vendor/events" element={<VendorEventsPage />} />
          <Route path="/dashboard/vendor/bookings" element={<VendorBookingsPage />} />
          <Route path="/dashboard/vendor/portfolio" element={<VendorPortfolioPage />} />
          <Route path="/dashboard/vendor/profile" element={<VendorProfilePage />} />
          <Route path="/dashboard/vendor/payments" element={<VendorPaymentsPage />} />
          <Route path="/dashboard/vendor/reviews" element={<VendorReviewsPage />} />
          <Route path="/dashboard/vendor/messages" element={<VendorMessagesPage />} />
          <Route path="/dashboard/vendor/settings" element={<VendorSettingsPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
