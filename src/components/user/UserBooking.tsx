
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Users, CreditCard, Check, Clock, MapPin } from "lucide-react";

export function UserBooking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: ""
  });

  const roomTypes = [
    { id: "standard", name: "Standard Room", price: "₹2,800", amenities: ["WiFi", "AC", "TV"] },
    { id: "deluxe", name: "Deluxe Room", price: "₹3,500", amenities: ["WiFi", "AC", "TV", "Mini Bar"] },
    { id: "suite", name: "Executive Suite", price: "₹6,500", amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony"] }
  ];

  const steps = [
    { number: 1, title: "Select Dates & Room", icon: Calendar },
    { number: 2, title: "Guest Information", icon: Users },
    { number: 3, title: "Payment & Confirmation", icon: CreditCard }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Progress Steps */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.number 
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white" 
                    : "bg-slate-700 text-slate-400"
                }`}>
                  {currentStep > step.number ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? "text-white" : "text-slate-400"
                  }`}>
                    Step {step.number}
                  </p>
                  <p className={`text-xs ${
                    currentStep >= step.number ? "text-slate-300" : "text-slate-500"
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`mx-8 h-0.5 w-16 ${
                    currentStep > step.number ? "bg-amber-500" : "bg-slate-700"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                {currentStep === 1 && "Select Your Stay Details"}
                {currentStep === 2 && "Guest Information"}
                {currentStep === 3 && "Payment & Confirmation"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Date & Room Selection */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="checkin" className="text-slate-300">Check-in Date</Label>
                      <Input
                        id="checkin"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleInputChange("checkIn", e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkout" className="text-slate-300">Check-out Date</Label>
                      <Input
                        id="checkout"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleInputChange("checkOut", e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests" className="text-slate-300">Number of Guests</Label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => handleInputChange("guests", e.target.value)}
                        className="w-full h-10 px-3 rounded-md bg-slate-700 border border-slate-600 text-white"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-slate-300 mb-4 block">Select Room Type</Label>
                    <div className="space-y-4">
                      {roomTypes.map((room) => (
                        <div
                          key={room.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            formData.roomType === room.id
                              ? "border-amber-500 bg-amber-500/10"
                              : "border-slate-600 hover:border-slate-500"
                          }`}
                          onClick={() => handleInputChange("roomType", room.id)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-white font-medium">{room.name}</h3>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {room.amenities.map((amenity) => (
                                  <Badge key={amenity} variant="outline" className="text-xs border-slate-600 text-slate-300">
                                    {amenity}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-xl font-bold text-amber-400">{room.price}</span>
                              <p className="text-xs text-slate-400">per night</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Guest Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
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
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-300">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="requests" className="text-slate-300">Special Requests (Optional)</Label>
                    <textarea
                      id="requests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      className="w-full h-24 px-3 py-2 rounded-md bg-slate-700 border border-slate-600 text-white resize-none"
                      placeholder="Any special requests or preferences..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Payment & Confirmation */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-400 mb-2">
                      <Check className="h-5 w-5" />
                      <span className="font-medium">Booking Confirmed!</span>
                    </div>
                    <p className="text-green-300 text-sm">
                      Your reservation has been successfully processed. A confirmation email will be sent shortly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-medium">Booking Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Guest Name:</span>
                        <span className="text-white">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Email:</span>
                        <span className="text-white">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Check-in:</span>
                        <span className="text-white">{formData.checkIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Check-out:</span>
                        <span className="text-white">{formData.checkOut}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Room Type:</span>
                        <span className="text-white">
                          {roomTypes.find(r => r.id === formData.roomType)?.name || "Not selected"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-amber-400 mb-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">Next Steps</span>
                    </div>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>• Check your email for confirmation details</li>
                      <li>• Arrive at the hotel after 3:00 PM on your check-in date</li>
                      <li>• Bring a valid ID for check-in</li>
                      <li>• Contact us if you need to modify your booking</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Previous
                </Button>
                {currentStep < 3 ? (
                  <Button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  >
                    Download Confirmation
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-1">
          <Card className="bg-slate-800/50 border-slate-700 sticky top-8">
            <CardHeader>
              <CardTitle className="text-white">Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {formData.roomType && (
                <>
                  <div>
                    <h3 className="text-white font-medium mb-2">
                      {roomTypes.find(r => r.id === formData.roomType)?.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {formData.checkIn && formData.checkOut 
                        ? `${formData.checkIn} to ${formData.checkOut}`
                        : "Select dates"
                      }
                    </p>
                    <p className="text-sm text-slate-400">
                      {formData.guests} {parseInt(formData.guests) === 1 ? "Guest" : "Guests"}
                    </p>
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Room Rate (per night)</span>
                      <span className="text-white">
                        {roomTypes.find(r => r.id === formData.roomType)?.price}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Number of Nights</span>
                      <span className="text-white">2</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Taxes & Fees</span>
                      <span className="text-white">₹500</span>
                    </div>
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="flex justify-between font-bold">
                    <span className="text-white">Total Amount</span>
                    <span className="text-amber-400 text-xl">₹7,100</span>
                  </div>
                </>
              )}

              {!formData.roomType && (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">Select your room and dates to see pricing</p>
                </div>
              )}

              <div className="bg-slate-700/50 rounded-lg p-3 mt-4">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <MapPin className="h-4 w-4" />
                  <div>
                    <p className="font-medium">Awasthi Hotel</p>
                    <p className="text-slate-400">123 Hotel Street, City</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
