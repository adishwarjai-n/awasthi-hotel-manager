
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import { RoomsSection } from "@/components/RoomsSection";
import { BookingsSection } from "@/components/BookingsSection";
import { GuestsSection } from "@/components/GuestsSection";
import { ServicesSection } from "@/components/ServicesSection";

const Index = () => {
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
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Awasthi Hotel</h1>
            <p className="text-slate-300">Luxury Hotel Management System</p>
          </div>
          {renderSection()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
