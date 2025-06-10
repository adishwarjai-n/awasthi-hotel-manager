
import { useState } from "react";
import { Hotel, Calendar, MapPin, Phone, Mail, User, LogIn, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export function UserLayout({ children, currentSection, setCurrentSection }: UserLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
                <Hotel className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Awasthi Hotel</h1>
                <p className="text-xs text-slate-400">Luxury & Comfort</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentSection("home")}
                className={`text-sm font-medium transition-colors ${
                  currentSection === "home" 
                    ? "text-amber-400" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentSection("rooms")}
                className={`text-sm font-medium transition-colors ${
                  currentSection === "rooms" 
                    ? "text-amber-400" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Rooms
              </button>
              <button
                onClick={() => setCurrentSection("booking")}
                className={`text-sm font-medium transition-colors ${
                  currentSection === "booking" 
                    ? "text-amber-400" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Book Now
              </button>
              <button
                onClick={() => setCurrentSection("contact")}
                className={`text-sm font-medium transition-colors ${
                  currentSection === "contact" 
                    ? "text-amber-400" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
              >
                <User className="h-4 w-4 mr-2" />
                My Bookings
              </Button>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/95 border-t border-slate-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
                  <Hotel className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Awasthi Hotel</h3>
                  <p className="text-slate-400">Luxury & Comfort</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Experience luxury and comfort at Awasthi Hotel. We provide world-class amenities 
                and exceptional service to make your stay memorable.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">123 Hotel Street, City</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@awasthihotel.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button className="block text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  About Us
                </button>
                <button className="block text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Services
                </button>
                <button className="block text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Gallery
                </button>
                <a 
                  href="/admin" 
                  className="block text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  <Settings className="h-4 w-4 inline mr-1" />
                  Admin Panel
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Awasthi Hotel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
