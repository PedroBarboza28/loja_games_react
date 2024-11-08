import { useState } from 'react';
import Banner from '../banner/Banner';

const Seeker = () => {
  // Estado para controlar a imagem selecionada
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Definindo o tipo correto

  // Função para lidar com o clique na imagem
  const handleImageClick = (imageUrl: string) => { // Aceita apenas string
    setSelectedImage(imageUrl);
  };

  return (
    <div className="game-detail-container flex flex-col items-center p-4 rounded-lg shadow-lg">
        <Banner/>
      <div className="flex flex-col ml-0 md:flex-row md:items-start w-full gap-4">
        {/* Imagem do Jogo */}
        <div className="game-image w-full md:w-1/4 flex justify-start">
          <img
            src="https://ik.imagekit.io/netdmdufko/jogo%20one%20piece%20ps4.webp?updatedAt=1729518490566"
            alt="Microsoft Flight Simulator"
            className="w-80 h-88 md:w-100 md:h-100 rounded-md shadow-lg"
          />
        </div>

        {/* Informações sobre o Jogo */}
        <div className="game-info w-full md:w-1/2 flex flex-col gap-2 text-start">
          <h2 className="text-2xl font-bold">One Piece: World Seeker World</h2>
          <p className="font-semibold text-lg">
          One Piece: World Seeker World Seeker Standard Bandai Nanco Playstation 4 Físico
          </p>
          <p className="text-sm text-gray-600">Autor: Bandai Nanco</p>
          <div className="rating flex items-center">⭐⭐⭐⭐⭐ (2,7 de 5 - 28 avaliações)</div>
          {/* Descrição do Jogo */}
          <p className="text-sm mt-4 text-justify text-gray-700">
          Com este jogo One Piece, você desfrutará de horas de diversão e novos desafios que lhe permitirão melhorar como jogador.          </p>
          <p className="text-sm mt-2 text-justify text-gray-700">
          Deixe a bússola para trás e junte-se a Luffy em uma nova aventura recheada de ação. Explore os poderes da lendária Gomugomu-no-Mi para desvendar os segredos de uma ilha original e inédita! É hora de zarpar!          </p>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/4 p-4">
          {/* Container do vídeo com o texto sobreposto */}
          <div className="relative w-full">
            <iframe
              src="https://giphy.com/embed/DwbVcMLD9M7nAOzLJL"
              width="100%"
              height="274"
              frameBorder="0"
              allowFullScreen
              title="GIF"
              className="giphy-embed"
            ></iframe>

            <div className="absolute bottom-0 w-full bg-white bg-opacity-100 text-center py-2 z-10">
              <p className="font-semibold text-gray-800">Explore as vastidões desta nova ilha para desvendar todos os segredos.</p>
            </div>
          </div>

          {/* Botões de ação em coluna */}
          <div className="flex flex-col w-full space-y-4 mt-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">Carrinho</button>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">Comprar</button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 w-full md:w-4/4">
        {/* Container de Grid para as imagens */}
        <div className="grid grid-cols-2 mt-5 gap-0 w-80 h-20">
          {[
            "https://ik.imagekit.io/netdmdufko/criatico%20seeker%201.webp?updatedAt=1730516396888",
            "https://ik.imagekit.io/netdmdufko/criatico%20seeker%202.png?updatedAt=1730516396987",
            "https://ik.imagekit.io/netdmdufko/criatico%20seeker%203.avif?updatedAt=1730516397267",
            "https://ik.imagekit.io/netdmdufko/criatico%20seeker%204.webp?updatedAt=1730516397518"
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Flight ${index + 24}`}
              className="w-40 h-32 object-cover transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(src)} // Chama a função ao clicar
            />
          ))}
        </div>

        {/* Detalhes do Produto */}
        <div className="product-details text-start p-4 border-t border-b border-gray-300 w-full md:w-3/4 md:ml-auto">
          <h3 className="text-2xl font-extrabold mb-4 text-left">Detalhes do Produto</h3>
          <ul className="text-gray-700 space-y-1">
            <li><span className="font-bold">Formato:</span> Físico</li>
            <li><span className="font-bold">Idioma:</span> Inglês</li>
            <li><span className="font-bold">Gênero:</span> Ação</li>
            <li><span className="font-bold">Tamanho do arquivo:</span> 17.16 GB.</li>
            <li><span className="font-bold">É multijogador:</span>  Não</li>
            <li><span className="font-bold">É online:</span> Não</li>
            <li><span className="font-bold">Ano de lançamento:</span> 2022</li>
            <li><span className="font-bold">Edição:</span> Standard Edition</li>
          </ul>
        </div>
      </div>

     {/* Imagem selecionada abaixo do grid */}
{selectedImage && (
  <div className="mt-4 w-full flex justify-center relative">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-center p-2 rounded-md">
      Imagem do jogo abaixo
    </div>
    <img
   src={selectedImage}
   alt="Imagem Selecionada"
   className="w-full md:w-3/4 object-contain "
   style={{ height: '500px' }} // Ajuste a altura aqui
/>

  </div>
)}


      {/* Designer de Enfeite */}
      <div className="decoration mt-6 w-full flex justify-center "></div>
    </div>
  );
};

export default Seeker;
