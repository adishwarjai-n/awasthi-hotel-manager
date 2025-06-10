
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Eye, Edit } from "lucide-react";

export function BookingsSection() {
  const bookings = [
    {
      id: "BK001",
      guest: "Rajesh Kumar",
      room: "Deluxe 101",
      checkIn: "2024-06-10",
      checkOut: "2024-06-12",
      status: "Confirmed",
      amount: "₹7,000",
      nights: 2,
    },
    {
      id: "BK002",
      guest: "Priya Sharma",
      room: "Suite 205",
      checkIn: "2024-06-09",
      checkOut: "2024-06-11",
      status: "Checked-in",
      amount: "₹17,000",
      nights: 2,
    },
    {
      id: "BK003",
      guest: "Amit Singh",
      room: "Standard 301",
      checkIn: "2024-06-11",
      checkOut: "2024-06-13",
      status: "Pending",
      amount: "₹5,600",
      nights: 2,
    },
    {
      id: "BK004",
      guest: "Neha Patel",
      room: "Deluxe 152",
      checkIn: "2024-06-12",
      checkOut: "2024-06-15",
      status: "Confirmed",
      amount: "₹12,600",
      nights: 3,
    },
    {
      id: "BK005",
      guest: "Vikram Reddy",
      room: "Suite 203",
      checkIn: "2024-06-08",
      checkOut: "2024-06-10",
      status: "Checked-out",
      amount: "₹15,600",
      nights: 2,
    },
    {
      id: "BK006",
      guest: "Anita Gupta",
      room: "Deluxe 103",
      checkIn: "2024-06-13",
      checkOut: "2024-06-16",
      status: "Confirmed",
      amount: "₹10,500",
      nights: 3,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Checked-in":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Checked-out":
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Cancelled":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Booking Management</h2>
        <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Booking
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {bookings.map((booking) => (
          <Card key={booking.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">{booking.guest}</CardTitle>
                  <p className="text-slate-400">Booking ID: {booking.id}</p>
                </div>
                <Badge className={`${getStatusColor(booking.status)} border`}>
                  {booking.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Room</p>
                    <p className="text-white font-medium">{booking.room}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Total Amount</p>
                    <p className="text-xl font-bold text-amber-400">{booking.amount}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Check-in</p>
                    <p className="text-white font-medium">{booking.checkIn}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Check-out</p>
                    <p className="text-white font-medium">{booking.checkOut}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Duration</p>
                  <p className="text-white font-medium">{booking.nights} nights</p>
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
                    <Calendar className="h-4 w-4 mr-1" />
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
