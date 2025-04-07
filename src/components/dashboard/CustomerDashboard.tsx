
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scissors, Calendar, Star, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Appointment {
  id: string;
  shopName: string;
  shopImage: string;
  service: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    shopName: 'Elegant Cuts Salon',
    shopImage: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    service: 'Haircut',
    date: 'Apr 7, 2025',
    time: '10:00 AM',
    status: 'upcoming',
    price: 35
  },
  {
    id: '2',
    shopName: 'Modern Style Studio',
    shopImage: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    service: 'Beard Trim',
    date: 'Apr 10, 2025',
    time: '2:30 PM',
    status: 'upcoming',
    price: 15
  },
  {
    id: '3',
    shopName: 'Glamour & Grace',
    shopImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    service: 'Hair Coloring',
    date: 'Mar 25, 2025',
    time: '1:00 PM',
    status: 'completed',
    price: 85
  },
  {
    id: '4',
    shopName: 'The Dapper Den',
    shopImage: 'https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    service: 'Full Treatment Package',
    date: 'Mar 15, 2025',
    time: '11:30 AM',
    status: 'completed',
    price: 65
  },
  {
    id: '5',
    shopName: 'Natural Beauty Spa',
    shopImage: 'https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80',
    service: 'Massage',
    date: 'Feb 28, 2025',
    time: '3:00 PM',
    status: 'cancelled',
    price: 50
  }
];

const mockFavoriteSalons = [
  {
    id: '1',
    name: 'Elegant Cuts Salon',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    rating: 4.8,
    address: '123 Beauty Lane, Styleville'
  },
  {
    id: '2',
    name: 'Modern Style Studio',
    image: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    rating: 4.5,
    address: '456 Fashion Street, Beauty City'
  },
  {
    id: '3',
    name: 'Glamour & Grace',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    rating: 4.7,
    address: '789 Elegant Avenue, Luxetown'
  }
];

const CustomerDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const upcomingAppointments = appointments.filter(app => app.status === 'upcoming');
  const completedAppointments = appointments.filter(app => app.status === 'completed');
  
  const cancelAppointment = (appointmentId: string) => {
    setAppointments(appointments.map(app => 
      app.id === appointmentId ? { ...app, status: 'cancelled' } : app
    ));
    
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been successfully cancelled.",
    });
  };
  
  const getStatusBadge = (status: Appointment['status']) => {
    switch (status) {
      case 'upcoming':
        return <Badge className="bg-salon-600">Upcoming</Badge>;
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-500">Cancelled</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="h-14 w-14 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={appointment.shopImage} 
                        alt={appointment.shopName} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{appointment.shopName}</h3>
                        {getStatusBadge(appointment.status)}
                      </div>
                      <p className="text-sm text-gray-600">{appointment.service}</p>
                      <p className="text-sm text-gray-600">
                        <span>{appointment.date}</span> • <span>{appointment.time}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => cancelAppointment(appointment.id)}
                        className="text-red-500 border-red-500 hover:bg-red-50"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                <h3 className="text-lg font-medium">No Upcoming Appointments</h3>
                <p className="text-gray-500 mb-4">
                  You don't have any appointments scheduled.
                </p>
                <Button 
                  onClick={() => navigate('/shops')}
                  className="bg-salon-600 hover:bg-salon-700"
                >
                  Book an Appointment
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Favorite Salons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockFavoriteSalons.map((salon) => (
                <div key={salon.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="h-14 w-14 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={salon.image} 
                      alt={salon.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{salon.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span>{salon.rating}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{salon.address}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/shops/${salon.id}`)}
                    className="shrink-0 border-salon-600 text-salon-600"
                  >
                    Book
                  </Button>
                </div>
              ))}
              
              <Button
                variant="outline"
                className="w-full mt-2 border-salon-600 text-salon-600"
                onClick={() => navigate('/shops')}
              >
                Discover More Salons
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="history">
        <TabsList className="mb-4">
          <TabsTrigger value="history">Appointment History</TabsTrigger>
          <TabsTrigger value="reviews">Your Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Appointment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Salon</th>
                      <th className="text-left py-3 px-4">Service</th>
                      <th className="text-left py-3 px-4">Date & Time</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments
                      .filter(app => app.status === 'completed' || app.status === 'cancelled')
                      .map((appointment) => (
                        <tr key={appointment.id} className="border-b">
                          <td className="py-3 px-4">{appointment.shopName}</td>
                          <td className="py-3 px-4">{appointment.service}</td>
                          <td className="py-3 px-4">
                            {appointment.date} at {appointment.time}
                          </td>
                          <td className="py-3 px-4">${appointment.price}</td>
                          <td className="py-3 px-4">
                            {getStatusBadge(appointment.status)}
                          </td>
                          <td className="py-3 px-4">
                            {appointment.status === 'completed' && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-salon-600 text-salon-600"
                              >
                                Leave Review
                              </Button>
                            )}
                            {appointment.status === 'cancelled' && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => navigate(`/shops/${appointment.id}`)}
                                className="border-salon-600 text-salon-600"
                              >
                                Rebook
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    {appointments.filter(app => app.status === 'completed' || app.status === 'cancelled').length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-6 text-center text-gray-500">
                          No appointment history found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Your Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedAppointments.length > 0 ? (
                  <>
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">
                          {completedAppointments[0].shopName} • {completedAppointments[0].service}
                        </h3>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-5 w-5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Visited on {completedAppointments[0].date}
                      </p>
                      <p className="text-gray-800">
                        Amazing service! The stylist was professional and friendly. My haircut looks absolutely perfect. Will definitely come back again.
                      </p>
                    </div>
                    
                    {completedAppointments.slice(1).map((appointment) => (
                      <div key={appointment.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-medium">
                            {appointment.shopName} • {appointment.service}
                          </h3>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-salon-600 text-salon-600"
                          >
                            Write a Review
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600">
                          Visited on {appointment.date}
                        </p>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Star className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium">No Reviews Yet</h3>
                    <p className="text-gray-500 mb-4">
                      You haven't left any reviews for your past appointments.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerDashboard;
