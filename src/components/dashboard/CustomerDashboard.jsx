
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, Clock, Star } from 'lucide-react';

const CustomerDashboard = () => {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="appointments" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2 md:flex bg-white rounded-lg border">
          <TabsTrigger value="appointments" className="py-2.5">My Appointments</TabsTrigger>
          <TabsTrigger value="history" className="py-2.5">History & Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="appointments" className="pt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Upcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-salon-600 mr-2" />
                  <span className="text-3xl font-bold">2</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-salon-600 mr-2" />
                  <span className="text-3xl font-bold">7</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Pending Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-salon-600 mr-2" />
                  <span className="text-3xl font-bold">2</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your upcoming salon bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="bg-salon-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-salon-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <h4 className="font-medium text-lg">Elegant Cuts Salon</h4>
                          <p className="text-sm text-gray-500 mb-1">Hair Cut + Styling</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-3">Stylist: Emma W.</span>
                            <span>₹650</span>
                          </div>
                        </div>
                        <div className="md:text-right">
                          <p className="text-sm text-gray-500">
                            {i === 1 ? 'Tomorrow' : 'Oct 15, 2023'}
                          </p>
                          <p className="font-semibold">{i === 1 ? '11:30 AM' : '2:00 PM'}</p>
                          <p className="text-xs text-gray-500">45 min</p>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button variant="outline" size="sm" className="text-red-600">Cancel</Button>
                        <Button size="sm" className="ml-auto">Get Directions</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-salon-600">Book New Appointment</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Appointment History</CardTitle>
              <CardDescription>Your past appointments and reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <div>
                        <h4 className="font-medium">Glamour Studio</h4>
                        <p className="text-sm text-gray-500">Full Hair Makeover</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span>Sept {20-i*3}, 2023</span>
                          <span className="mx-2">•</span>
                          <span>₹1,200</span>
                        </div>
                      </div>
                      <div>
                        {i === 3 ? (
                          <div className="flex mt-2 md:mt-0">
                            <Button variant="outline" size="sm" className="text-salon-600">
                              Leave a Review
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            {Array(5).fill(0).map((_, idx) => (
                              <Star key={idx} className={`h-4 w-4 ${idx < (5-i+1) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {i !== 3 && (
                      <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                        {i === 1 ? 
                          "Amazing experience! The stylist was very talented and understood exactly what I wanted." :
                          "Good service overall. The salon was clean and staff was friendly."
                        }
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerDashboard;
