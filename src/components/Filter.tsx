import React, { useState } from 'react';

interface FiltroProps {
  image: string;
  label: string;
}

export const Filtro: React.FC<FiltroProps> = ({ image }) => {
  // Estados para controlar os valores do range
  const [precoMin, setPrecoMin] = useState(0);
  const [precoMax] = useState(1000);
  const [marcasSelecionadas, setMarcasSelecionadas] = useState<string[]>([]);

  const marcas = ['PS4', 'Xbox One', 'PS5'];

  const handleMarcaChange = (marca: string) => {
    setMarcasSelecionadas((prev) =>
      prev.includes(marca) ? prev.filter((m) => m !== marca) : [...prev, marca]
    );
  };

  return (
    <div className="w-[279px]">
      {/* Filtro de Classificação */}
      <div id="classificacao" className="relative w-[279px] h-[22px] mb-4">
        <img
          className="absolute w-[95px] h-[22px] -top-0.5 left-0"
          alt="Image"
          src={image}
        />
        <div className="absolute w-[42px] h-3.5 top-px left-[100px] font-normal text-[#0f1111] text-[11.4px] leading-4">
          e acima
        </div>
      </div>

      {/* Filtro de Marcas */}
      <div id="marcas" className="relative w-[279px] mb-4">
      <h1 className='flex items-center font-bold'>Marcas</h1>
        <div className="flex flex-col space-y-3">
          {marcas.map((marca, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={marca}
                checked={marcasSelecionadas.includes(marca)}
                onChange={() => handleMarcaChange(marca)}
                className="w-4 h-4 accent-blue-500" // Muda a cor do checkbox se desejado
              />
              <label htmlFor={marca} className="ml-2 text-[#0f1111] text-[13.5px]">
                {marca}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Filtro de Preço */}
      <div id="preco" className="relative w-[279px] h-[120px] mb-4">
        <h1 className='flex items-center font-bold'>Preço</h1>
        <div className="flex items-center mb-2">
          <span className="font-bold text-[#0f1111]">R${precoMin}</span>
          <span className="font-bold mx-2">-</span>
          <span className="font-bold text-[#0f1111]">R${precoMax} </span>
        </div>

        {/* Controle deslizante (Range) */}
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={precoMin}
          onChange={(e) => setPrecoMin(Number(e.target.value))}
          className="w-full mb-2"
        />
      </div>
    </div>
  );
};
