
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Scissors, Calendar, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gradient-to-r from-salon-100 to-salon-50 py-20 relative overflow-hidden">
      <div className="salon-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <h1 className="heading-lg text-gray-900">
              Book Your Perfect Salon Experience with <span className="text-salon-600">Saloon Master</span>
            </h1>
            <p className="text-lg text-gray-700 md:pr-12">
              Find and book appointments at the best salons near you. 
              Streamlined booking, easy management, and exceptional service.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => navigate('/shops')}
                className="bg-salon-600 hover:bg-salon-700 text-white px-8 py-6 text-lg"
              >
                Find a Salon
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/auth', { state: { mode: 'register' } })}
                className="border-salon-600 text-salon-600 hover:bg-salon-50 px-8 py-6 text-lg"
              >
                Register Your Salon
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-start space-y-4 sm:space-y-0 sm:space-x-8 mt-4">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Scissors className="h-5 w-5 text-salon-600" />
                </div>
                <span className="ml-2 text-gray-700">Top-rated Salons</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Calendar className="h-5 w-5 text-salon-600" />
                </div>
                <span className="ml-2 text-gray-700">Easy Scheduling</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Star className="h-5 w-5 text-salon-600" />
                </div>
                <span className="ml-2 text-gray-700">Verified Reviews</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl transform rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Salon experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-white p-4 rounded-lg shadow-lg transform -rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="Salon treatment" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            
            <div className="absolute top-10 -right-10 bg-white rounded-lg shadow-lg p-4 max-w-xs transform rotate-2">
              <div className="flex items-start space-x-2">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-salon-100 flex items-center justify-center">
                    <Star className="h-5 w-5 text-salon-600 fill-salon-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Amazing Experience!</p>
                  <p className="text-xs text-gray-500">Booking was so easy, and the salon was perfect!</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-salon-200 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-salon-300 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default Hero;
