
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, DollarSign, BarChart, Check, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Appointment {
  id: string;
  customerName: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  price: number;
}

interface Worker {
  id: string;
  name: string;
  role: string;
  appointments: number;
  rating: number;
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    customerName: 'John Smith',
    service: 'Haircut',
    date: 'Apr 7, 2025',
    time: '10:00 AM',
    status: 'pending',
    price: 35
  },
  {
    id: '2',
    customerName: 'Emily Johnson',
    service: 'Hair Coloring',
    date: 'Apr 7, 2025',
    time: '11:30 AM',
    status: 'pending',
    price: 85
  },
  {
    id: '3',
    customerName: 'Michael Davis',
    service: 'Beard Trim',
    date: 'Apr 7, 2025',
    time: '1:00 PM',
    status: 'in-progress',
    price: 15
  },
  {
    id: '4',
    customerName: 'Sarah Wilson',
    service: 'Full Treatment Package',
    date: 'Apr 7, 2025',
    time: '2:30 PM',
    status: 'in-progress',
    price: 65
  },
  {
    id: '5',
    customerName: 'Robert Martinez',
    service: 'Haircut',
    date: 'Apr 8, 2025',
    time: '9:30 AM',
    status: 'pending',
    price: 35
  },
  {
    id: '6',
    customerName: 'Jennifer Taylor',
    service: 'Blowout & Styling',
    date: 'Apr 8, 2025',
    time: '11:00 AM',
    status: 'pending',
    price: 25
  },
  {
    id: '7',
    customerName: 'David Brown',
    service: 'Beard Trim',
    date: 'Apr 6, 2025',
    time: '3:00 PM',
    status: 'completed',
    price: 15
  },
  {
    id: '8',
    customerName: 'Lisa Anderson',
    service: 'Hair Coloring',
    date: 'Apr 6, 2025',
    time: '1:30 PM',
    status: 'completed',
    price: 85
  }
];

const mockWorkers: Worker[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Senior Stylist',
    appointments: 24,
    rating: 4.9
  },
  {
    id: '2',
    name: 'Maria Garcia',
    role: 'Colorist',
    appointments: 18,
    rating: 4.7
  },
  {
    id: '3',
    name: 'Sam Taylor',
    role: 'Barber',
    appointments: 22,
    rating: 4.8
  },
  {
    id: '4',
    name: 'Jessica Lee',
    role: 'Junior Stylist',
    appointments: 15,
    rating: 4.5
  }
];

const OwnerDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const { toast } = useToast();
  
  const todayAppointments = appointments.filter(app => app.date === 'Apr 7, 2025');
  const pendingAppointments = appointments.filter(app => app.status === 'pending');
  const inProgressAppointments = appointments.filter(app => app.status === 'in-progress');
  
  const totalRevenue = appointments
    .filter(app => app.status === 'completed')
    .reduce((sum, app) => sum + app.price, 0);
  
  const updateAppointmentStatus = (appointmentId: string, newStatus: Appointment['status']) => {
    setAppointments(appointments.map(app => 
      app.id === appointmentId ? { ...app, status: newStatus } : app
    ));
    
    const appointment = appointments.find(app => app.id === appointmentId);
    
    toast({
      title: "Status Updated",
      description: `Appointment for ${appointment?.customerName} is now ${newStatus}.`,
    });
  };
  
  const getStatusBadge = (status: Appointment['status']) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-blue-500">Pending</Badge>;
      case 'in-progress':
        return <Badge className="bg-amber-500">In Progress</Badge>;
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Today's Appointments</p>
                <h3 className="text-2xl font-bold">{todayAppointments.length}</h3>
              </div>
              <div className="bg-salon-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-salon-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Stylists</p>
                <h3 className="text-2xl font-bold">{mockWorkers.length}</h3>
              </div>
              <div className="bg-salon-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-salon-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Weekly Revenue</p>
                <h3 className="text-2xl font-bold">${totalRevenue}</h3>
              </div>
              <div className="bg-salon-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-salon-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending Appointments</p>
                <h3 className="text-2xl font-bold">{pendingAppointments.length}</h3>
              </div>
              <div className="bg-salon-100 p-3 rounded-full">
                <BarChart className="h-6 w-6 text-salon-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="upcoming">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming Appointments</TabsTrigger>
          <TabsTrigger value="inprogress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="workers">Workers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Customer</th>
                      <th className="text-left py-3 px-4">Service</th>
                      <th className="text-left py-3 px-4">Date & Time</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingAppointments.map((appointment) => (
                      <tr key={appointment.id} className="border-b">
                        <td className="py-3 px-4">{appointment.customerName}</td>
                        <td className="py-3 px-4">{appointment.service}</td>
                        <td className="py-3 px-4">
                          {appointment.date} at {appointment.time}
                        </td>
                        <td className="py-3 px-4">${appointment.price}</td>
                        <td className="py-3 px-4">
                          {getStatusBadge(appointment.status)}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              onClick={() => updateAppointmentStatus(appointment.id, 'in-progress')}
                              className="bg-salon-600 hover:bg-salon-700"
                            >
                              Start
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                              className="border-red-500 text-red-500 hover:bg-red-50"
                            >
                              Cancel
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {pendingAppointments.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-6 text-center text-gray-500">
                          No upcoming appointments
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="inprogress">
          <Card>
            <CardHeader>
              <CardTitle>In Progress Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Customer</th>
                      <th className="text-left py-3 px-4">Service</th>
                      <th className="text-left py-3 px-4">Date & Time</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inProgressAppointments.map((appointment) => (
                      <tr key={appointment.id} className="border-b">
                        <td className="py-3 px-4">{appointment.customerName}</td>
                        <td className="py-3 px-4">{appointment.service}</td>
                        <td className="py-3 px-4">
                          {appointment.date} at {appointment.time}
                        </td>
                        <td className="py-3 px-4">${appointment.price}</td>
                        <td className="py-3 px-4">
                          {getStatusBadge(appointment.status)}
                        </td>
                        <td className="py-3 px-4">
                          <Button
                            size="sm"
                            onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Check className="h-4 w-4 mr-1" />
                            Complete
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {inProgressAppointments.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-6 text-center text-gray-500">
                          No appointments in progress
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Customer</th>
                      <th className="text-left py-3 px-4">Service</th>
                      <th className="text-left py-3 px-4">Date & Time</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments
                      .filter(app => app.status === 'completed')
                      .map((appointment) => (
                        <tr key={appointment.id} className="border-b">
                          <td className="py-3 px-4">{appointment.customerName}</td>
                          <td className="py-3 px-4">{appointment.service}</td>
                          <td className="py-3 px-4">
                            {appointment.date} at {appointment.time}
                          </td>
                          <td className="py-3 px-4">${appointment.price}</td>
                          <td className="py-3 px-4">
                            {getStatusBadge(appointment.status)}
                          </td>
                        </tr>
                      ))}
                    {appointments.filter(app => app.status === 'completed').length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-6 text-center text-gray-500">
                          No completed appointments
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="workers">
          <Card>
            <CardHeader>
              <CardTitle>Stylists & Workers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Role</th>
                      <th className="text-left py-3 px-4">Appointments</th>
                      <th className="text-left py-3 px-4">Rating</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockWorkers.map((worker) => (
                      <tr key={worker.id} className="border-b">
                        <td className="py-3 px-4">{worker.name}</td>
                        <td className="py-3 px-4">{worker.role}</td>
                        <td className="py-3 px-4">{worker.appointments} this month</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span className="mr-1">{worker.rating}</span>
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-salon-600 text-salon-600"
                            >
                              View Details
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-gray-500"
                            >
                              Edit
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <Button className="mt-4 bg-salon-600 hover:bg-salon-700">
                Add New Worker
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OwnerDashboard;
