import { Link } from "react-router-dom";
import Rating from "./Classificacao";
import { useCart } from "../cartContext/CartContext";

interface CardProps {
  id: number;
  name: string;
  imageUrl: string;
  brand: string;
  year: number;
  platform: string;
  rating: number;
  purchasePrice: number;
  redirectPath: string;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  imageUrl,
  brand,
  year,
  platform,
  rating,
  purchasePrice,
  redirectPath,
}) => {
  const { addToCart } = useCart(); // Obtendo a função addToCart do contexto

  const handleAddToCart = () => {
    // Criando o item que será adicionado ao carrinho
    const item = {
      id,
      name,
      imageUrl,
      brand,
      year,
      platform,
      rating,
      purchasePrice,
      quantity: 1,
    };

    // Adicionando ao carrinho
    addToCart(item);

    // Exibindo o alerta
    alert(`${name} foi adicionado ao carrinho!`);
  };

  return (
    <div className="relative w-full max-w-xs sm:w-[300px] sm:h-[550px] md:w-[250px] md:h-[460px] rounded-lg overflow-hidden border border-solid border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex sm:flex-col-reverse md:flex-col">
        <div className="relative w-full h-56 sm:h-72 md:h-60 bg-gray-100 overflow-hidden transition-transform duration-300 hover:scale-110">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-contain transition-opacity duration-300 hover:opacity-80"
          />
        </div>
        <div className="sm:flex-1 p-3 text-left sm:p-4">
          <Link to={redirectPath}>
            <p className="font-semibold text-gray-900 text-[16px] sm:text-[18px] leading-6 mb-2 hover:underline">
              {name}
            </p>
          </Link>
          <div className="flex items-center mt-2 gap-2">
            <span className="ml-0 mt-2 text-gray-900 text-[14px] sm:text-[16px]">
              {rating}.0
            </span>
            <Rating rating={rating} onRatingChange={() => {}} />
          </div>
          <div className="text-gray-600 text-[12.6px] sm:text-[14px] leading-5 mb-1">
            {year}
          </div>
          <div className="font-bold text-[#007185] text-[13.6px] sm:text-[15px] mb-1">
            {platform}
          </div>
          <div className="font-normal text-gray-900 text-[13.1px] sm:text-[15px] mb-1">
            Comprar por {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(purchasePrice)}
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            onClick={handleAddToCart} // Adicionando o handler de adicionar ao carrinho
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
