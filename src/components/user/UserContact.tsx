
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function UserContact() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Get in touch with us for any inquiries, bookings, or assistance. We're here to help make your stay perfect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                <Input
                  id="firstName"
                  className="bg-slate-700 border-slate-600 text-white"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                <Input
                  id="lastName"
                  className="bg-slate-700 border-slate-600 text-white"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email" className="text-slate-300">Email Address</Label>
              <Input
                id="email"
                type="email"
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-slate-300">Phone Number</Label>
              <Input
                id="phone"
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <Label htmlFor="subject" className="text-slate-300">Subject</Label>
              <select
                id="subject"
                className="w-full h-10 px-3 rounded-md bg-slate-700 border border-slate-600 text-white"
              >
                <option value="">Select a subject</option>
                <option value="booking">Room Booking Inquiry</option>
                <option value="existing">Existing Reservation</option>
                <option value="events">Events & Conferences</option>
                <option value="services">Hotel Services</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="message" className="text-slate-300">Message</Label>
              <textarea
                id="message"
                className="w-full h-32 px-3 py-2 rounded-md bg-slate-700 border border-slate-600 text-white resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>
            
            <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Hotel Info */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Hotel Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Address</h3>
                  <p className="text-slate-400">
                    123 Hotel Street<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Phone Numbers</h3>
                  <p className="text-slate-400">
                    Reception: +91 98765 43210<br />
                    Reservations: +91 98765 43211<br />
                    Restaurant: +91 98765 43212
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-slate-400">
                    General: info@awasthihotel.com<br />
                    Reservations: bookings@awasthihotel.com<br />
                    Events: events@awasthihotel.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Reception Hours</h3>
                  <p className="text-slate-400">
                    24/7 Front Desk Service<br />
                    Check-in: 3:00 PM<br />
                    Check-out: 11:00 AM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-slate-500 mx-auto mb-2" />
                  <p className="text-slate-400">Interactive Map</p>
                  <p className="text-sm text-slate-500">Map integration coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
            <CardContent className="p-6">
              <h3 className="text-white font-bold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-3">
                <Button 
                  variant="outline" 
                  className="justify-start border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Reception
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
                <Button 
                  className="justify-start bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Make a Reservation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
