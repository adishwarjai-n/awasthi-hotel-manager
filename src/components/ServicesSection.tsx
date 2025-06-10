
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Car, Utensils, Dumbbell, Plus, Edit, MapPin } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      id: "S001",
      name: "Restaurant & Dining",
      description: "Multi-cuisine restaurant with 24/7 room service",
      status: "Active",
      price: "₹500-2000",
      location: "Ground Floor",
      hours: "24/7",
      icon: Utensils,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "S002",
      name: "Valet Parking",
      description: "Secure valet parking for all hotel guests",
      status: "Active",
      price: "₹200/day",
      location: "Hotel Entrance",
      hours: "24/7",
      icon: Car,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "S003",
      name: "Fitness Center",
      description: "Fully equipped gym with modern equipment",
      status: "Active",
      price: "Free for guests",
      location: "2nd Floor",
      hours: "05:00 - 23:00",
      icon: Dumbbell,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "S004",
      name: "Coffee Lounge",
      description: "Premium coffee and light refreshments",
      status: "Active",
      price: "₹150-500",
      location: "Lobby",
      hours: "06:00 - 22:00",
      icon: Coffee,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: "S005",
      name: "Spa & Wellness",
      description: "Relaxing spa treatments and wellness services",
      status: "Maintenance",
      price: "₹1500-5000",
      location: "3rd Floor",
      hours: "10:00 - 20:00",
      icon: Coffee,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "S006",
      name: "Conference Hall",
      description: "Professional meeting and event spaces",
      status: "Active",
      price: "₹2000/hour",
      location: "1st Floor",
      hours: "08:00 - 22:00",
      icon: MapPin,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Maintenance":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Inactive":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Hotel Services</h2>
        <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">{service.name}</CardTitle>
                    <p className="text-slate-400 text-sm">ID: {service.id}</p>
                  </div>
                </div>
                <Badge className={`${getStatusColor(service.status)} border`}>
                  {service.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-300 text-sm">{service.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Pricing</p>
                    <p className="text-white font-medium">{service.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-white font-medium">{service.location}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Operating Hours</p>
                  <p className="text-white font-medium">{service.hours}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                  >
                    <Coffee className="h-4 w-4 mr-1" />
                    Manage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
