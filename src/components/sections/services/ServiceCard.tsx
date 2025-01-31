import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode; // You can use a React component for the icon
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white border-2 border-customGold rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-customGold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;