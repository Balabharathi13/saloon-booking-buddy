
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, User, Users, DollarSign, Clock, Star } from 'lucide-react';

const OwnerDashboard = () => {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-4 md:flex overflow-x-auto bg-white rounded-lg border">
          <TabsTrigger value="overview" className="py-2.5">Overview</TabsTrigger>
          <TabsTrigger value="appointments" className="py-2.5">Appointments</TabsTrigger>
          <TabsTrigger value="workers" className="py-2.5">Workers</TabsTrigger>
          <TabsTrigger value="analytics" className="py-2.5">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="pt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Today's Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-salon-600 mr-2" />
                  <span className="text-3xl font-bold">12</span>
                </div>
                <p className="text-xs text-green-600 mt-2">+3 from yesterday</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Completed Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-salon-600 mr-2" />
                  <span className="text-3xl font-bold">8</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">4 remaining</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Available Workers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-salon-600 mr-2" />
                  <span className="text-3xl font-bold">3</span>
                </div>
                <p className="text-xs text-amber-600 mt-2">2 currently busy</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Today's Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 text-salon-600 mr-2" />
                  <span className="text-3xl font-bold">$420</span>
                </div>
                <p className="text-xs text-green-600 mt-2">+$110 from yesterday</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Next 3 appointments for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="bg-salon-100 rounded-full p-2 mr-3">
                        <Clock className="h-5 w-5 text-salon-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Jessica Smith</h4>
                            <p className="text-sm text-gray-500">Hair Cut + Styling</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">11:{i*15} AM</p>
                            <p className="text-sm text-gray-500">30 min</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Appointments</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
                <CardDescription>Latest customer feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Michael Johnson</h4>
                        <div className="flex">
                          {Array(5).fill(0).map((_, idx) => (
                            <Star key={idx} className={`h-4 w-4 ${idx < 5-i+1 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {['Great service, very professional!', 'Really loved my new hairstyle!', 'Friendly staff and clean salon.'][i-1]}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">{i} day{i !== 1 ? 's' : ''} ago</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Reviews</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="appointments" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Appointments</CardTitle>
              <CardDescription>Manage your salon's appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Appointments content goes here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="workers" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Workers</CardTitle>
              <CardDescription>Manage your salon staff</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Workers content goes here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View your salon performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Analytics content goes here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OwnerDashboard;
