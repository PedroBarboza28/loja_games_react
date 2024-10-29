import React from "react";
import Rating from "./Classificacao";

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

const Card: React.FC<CardProps> = ({
  name,
  imageUrl,
  year,
  platform,
  purchasePrice,
  description,
  rating,
}) => {
  return (
    <div className="relative w-full max-w-xs sm:w-[300px] sm:h-[550px] md:w-[250px] md:h-[450px] rounded overflow-hidden border border-solid border-neutral-100">
      {/* Ajustando o contêiner da imagem e do conteúdo */}
      <div className="flex sm:flex-col-reverse md:flex-col">
        {/* Coluna da imagem */}
        <div className="relative w-full h-56 sm:h-72 md:h-60 bg-gray-100 overflow-hidden"> 
          {/* Define diferentes tamanhos de altura para diferentes telas */}
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        {/* Coluna dos atributos */}
        <div className="sm:flex-1 p-3 text-left sm:p-4">
          <p className="font-normal text-[#0f1111] text-[16px] sm:text-[18px] leading-6 mb-2">
            {name}
          </p>
          <div className="flex items-center mt-2 gap-2">
            <span className="ml-0 mt-2 text-[#0f1111] text-[14px] sm:text-[16px]">
              {rating}.0
            </span>
            <Rating rating={rating} onRatingChange={() => {}} />
          </div>
          <div className="text-[#565959] text-[12.6px] sm:text-[14px] leading-5 mb-1">
            {year}
          </div>
          <div className="font-bold text-[#007185] text-[13.6px] sm:text-[15px] mb-1">
            {platform}
          </div>
          <div className="font-normal text-[#0f1111] text-[13.1px] sm:text-[15px] mb-1">
            Comprar por {purchasePrice}
          </div>
          <p className="font-normal text-[#565959] text-[13.2px] sm:text-[15px] mb-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
