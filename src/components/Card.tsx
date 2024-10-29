import React from 'react';
import Rating from './Classificacao';

interface CardProps {
    name: string;
    imageUrl: string;
    brand: string;
    year: number;
    platform: string;
    rating: number;
    purchasePrice: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ name, imageUrl, year, platform, purchasePrice, description, rating }) => {
  return (
    <div className="relative w-full max-w-xs md:w-[250px] md:h-[450px] rounded overflow-hidden border border-solid border-neutral-100">
      {/* Ajustando o contêiner da imagem */}
      <div className="relative w-full h-0 pb-[100%] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
      </div>

      {/* Ajustando o conteúdo */}
      <div className="p-3 text-left">
        <p className="font-normal text-[#0f1111] text-[15.1px] leading-6 mb-2">{name}</p>
        <div className="text-[#565959] text-[12.6px] leading-5 mb-1">{year}</div>
        <div className="font-bold text-[#007185] text-[13.6px] mb-1">{platform}</div>
        <div className="font-normal text-[#0f1111] text-[13.1px] mb-1">Comprar por {purchasePrice}</div>
        <p className="font-normal text-[#565959] text-[13.2px] mb-1">{description}</p>
        <div className="mt-2">
          <Rating rating={rating} onRatingChange={() => {}} /> {/* Classe rating */}
        </div>
      </div>
    </div>
  );
};

export default Card;
