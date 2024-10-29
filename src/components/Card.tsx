// Card.tsx
import React from 'react';
import Rating from './Classificacao';

interface CardProps {
    name: string;
    imageUrl: string; // Adicione essa propriedade
    brand: string;
    year: number;
    platform: string;
    rating: number;
    purchasePrice: any;
    description: string;
}

const Card: React.FC<CardProps> = ({ name, imageUrl, year, platform, purchasePrice, description, rating }) => {
  return (
<div className="relative w-[250px] h-[450px] sm:w-[300px] sm:h-[500px] md:w-[250px] md:h-[450px] rounded overflow-hidden border border-solid border-neutral-100">
<div className="absolute w-[250px] h-[273px] top-0 left-0">
        <div className="relative h-[273px]">
          <div className="absolute w-[250px] h-[273px] top-0 left-0">
            <div
              className="relative w-[205px] h-[273px] left-[22px] bg-cover"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          </div>
          <div className="absolute w-[250px] h-[273px] top-0 left-0 bg-black opacity-[0.03]" />
        </div>
      </div>
      <div className="absolute w-[250px] h-12 top-[280px] left-[9px] text-left">
        <p className="font-normal text-[#0f1111] text-[15.1px] leading-6 mb-2">
          {name}
        </p>
      </div>
      <div className="absolute left-[9px] top-[330px]">
        <div className="text-[#565959] text-[12.6px] leading-5 mb-1">
          {year}
        </div>
      </div>
      <div className="absolute left-[9px] top-[355px]">
        <div className="font-bold text-[#007185] text-[13.6px] mb-1">
          {platform}
        </div>
      </div>
      <div className="absolute left-[9px] top-[375px]">
        <div className="font-normal text-[#0f1111] text-[13.1px] mb-1">
          Comprar por {purchasePrice}
        </div>
      </div>
      <p className="absolute left-[9px] top-[395px] font-normal text-[#565959] text-[13.2px] mb-1">
        {description}
      </p>
      {/* Renderizando a classificação */}
      <div className="absolute top-[410px] left-[9px]">
        <Rating rating={rating} onRatingChange={function (_rating: number): void {
          throw new Error('Function not implemented.');
        } } /> {/* Passando a classificação aqui */}
      </div>
    </div>
  );
};

export default Card;
