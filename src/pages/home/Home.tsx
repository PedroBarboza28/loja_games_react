import { useState } from "react";
import { Filtro } from "../../components/Filter"; // Certifique-se de que o caminho esteja correto
import Card from "../../components/Card";
import Carrossel from "../../components/carrossel/Carrossel";

const games = [
  // ... seus jogos aqui ...
  {
    id: 1,
    name: "Flight Simulator",
    brand: "Xbox One",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/flight.png?updatedAt=1722113634898",
    year: 2023,
    rating: 3.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$299.99",
    description: "Uma simulação incrível de pilotagem.",
  },
  {
    id: 2,
    name: "God of War Ragnarok",
    brand: "PS5",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/god.png?updatedAt=1722113706172",
    year: 2022,
    rating: 3.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$399.99",
    description: "Uma jornada intensa em reinos antigos.",
  },
  {
    id: 3,
    name: "Fifa 23",
    brand: "Xbox One",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/fifa_23-min.png?updatedAt=1722113727673",
    year: 2021,
    rating: 4.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$499.99",
    description: "Um jogo de futebol incrível.",
  },
  {
    id: 4,
    name: "Hogwarts Legacy",
    brand: "PS5",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/hogwarts.png?updatedAt=1722113683981",
    year: 2020,
    rating: 4.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$599.99",
    description: "Uma aventura mágica empolgante.",
  },
  {
    id: 5,
    name: "Spiderman PS5",
    brand: "PS5",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/spiderman.png?updatedAt=1722113651917",
    year: 2023,
    rating: 3.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$699.99",
    description: "Um jogo de ação de tirar o fôlego.",
  },
  {
    id: 6,
    name: "One Piece PS4",
    brand: "PS4",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/jogo%20one%20piece%20ps4.webp?updatedAt=1729518490566",
    year: 2022,
    rating: 5.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$799.99",
    description: "Uma aventura repleta de mistérios.",
  },
  {
    id: 7,
    name: "One Piece Unlimited World PS4",
    brand: "PS4",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/one%20piece%20jogo%20ps4%202.jpeg?updatedAt=1729519209697",
    year: 2021,
    rating: 5.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$899.99",
    description: "Uma jornada cheia de aventuras.",
  },
  {
    id: 8,
    name: "Mortal Kombat PS5",
    brand: "PS5",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/mortal%20kombat.webp?updatedAt=1729522107646",
    year: 2020,
    rating: 4.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$99.99",
    description: "Um jogo de luta eletrizante.",
  },
  {
    id: 9,
    name: "Naruto Ultimated",
    brand: "PS5",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/boruto.webp?updatedAt=1729522276288",
    year: 2023,
    rating: 4.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$109.99",
    description: "Uma nova jornada épica começa.",
  },
];

const Home = () => {
  const [filtros, setFiltros] = useState<{
    precoMax: number;
    marcas: string[];
    classificacao: number;
  }>({ precoMax: 1000, marcas: [], classificacao: 3 });

  const aplicarFiltros = (novosFiltros: {
    precoMax: number;
    marcas: string[];
    classificacao: number;
  }) => {
    setFiltros(novosFiltros);
  };

  const jogosFiltrados = games.filter((game) => {
    const marcaMatch =
      filtros.marcas.length === 0 || filtros.marcas.includes(game.brand);
    const classificacaoMatch = game.rating >= filtros.classificacao;
    const precoMatch =
      parseFloat(game.purchasePrice.replace("$", "")) <= filtros.precoMax;

    return marcaMatch && classificacaoMatch && precoMatch;
  });

  return (
    <>
      <Carrossel />
      <div className="flex flex-col items-center"> {/* Centralizando o conteúdo */}
        <section className="relative py-0 m-0">
          {/* Seu código para a seção de apresentação */}
        </section>

        <section className="py-0">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row mt-10 mb-10 w-full"> {/* Flex-col para o layout vertical */}
              <div className="w-full md:w-1/4">
                <Filtro onFiltrar={aplicarFiltros} />
              </div>
              <div className="w-full md:w-3/4 flex flex-col items-center"> {/* Flex-col e centralizando */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 "> {/* Mantendo grid */}
                  {jogosFiltrados.map((game) => (
                    <Card
                      key={game.id}
                      name={game.name}
                      brand={game.brand}
                      imageUrl={game.imageUrl}
                      year={game.year}
                      rating={game.rating}
                      platform={game.platform}
                      purchasePrice={game.purchasePrice}
                      description={game.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex mb-10 justify-center font-serif">
          jogo(s) encontrado(s): {jogosFiltrados.length}
        </div>
      </div>
    </>
  );
};

export default Home;
