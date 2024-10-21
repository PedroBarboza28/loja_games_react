import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface RatingProps {
  rating: number; // Define o tipo da propriedade rating como number
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0; // Verifica se há meia estrela
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {Array(fullStars).fill(null).map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars).fill(null).map((_, i) => (
        <FaStar key={i + fullStars + (halfStar ? 1 : 0)} className="text-gray-300" />
      ))}
    </div>
  );
};

export default Rating;
