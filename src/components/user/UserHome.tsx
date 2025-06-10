
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Wifi, Car, Coffee, Utensils, Dumbbell, Waves, Calendar } from "lucide-react";

export function UserHome() {
  const features = [
    { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout the hotel" },
    { icon: Car, title: "Free Parking", description: "Complimentary valet parking service" },
    { icon: Coffee, title: "Room Service", description: "24/7 in-room dining service" },
    { icon: Utensils, title: "Restaurant", description: "Multi-cuisine fine dining restaurant" },
    { icon: Dumbbell, title: "Fitness Center", description: "Fully equipped modern gym" },
    { icon: Waves, title: "Swimming Pool", description: "Outdoor pool with city views" },
  ];

  const roomTypes = [
    {
      type: "Standard Room",
      price: "₹2,800",
      image: "/placeholder.svg",
      amenities: ["WiFi", "AC", "TV", "Mini Fridge"],
      rating: 4.2
    },
    {
      type: "Deluxe Room",
      price: "₹3,500",
      image: "/placeholder.svg",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony"],
      rating: 4.5
    },
    {
      type: "Suite",
      price: "₹8,500",
      image: "/placeholder.svg",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony", "Jacuzzi", "Living Room"],
      rating: 4.8
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-8 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Awasthi Hotel
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Experience luxury and comfort in the heart of the city. Book your perfect stay with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8"
            >
              View Rooms
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-white text-center mb-8">Hotel Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Room Types Section */}
      <section>
        <h2 className="text-3xl font-bold text-white text-center mb-8">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roomTypes.map((room) => (
            <Card key={room.type} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="aspect-video bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-slate-400">Room Image</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">{room.type}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm text-slate-400">{room.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-amber-400">{room.price}</p>
                    <p className="text-sm text-slate-400">per night</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
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
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                  >
                    Book This Room
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Stay?</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Experience the finest hospitality with our luxury rooms and world-class amenities. 
          Book now and enjoy special offers for your stay.
        </p>
        <Button 
          size="lg"
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Book Now
        </Button>
      </section>
    </div>
  );
}
