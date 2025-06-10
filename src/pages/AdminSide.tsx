
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import { RoomsSection } from "@/components/RoomsSection";
import { BookingsSection } from "@/components/BookingsSection";
import { GuestsSection } from "@/components/GuestsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const AdminSide = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "rooms":
        return <RoomsSection />;
      case "bookings":
        return <BookingsSection />;
      case "guests":
        return <GuestsSection />;
      case "services":
        return <ServicesSection />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <AppSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 p-6">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Awasthi Hotel - Admin Panel</h1>
              <p className="text-slate-300">Luxury Hotel Management System</p>
            </div>
            <a href="/user" className="inline-flex">
              <Button 
                variant="outline" 
                className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
              >
                <Eye className="h-4 w-4 mr-2" />
                View User Site
              </Button>
            </a>
          </div>
          {renderSection()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminSide;
