
import React from 'react';
import { Calendar, Users, ClipboardCheck, Star, MapPin, CreditCard } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="rounded-full w-12 h-12 bg-salon-100 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-salon-600" />,
      title: "Easy Booking",
      description: "Book appointments at your favorite salons with just a few clicks, any time of day."
    },
    {
      icon: <Users className="h-6 w-6 text-salon-600" />,
      title: "Find Expert Stylists",
      description: "Discover talented stylists and specialists for all your beauty needs."
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-salon-600" />,
      title: "Real-time Availability",
      description: "See real-time availability and book the perfect time slot that works for you."
    },
    {
      icon: <Star className="h-6 w-6 text-salon-600" />,
      title: "Verified Reviews",
      description: "Read authentic reviews and ratings to make an informed choice."
    },
    {
      icon: <MapPin className="h-6 w-6 text-salon-600" />,
      title: "Nearby Locations",
      description: "Find the best salons near you with our location-based search feature."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-salon-600" />,
      title: "Hassle-free Payments",
      description: "Pay securely online or at the salon with multiple payment options."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="salon-container">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">Why Choose Saloon Master</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform makes salon booking and management seamless for both customers and salon owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
