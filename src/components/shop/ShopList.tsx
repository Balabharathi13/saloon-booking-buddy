
import React, { useState } from 'react';
import ShopCard, { Shop } from './ShopCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

// Mock data for shops
const mockShops: Shop[] = [
  {
    id: '1',
    name: 'Elegant Cuts Salon',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    rating: 4.8,
    reviewCount: 127,
    address: '123 Beauty Lane, Styleville',
    distance: '0.8 miles',
    services: ['Haircut', 'Coloring', 'Styling', 'Treatment'],
    isOpen: true
  },
  {
    id: '2',
    name: 'Modern Style Studio',
    image: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    rating: 4.5,
    reviewCount: 89,
    address: '456 Fashion Street, Beauty City',
    distance: '1.2 miles',
    services: ['Haircut', 'Beard Trim', 'Facial', 'Massage'],
    isOpen: true
  },
  {
    id: '3',
    name: 'Glamour & Grace',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    rating: 4.7,
    reviewCount: 210,
    address: '789 Elegant Avenue, Luxetown',
    distance: '1.5 miles',
    services: ['Haircut', 'Coloring', 'Manicure', 'Pedicure', 'Makeup'],
    isOpen: false
  },
  {
    id: '4',
    name: 'The Dapper Den',
    image: 'https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    rating: 4.9,
    reviewCount: 156,
    address: '101 Gentleman Road, Styleton',
    distance: '0.6 miles',
    services: ['Men\'s Haircut', 'Beard Grooming', 'Hot Towel Shave', 'Facial'],
    isOpen: true
  },
  {
    id: '5',
    name: 'Natural Beauty Spa',
    image: 'https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80',
    rating: 4.6,
    reviewCount: 178,
    address: '202 Wellness Drive, Relaxville',
    distance: '2.1 miles',
    services: ['Massage', 'Facial', 'Body Scrub', 'Aromatherapy', 'Sauna'],
    isOpen: true
  },
  {
    id: '6',
    name: 'Polished Nail Studio',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    rating: 4.4,
    reviewCount: 92,
    address: '303 Manicure Street, Glossytown',
    distance: '1.7 miles',
    services: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Polish', 'Acrylics'],
    isOpen: false
  }
];

const ShopList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredShops, setFilteredShops] = useState<Shop[]>(mockShops);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filtered = mockShops.filter(shop => 
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.services.some(service => 
        service.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    
    setFilteredShops(filtered);
  };
  
  return (
    <section className="section-padding">
      <div className="salon-container">
        <div className="mb-8">
          <h2 className="heading-md mb-4">Find the Perfect Salon</h2>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by salon name, service, or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button 
              type="submit"
              className="bg-salon-600 hover:bg-salon-700"
            >
              Search
            </Button>
            <Button 
              type="button" 
              variant="outline"
              className="border-salon-600 text-salon-600"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </form>
        </div>
        
        {filteredShops.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No salons found matching your search.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery('');
                setFilteredShops(mockShops);
              }}
              className="text-salon-600 mt-2"
            >
              Clear search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.map(shop => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopList;
