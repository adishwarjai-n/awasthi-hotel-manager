
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Users, DollarSign, Calendar, TrendingUp, Star } from "lucide-react";

export function Dashboard() {
  const stats = [
    {
      title: "Total Rooms",
      value: "150",
      icon: Bed,
      change: "+2",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Occupied Rooms",
      value: "128",
      icon: Users,
      change: "+12",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Revenue Today",
      value: "₹45,230",
      icon: DollarSign,
      change: "+8%",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Check-ins Today",
      value: "23",
      icon: Calendar,
      change: "+5",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const recentBookings = [
    { id: "BK001", guest: "Rajesh Kumar", room: "Deluxe 101", status: "Confirmed", amount: "₹3,500" },
    { id: "BK002", guest: "Priya Sharma", room: "Suite 205", status: "Checked-in", amount: "₹8,500" },
    { id: "BK003", guest: "Amit Singh", room: "Standard 301", status: "Pending", amount: "₹2,800" },
    { id: "BK004", guest: "Neha Patel", room: "Deluxe 152", status: "Confirmed", amount: "₹4,200" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="h-5 w-5 text-amber-500" />
              Recent Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div>
                    <p className="font-medium text-white">{booking.guest}</p>
                    <p className="text-sm text-slate-400">{booking.room}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">{booking.amount}</p>
                    <Badge
                      variant={
                        booking.status === "Confirmed"
                          ? "default"
                          : booking.status === "Checked-in"
                          ? "secondary"
                          : "outline"
                      }
                      className="mt-1"
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Hotel Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Occupancy Rate</span>
                <span className="text-white font-medium">85.3%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: "85.3%" }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Average Rating</span>
                <span className="text-white font-medium">4.8/5</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Available Rooms</span>
                <span className="text-white font-medium">22</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Pending Requests</span>
                <span className="text-white font-medium">8</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
