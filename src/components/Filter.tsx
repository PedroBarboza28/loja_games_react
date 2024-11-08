import React, { useState } from "react";
import Rating from "./Classificacao";

interface FiltroProps {
  onFiltrar: (filtros: { precoMax: number; marcas: string[]; classificacao: number }) => void;
}

export const Filtro: React.FC<FiltroProps> = ({ onFiltrar }) => {
  const [precoMax, setPrecoMax] = useState(1000); // Preço máximo padrão
  const [marcasSelecionadas, setMarcasSelecionadas] = useState<string[]>([]);
  const [classificacao, setClassificacao] = useState(3); // Defina uma classificação padrão

  const marcas = ["PS4", "Xbox One", "PS5"];

  const handleMarcaChange = (marca: string) => {
    setMarcasSelecionadas((prev) =>
      prev.includes(marca) ? prev.filter((m) => m !== marca) : [...prev, marca]
    );
  };

  const aplicarFiltros = () => {
    onFiltrar({ precoMax, marcas: marcasSelecionadas, classificacao });
  };

  // Chame aplicarFiltros quando o valor do filtro mudar
  React.useEffect(() => {
    aplicarFiltros();
  }, [precoMax, marcasSelecionadas, classificacao]);

  return (
    <div className="w-[279px] border border-[#e7e7e7] rounded-lg p-4 px-0 shadow-sm mb-10">
      <h2 className="font-bold flex items-center ml-3 mb-4">Filtrar Jogos por</h2>
      <div className="border-t border-gray-300 w-full m-0 mx-0" />

      {/* Filtro de Classificação */}
      <div id="classificacao" className="p-3 mb-4">
        <h3 className="flex items-center font-bold mb-2">Classificação</h3>
        <div className="flex items-center">
          <Rating rating={classificacao} onRatingChange={setClassificacao} />
          <div className="ml-2 font-normal text-[#0f1111] text-[11.4px] leading-4">e acima</div>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4" />

      {/* Filtro de Marcas */}
      <div id="marcas" className="p-3 mb-4">
        <h3 className="flex items-center font-bold mb-2">Marcas</h3>
        <div className="flex flex-col space-y-3">
          {marcas.map((marca) => (
            <div key={marca} className="flex items-center">
              <input
                type="checkbox"
                id={marca}
                checked={marcasSelecionadas.includes(marca)}
                onChange={() => handleMarcaChange(marca)}
                className="w-4 h-4 accent-blue-500"
              />
              <label htmlFor={marca} className="ml-2 text-[#0f1111] text-[13.5px]">
                {marca}
              </label>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4" />

      {/* Filtro de Preço */}
      <div id="preco" className="p-3">
        <h3 className="flex items-center font-bold mb-2">Preço</h3>
        <div className="flex items-center mb-2">
          <span className="font-bold text-[#0f1111]">R${precoMax}</span>
          <span className="font-bold mx-2">-</span>
          <span className="font-bold text-[#0f1111]">R$1000</span>
        </div>

        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={precoMax}
          onChange={(e) => setPrecoMax(Number(e.target.value))}
          className="w-full mb-2"
        />
      </div>
    </div>
  );
};
