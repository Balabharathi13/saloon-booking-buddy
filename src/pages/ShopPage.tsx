
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingForm from '@/components/booking/BookingForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Clock, Phone, Mail, Scissors } from 'lucide-react';

// Mock shop details
const mockShop = {
  id: '1',
  name: 'Elegant Cuts Salon',
  tagline: 'Where Style Meets Excellence',
  description: 'Elegant Cuts Salon is a premium hair styling destination offering a wide range of services from expert haircuts to coloring and treatments. Our experienced stylists are dedicated to providing exceptional service in a relaxing environment.',
  images: [
    'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
  ],
  rating: 4.8,
  reviewCount: 127,
  address: '123 Beauty Lane, Styleville',
  hours: {
    monday: '9:00 AM - 7:00 PM',
    tuesday: '9:00 AM - 7:00 PM',
    wednesday: '9:00 AM - 7:00 PM',
    thursday: '9:00 AM - 8:00 PM',
    friday: '9:00 AM - 8:00 PM',
    saturday: '10:00 AM - 6:00 PM',
    sunday: 'Closed'
  },
  phone: '+1 (555) 123-4567',
  email: 'info@elegantcuts.com',
  services: [
    {
      category: 'Haircuts & Styling',
      items: [
        { name: 'Women\'s Haircut', price: 45 },
        { name: 'Men\'s Haircut', price: 35 },
        { name: 'Children\'s Haircut', price: 25 },
        { name: 'Blowout & Styling', price: 30 }
      ]
    },
    {
      category: 'Color Services',
      items: [
        { name: 'Root Touch-up', price: 65 },
        { name: 'Full Color', price: 85 },
        { name: 'Highlights', price: 95 },
        { name: 'Balayage', price: 120 }
      ]
    },
    {
      category: 'Treatments',
      items: [
        { name: 'Deep Conditioning', price: 25 },
        { name: 'Keratin Treatment', price: 150 },
        { name: 'Scalp Treatment', price: 35 }
      ]
    }
  ],
  reviews: [
    {
      id: '1',
      author: 'Sarah Johnson',
      rating: 5,
      date: 'March 15, 2025',
      text: 'Absolutely amazing service! My stylist was so attentive and gave me exactly what I wanted. The salon atmosphere is relaxing and upscale. Highly recommend!'
    },
    {
      id: '2',
      author: 'Michael Brown',
      rating: 4,
      date: 'March 10, 2025',
      text: 'Great haircut and friendly service. The only reason I\'m not giving 5 stars is because I had to wait a bit past my appointment time, but the result was worth it.'
    },
    {
      id: '3',
      author: 'Emily Davis',
      rating: 5,
      date: 'February 28, 2025',
      text: 'This is my go-to salon now! The staff is professional, the atmosphere is wonderful, and my color always turns out perfect. Worth every penny!'
    }
  ],
  stylists: [
    {
      id: '1',
      name: 'Alex Rivera',
      role: 'Senior Stylist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      specialties: ['Cutting', 'Styling', 'Color']
    },
    {
      id: '2',
      name: 'Jamie Chen',
      role: 'Color Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      specialties: ['Color', 'Highlights', 'Balayage']
    },
    {
      id: '3',
      name: 'Taylor Smith',
      role: 'Junior Stylist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      specialties: ['Cutting', 'Blowouts', 'Treatments']
    }
  ]
};

const ShopPage = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const shop = mockShop; // In a real app, we would fetch the shop data based on shopId
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-white">
          {/* Shop Images */}
          <div className="h-80 relative overflow-hidden">
            <div className="grid grid-cols-3 h-full gap-1">
              <div className="col-span-2 h-full overflow-hidden">
                <img 
                  src={shop.images[0]} 
                  alt={shop.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 h-full">
                <div className="flex-1 overflow-hidden">
                  <img 
                    src={shop.images[1]} 
                    alt={shop.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <img 
                    src={shop.images[2]} 
                    alt={shop.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="salon-container py-8">
            {/* Shop Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="heading-lg mb-2">{shop.name}</h1>
                <p className="text-gray-600 text-lg mb-2">{shop.tagline}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="font-semibold">{shop.rating}</span>
                    <span className="text-gray-500 ml-1">({shop.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span>{shop.address}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="col-span-2">
                <Tabs defaultValue="booking">
                  <TabsList className="mb-6">
                    <TabsTrigger value="booking">Book Appointment</TabsTrigger>
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="booking">
                    <div className="bg-white rounded-lg p-6">
                      <h2 className="heading-md mb-6">Book Your Appointment</h2>
                      <BookingForm shopId={shop.id} shopName={shop.name} />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="about">
                    <div className="bg-white rounded-lg p-6">
                      <h2 className="heading-md mb-4">About {shop.name}</h2>
                      <p className="text-gray-700 mb-6">{shop.description}</p>
                      
                      <h3 className="heading-sm mb-4">Our Stylists</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {shop.stylists.map((stylist) => (
                          <div key={stylist.id} className="border rounded-lg p-4 text-center">
                            <div className="h-24 w-24 mx-auto mb-3 rounded-full overflow-hidden">
                              <img 
                                src={stylist.image} 
                                alt={stylist.name} 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <h4 className="font-semibold">{stylist.name}</h4>
                            <p className="text-gray-600 text-sm mb-2">{stylist.role}</p>
                            <div className="flex flex-wrap justify-center gap-1">
                              {stylist.specialties.map((specialty, idx) => (
                                <span 
                                  key={idx}
                                  className="bg-salon-50 text-salon-700 text-xs px-2 py-1 rounded-full"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="heading-sm mb-4">Business Hours</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {Object.entries(shop.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between">
                            <span className="capitalize">{day}</span>
                            <span>{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="services">
                    <div className="bg-white rounded-lg p-6">
                      <h2 className="heading-md mb-6">Our Services</h2>
                      
                      {shop.services.map((category, idx) => (
                        <div key={idx} className="mb-8">
                          <h3 className="heading-sm mb-4 pb-2 border-b">{category.category}</h3>
                          <div className="space-y-3">
                            {category.items.map((service, serviceIdx) => (
                              <div key={serviceIdx} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                  <Scissors className="h-5 w-5 text-gray-400 mr-2" />
                                  <span>{service.name}</span>
                                </div>
                                <span className="font-semibold">${service.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews">
                    <div className="bg-white rounded-lg p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="heading-md">Customer Reviews</h2>
                        <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="font-semibold">{shop.rating}</span>
                          <span className="text-gray-500 ml-1">({shop.reviewCount})</span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {shop.reviews.map((review) => (
                          <div key={review.id} className="border-b pb-6">
                            <div className="flex justify-between mb-2">
                              <h4 className="font-semibold">{review.author}</h4>
                              <span className="text-gray-500 text-sm">{review.date}</span>
                            </div>
                            <div className="flex mb-2">
                              {[...Array(5)].map((_, idx) => (
                                <Star 
                                  key={idx} 
                                  className={`h-4 w-4 ${idx < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-gray-600">{shop.address}</p>
                        <a href="#" className="text-salon-600 text-sm hover:underline">Get Directions</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-gray-600">{shop.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">{shop.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Today's Hours</h4>
                        <p className="text-gray-600">{shop.hours.monday}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
                    {/* This would be a map in a real application */}
                    <div className="h-full w-full flex items-center justify-center bg-gray-100">
                      <MapPin className="h-10 w-10 text-gray-400" />
                      <span className="text-gray-500 ml-2">Map Placeholder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;
