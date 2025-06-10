
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, Calendar, Users, Filter, SortAsc } from "lucide-react";

export function UserRooms() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const rooms = [
    {
      id: "1",
      type: "Standard Room",
      price: "₹2,800",
      originalPrice: "₹3,200",
      image: "/placeholder.svg",
      amenities: ["WiFi", "AC", "TV", "Mini Fridge"],
      rating: 4.2,
      reviews: 156,
      description: "Comfortable and well-appointed room perfect for business or leisure travelers.",
      size: "25 sqm",
      bedType: "Queen Bed",
      maxGuests: 2,
      available: true
    },
    {
      id: "2",
      type: "Deluxe Room",
      price: "₹3,500",
      originalPrice: "₹4,000",
      image: "/placeholder.svg",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony"],
      rating: 4.5,
      reviews: 203,
      description: "Spacious room with modern amenities and a private balcony overlooking the city.",
      size: "35 sqm",
      bedType: "King Bed",
      maxGuests: 3,
      available: true
    },
    {
      id: "3",
      type: "Executive Suite",
      price: "₹6,500",
      originalPrice: "₹7,500",
      image: "/placeholder.svg",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony", "Work Desk", "Seating Area"],
      rating: 4.7,
      reviews: 89,
      description: "Luxurious suite with separate living area, perfect for extended stays.",
      size: "55 sqm",
      bedType: "King Bed",
      maxGuests: 3,
      available: true
    },
    {
      id: "4",
      type: "Premium Suite",
      price: "₹8,500",
      originalPrice: "₹9,800",
      image: "/placeholder.svg",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony", "Jacuzzi", "Living Room", "Kitchen"],
      rating: 4.8,
      reviews: 142,
      description: "Ultimate luxury with premium amenities and stunning city views.",
      size: "75 sqm",
      bedType: "King Bed + Sofa Bed",
      maxGuests: 4,
      available: false
    },
    {
      id: "5",
      type: "Family Room",
      price: "₹4,200",
      originalPrice: "₹4,800",
      image: "/placeholder.svg",
      amenities: ["WiFi", "AC", "TV", "Mini Fridge", "Extra Bed", "Kids Area"],
      rating: 4.4,
      reviews: 178,
      description: "Perfect for families with children, featuring extra space and family amenities.",
      size: "45 sqm",
      bedType: "2 Queen Beds",
      maxGuests: 4,
      available: true
    },
    {
      id: "6",
      type: "Honeymoon Suite",
      price: "₹7,800",
      originalPrice: "₹8,500",
      image: "/placeholder.svg",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony", "Jacuzzi", "Romantic Decor"],
      rating: 4.9,
      reviews: 95,
      description: "Romantic suite designed for couples with special amenities and ambiance.",
      size: "60 sqm",
      bedType: "King Bed",
      maxGuests: 2,
      available: true
    }
  ];

  return (
    <div className="space-y-8">
      {/* Search Section */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-amber-400" />
            Find Your Perfect Room
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="checkin" className="text-slate-300">Check-in Date</Label>
              <Input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="checkout" className="text-slate-300">Check-out Date</Label>
              <Input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="guests" className="text-slate-300">Guests</Label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full h-10 px-3 rounded-md bg-slate-700 border border-slate-600 text-white"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                Search Rooms
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filter & Sort */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Available Rooms</h2>
        <div className="flex gap-4">
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
            <SortAsc className="h-4 w-4 mr-2" />
            Sort by Price
          </Button>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <Card key={room.id} className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 ${!room.available ? 'opacity-60' : ''}`}>
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="aspect-square md:aspect-auto md:h-full bg-slate-700 rounded-l-lg flex items-center justify-center">
                  <span className="text-slate-400">Room Image</span>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{room.type}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm text-slate-400">{room.rating}</span>
                      </div>
                      <span className="text-sm text-slate-400">({room.reviews} reviews)</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{room.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500 line-through">{room.originalPrice}</span>
                      <span className="text-2xl font-bold text-amber-400">{room.price}</span>
                    </div>
                    <p className="text-xs text-slate-400">per night</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-4 text-sm text-slate-400">
                    <span>📐 {room.size}</span>
                    <span>🛏️ {room.bedType}</span>
                    <span><Users className="h-4 w-4 inline mr-1" />{room.maxGuests} guests</span>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => (
                        <Badge key={amenity} variant="outline" className="text-xs border-slate-600 text-slate-300">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      View Details
                    </Button>
                    <Button 
                      className={`flex-1 ${
                        room.available 
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600" 
                          : "bg-slate-600 cursor-not-allowed"
                      }`}
                      disabled={!room.available}
                    >
                      {room.available ? "Book Now" : "Not Available"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
