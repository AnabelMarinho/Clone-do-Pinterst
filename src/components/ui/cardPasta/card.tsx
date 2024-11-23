import React from "react";

interface CardProps {
  value: string; 
}

const Card: React.FC<CardProps> = ({ value }) => {
  return (
    <div className="w-full h-full bg-gray-300 rounded-lg">
      <p>{value}</p> 
    </div>
  );
};

export default Card;
