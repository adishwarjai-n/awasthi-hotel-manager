
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Plus, Eye, Edit, Phone, Mail } from "lucide-react";

export function GuestsSection() {
  const guests = [
    {
      id: "G001",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      phone: "+91 98765 43210",
      room: "Deluxe 101",
      status: "Checked-in",
      checkIn: "2024-06-10",
      loyalty: "Gold",
      visits: 5,
    },
    {
      id: "G002",
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 87654 32109",
      room: "Suite 205",
      status: "Checked-in",
      checkIn: "2024-06-09",
      loyalty: "Platinum",
      visits: 12,
    },
    {
      id: "G003",
      name: "Amit Singh",
      email: "amit.singh@email.com",
      phone: "+91 76543 21098",
      room: "Standard 301",
      status: "Arriving Today",
      checkIn: "2024-06-11",
      loyalty: "Silver",
      visits: 3,
    },
    {
      id: "G004",
      name: "Neha Patel",
      email: "neha.patel@email.com",
      phone: "+91 65432 10987",
      room: "Deluxe 152",
      status: "Confirmed",
      checkIn: "2024-06-12",
      loyalty: "Gold",
      visits: 7,
    },
    {
      id: "G005",
      name: "Vikram Reddy",
      email: "vikram.reddy@email.com",
      phone: "+91 54321 09876",
      room: "Suite 203",
      status: "Checked-out",
      checkIn: "2024-06-08",
      loyalty: "Platinum",
      visits: 15,
    },
    {
      id: "G006",
      name: "Anita Gupta",
      email: "anita.gupta@email.com",
      phone: "+91 43210 98765",
      room: "Deluxe 103",
      status: "Confirmed",
      checkIn: "2024-06-13",
      loyalty: "Silver",
      visits: 2,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Checked-in":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Checked-out":
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
      case "Arriving Today":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Confirmed":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  const getLoyaltyColor = (loyalty: string) => {
    switch (loyalty) {
      case "Platinum":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Gold":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "Silver":
        return "bg-slate-400/20 text-slate-300 border-slate-400/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Guest Management</h2>
        <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Guest
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {guests.map((guest) => (
          <Card key={guest.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">{guest.name}</CardTitle>
                  <p className="text-slate-400">Guest ID: {guest.id}</p>
                </div>
                <div className="flex gap-2">
                  <Badge className={`${getLoyaltyColor(guest.loyalty)} border text-xs`}>
                    {guest.loyalty}
                  </Badge>
                  <Badge className={`${getStatusColor(guest.status)} border text-xs`}>
                    {guest.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Room</p>
                    <p className="text-white font-medium">{guest.room}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Check-in</p>
                    <p className="text-white font-medium">{guest.checkIn}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Contact Information</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <p className="text-sm text-slate-300">{guest.email}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Phone className="h-4 w-4 text-slate-400" />
                    <p className="text-sm text-slate-300">{guest.phone}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Total Visits</p>
                  <p className="text-white font-medium">{guest.visits} visits</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                  >
                    <Users className="h-4 w-4 mr-1" />
                    Profile
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
