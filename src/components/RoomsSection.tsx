
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Wifi, Car, Coffee, Plus, Edit } from "lucide-react";

export function RoomsSection() {
  const rooms = [
    {
      id: "101",
      type: "Deluxe",
      status: "Occupied",
      guest: "Rajesh Kumar",
      price: "₹3,500",
      amenities: ["WiFi", "AC", "TV", "Mini Bar"],
    },
    {
      id: "102",
      type: "Deluxe",
      status: "Available",
      guest: null,
      price: "₹3,500",
      amenities: ["WiFi", "AC", "TV", "Mini Bar"],
    },
    {
      id: "205",
      type: "Suite",
      status: "Occupied",
      guest: "Priya Sharma",
      price: "₹8,500",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony", "Jacuzzi"],
    },
    {
      id: "301",
      type: "Standard",
      status: "Maintenance",
      guest: null,
      price: "₹2,800",
      amenities: ["WiFi", "AC", "TV"],
    },
    {
      id: "152",
      type: "Deluxe",
      status: "Available",
      guest: null,
      price: "₹4,200",
      amenities: ["WiFi", "AC", "TV", "Mini Bar"],
    },
    {
      id: "203",
      type: "Suite",
      status: "Available",
      guest: null,
      price: "₹7,800",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Occupied":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Maintenance":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Room Management</h2>
        <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Room
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <Card key={room.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">Room {room.id}</CardTitle>
                  <p className="text-slate-400">{room.type}</p>
                </div>
                <Badge className={`${getStatusColor(room.status)} border`}>
                  {room.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {room.guest && (
                  <div>
                    <p className="text-sm text-slate-400">Current Guest</p>
                    <p className="text-white font-medium">{room.guest}</p>
                  </div>
                )}
                
                <div>
                  <p className="text-sm text-slate-400">Price per night</p>
                  <p className="text-xl font-bold text-amber-400">{room.price}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 mb-2">Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <Badge key={amenity} variant="outline" className="text-xs border-slate-600 text-slate-300">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
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
                    <Bed className="h-4 w-4 mr-1" />
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
