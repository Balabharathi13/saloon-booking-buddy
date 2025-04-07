
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, Scissors } from 'lucide-react';

export interface Shop {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  address: string;
  distance?: string;
  services: string[];
  isOpen: boolean;
}

interface ShopCardProps {
  shop: Shop;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  const navigate = useNavigate();
  
  const viewShop = () => {
    navigate(`/shops/${shop.id}`);
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={shop.image} 
          alt={shop.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
          {shop.isOpen ? (
            <span className="text-green-600 flex items-center">
              <span className="h-2 w-2 bg-green-600 rounded-full mr-1"></span>
              Open
            </span>
          ) : (
            <span className="text-red-600 flex items-center">
              <span className="h-2 w-2 bg-red-600 rounded-full mr-1"></span>
              Closed
            </span>
          )}
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold truncate">{shop.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-sm font-medium">{shop.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({shop.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{shop.address}</span>
          {shop.distance && (
            <span className="ml-2 flex-shrink-0">{shop.distance}</span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {shop.services.slice(0, 3).map((service, index) => (
            <span 
              key={index}
              className="bg-salon-50 text-salon-700 text-xs px-2 py-1 rounded-full"
            >
              {service}
            </span>
          ))}
          {shop.services.length > 3 && (
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
              +{shop.services.length - 3} more
            </span>
          )}
        </div>
        
        <Button onClick={viewShop} className="w-full bg-salon-600 hover:bg-salon-700">
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShopCard;
