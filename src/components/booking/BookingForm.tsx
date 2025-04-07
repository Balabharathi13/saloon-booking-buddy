
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
}

interface BookingFormProps {
  shopId: string;
  shopName: string;
}

const mockServices: Service[] = [
  {
    id: '1',
    name: 'Haircut',
    description: 'Professional haircut with styling',
    duration: '45 min',
    price: 35
  },
  {
    id: '2',
    name: 'Hair Coloring',
    description: 'Full color or highlights',
    duration: '120 min',
    price: 85
  },
  {
    id: '3',
    name: 'Blowout & Styling',
    description: 'Washing, blow drying and styling',
    duration: '30 min',
    price: 25
  },
  {
    id: '4',
    name: 'Beard Trim',
    description: 'Professional beard shaping and trim',
    duration: '20 min',
    price: 15
  },
  {
    id: '5',
    name: 'Full Treatment Package',
    description: 'Haircut, wash, deep conditioning, and style',
    duration: '75 min',
    price: 65
  }
];

// Mock time slots
const generateTimeSlots = () => {
  const slots = [];
  let hour = 9; // Starting at 9 AM
  
  for (let i = 0; i < 16; i++) { // Generate slots until 5 PM
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const amPm = hour < 12 ? 'AM' : 'PM';
    
    const timeString = `${formattedHour}:00 ${amPm}`;
    const available = Math.random() > 0.3; // Randomly mark some as unavailable
    
    slots.push({
      time: timeString,
      available
    });
    
    // Add half-hour slot
    const halfHourTimeString = `${formattedHour}:30 ${amPm}`;
    const halfHourAvailable = Math.random() > 0.3;
    
    slots.push({
      time: halfHourTimeString,
      available: halfHourAvailable
    });
    
    hour++;
  }
  
  return slots;
};

const BookingForm: React.FC<BookingFormProps> = ({ shopId, shopName }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState(generateTimeSlots());
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    setSelectedTime(null);
    
    // Generate new time slots when date changes
    setTimeSlots(generateTimeSlots());
  };
  
  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedService || !selectedTime) {
      toast({
        title: "Incomplete Booking",
        description: "Please select a service, date, and time slot.",
        variant: "destructive"
      });
      return;
    }
    
    // Mock successful booking
    toast({
      title: "Booking Confirmed!",
      description: `Your appointment at ${shopName} has been booked for ${format(date, 'MMMM d, yyyy')} at ${selectedTime}.`,
    });
    
    // Navigate to confirmation or dashboard
    navigate('/dashboard');
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="heading-sm mb-4">Select a Service</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockServices.map((service) => (
            <Card 
              key={service.id}
              className={cn(
                "cursor-pointer transition-colors",
                selectedService === service.id 
                  ? "border-2 border-salon-600" 
                  : "hover:border-salon-300"
              )}
              onClick={() => handleServiceSelect(service.id)}
            >
              <CardContent className="p-4 flex justify-between items-center">
                <div className="flex-1">
                  <h4 className="font-medium">{service.name}</h4>
                  <p className="text-sm text-gray-500">{service.description}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{service.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${service.price}</div>
                  {selectedService === service.id && (
                    <div className="mt-2 text-salon-600">
                      <Check className="h-5 w-5" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="heading-sm mb-4">Select Date & Time</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
            {date && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Available Time Slots</h4>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot, index) => (
                    <Button
                      key={index}
                      variant={selectedTime === slot.time ? "default" : "outline"}
                      className={cn(
                        "text-sm py-1 h-auto",
                        !slot.available && "opacity-50 cursor-not-allowed",
                        selectedTime === slot.time && "bg-salon-600 hover:bg-salon-700"
                      )}
                      disabled={!slot.available}
                      onClick={() => handleTimeSelect(slot.time)}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salon:</span>
                    <span className="font-medium">{shopName}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">
                      {selectedService 
                        ? mockServices.find(s => s.id === selectedService)?.name 
                        : "Not selected"}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">
                      {date ? format(date, "MMM d, yyyy") : "Not selected"}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">
                      {selectedTime || "Not selected"}
                    </span>
                  </div>
                  
                  {selectedService && (
                    <div className="flex justify-between pt-3 border-t mt-3">
                      <span className="font-semibold">Total:</span>
                      <span className="font-semibold">
                        ${mockServices.find(s => s.id === selectedService)?.price}
                      </span>
                    </div>
                  )}
                </div>
                
                <Button 
                  onClick={handleSubmit}
                  className="w-full mt-6 bg-salon-600 hover:bg-salon-700"
                  disabled={!date || !selectedService || !selectedTime}
                >
                  Confirm Booking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
