const Flight = () => {
  return (
    <div className="game-detail-container flex flex-col items-center p-4 rounded-lg shadow-lg">
      <div className="flex flex-col ml-0 md:flex-row md:items-start w-full gap-4">
        {/* Imagem do Jogo */}
        <div className="game-image w-full md:w-1/4 flex justify-start">
          <img
            src="https://ik.imagekit.io/netdmdufko/flight.png?updatedAt=1722113634898"
            alt="Microsoft Flight Simulator"
            className="w-80 h-88 md:w-100 md:h-100 rounded-md shadow-lg"
          />
        </div>

        {/* Informações sobre o Jogo */}
        <div className="game-info w-full md:w-1/2 flex flex-col gap-2 text-start">
          <h2 className="text-2xl font-bold">Microsoft Flight Simulator</h2>
          <p className="font-semibold text-lg">
            Microsoft Flight Simulator 2020: Complete New Edition 2021 -
            Walkthrough and Guide
          </p>
          <p className="text-sm text-gray-600">Autor: Microsoft</p>
          <div className="rating flex items-center">
            ⭐⭐⭐☆ (2,7 de 5 - 28 avaliações)
          </div>

          {/* Descrição do Jogo */}
          <p className="text-sm mt-4 text-justify text-gray-700">
            O guia do Flight Simulator é um compêndio do mais recente simulador
            de voo civil. Aqui você encontra descrição de versões disponíveis,
            modos de jogo, lista de aeronaves, conjunto de aeroportos e
            respostas para as perguntas essenciais sobre o jogo. Inclui
            informações básicas e sugestões para ajudar você a começar a voar,
            mesmo sem experiência.
          </p>

          <p className="text-sm mt-2 text-justify text-gray-700">
            Exploramos opções que tornam o jogo mais acessível e ajustável ao
            seu gosto. O guia de voo explica níveis do voo, do básico à
            navegação e planejamento de rota. Para pilotos mais experientes,
            preparamos seções avançadas, cobrindo o uso do piloto automático e
            funcionalidades como pouso automático com ILS.
          </p>
        </div>

        <div className="flex w-full md:w-1/4">
          {" "}
          Realizar os testes criativos para saber se vai ser utilizado imagem ou
          video e depois Inserir botões de carrinho e comprar aqui! abaixo da
          imagem ou vídeo
        </div>
      </div>

<div className="flex flex-1 w-full md:w-4/4 ">
    <div className=" flex md:w-1/4">Vou adicionar um criativo aqui </div>
      {/* Detalhes do Produto */}
      <div className="product-details text-start p-4 border-t border-b border-gray-300 w-full md:w-3/4 md:ml-auto">
        <h3 className="text-2xl font-extrabold mb-4 text-left">
          Detalhes do Produto
        </h3>
        <ul className="text-gray-700 space-y-1">
          <li>
            <span className="font-bold">ASIN:</span> B09FGN55SN
          </li>
          <li>
            <span className="font-bold">Idioma:</span> Inglês
          </li>
          <li>
            <span className="font-bold">Tamanho do arquivo:</span> 1611 KB
          </li>
          <li>
            <span className="font-bold">Dispositivos permitidos:</span>{" "}
            Ilimitado
          </li>
          <li>
            <span className="font-bold">Leitura de texto:</span> Habilitado
          </li>
          <li>
            <span className="font-bold">Leitor de tela:</span> Compatível
          </li>
          <li>
            <span className="font-bold">Configuração de fonte:</span> Habilitado
          </li>
          <li>
            <span className="font-bold">Número de páginas:</span> 186 páginas
          </li>
          <li>
            <span className="font-bold">Ranking:</span> Nº 704.536 em Loja
            Kindle
          </li>
        </ul>
      </div>
      </div>

      {/* Designer de Enfeite */}
      <div className="decoration mt-6 w-full flex justify-center">
        <hr className="border-t-2 border-gray-300 w-3/4 rounded-lg" />
      </div>
    </div>
  );
};

export default Flight;
