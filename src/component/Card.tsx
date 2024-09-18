
import React from 'react';

// Define the props type
interface CardProps {
  image: string;
  name: string;
  role: string;
  company: string[];
}

const Card: React.FC<CardProps> = ({ image, name, role, company }) => {
  return (
    <div className="bg-white text-black p-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center mb-3">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
        />
      </div>
      <h3 className="text-lg font-semibold text-center mb-1">{name}</h3>
      <h4 className="text-base text-center mb-2">{role}</h4>
      <div className="text-center">
        {company.map((comp, index) => (
          <p key={index} className="text-xs">
            {comp}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
