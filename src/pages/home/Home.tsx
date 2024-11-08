import { Filtro } from "../../components/Filter";
import Card from "../../components/Card";
import Carrossel from "../../components/carrossel/Carrossel";
import { useState } from "react";

interface Game {
  id: number;
  name: string;
  brand: string;
  imageUrl: string;
  category: string;
  year: number;
  rating: number;
  platform: string;
  purchasePrice: number;
  description: string;
  redirectPath?: string; // Tornar essa propriedade opcional
}

const games: Game[] = [
  // ... (seus dados dos jogos)
  {
    id: 1,
    name: "Flight Simulator",
    brand: "Xbox One",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/flight.png?updatedAt=1722113634898",
    category: "Simulator",
    year: 2023,
    rating: 3.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: 299.99,
    description: "Uma simulação incrível de pilotagem.",
    redirectPath: "/flight"
  },
  {
    id: 2,
    name: "God of War Ragnarok",
    brand: "PS5",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/god.png?updatedAt=1722113706172",
    category: "Aventura",
    year: 2022,
    rating: 3.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: 399.99,
    description: "Uma jornada intensa em reinos antigos.",
  },
  {
    id: 3,
    name: "Fifa 23",
    brand: "Xbox One",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/fifa_23-min.png?updatedAt=1722113727673",
    category: "Esporte",
    year: 2021,
    rating: 4.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: 499.99,
    description: "Um jogo de futebol incrível.",
  },
  {
    id: 4,
    name: "Hogwarts Legacy",
    brand: "PS5",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/hogwarts.png?updatedAt=1722113683981",
    category: "Aventura",
    year: 2020,
    rating: 4.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: 599.99,
    description: "Uma aventura mágica empolgante.",
  },
  {
    id: 5,
    name: "Spiderman PS5",
    brand: "PS5",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/spiderman.png?updatedAt=1722113651917",
    category: "Luta",
    year: 2023,
    rating: 3.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: 699.99,
    description: "Um jogo de ação de tirar o fôlego.",
  },
  {
    id: 6,
    name: "One Piece Seeker PS4",
    brand: "PS4",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/jogo%20one%20piece%20ps4.webp?updatedAt=1729518490566",
    category: "Aventura",
    year: 2022,
    rating: 5.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: 799.99,
    description: "Uma aventura repleta de mistérios.",
    redirectPath: "/seeker"
  },
  {
    id: 7,
    name: "One Piece Unlimited PS4",
    brand: "PS4",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/one%20piece%20jogo%20ps4%202.jpeg?updatedAt=1729519209697",
    category: "Aventura",
    year: 2021,
    rating: 5.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: 899.99,
    description: "Uma jornada cheia de aventuras.",
  },
  {
    id: 8,
    name: "Mortal Kombat PS5",
    brand: "PS5",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/mortal%20kombat.webp?updatedAt=1729522107646",
    category: "Luta",
    year: 2020,
    rating: 4.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: 99.99,
    description: "Um jogo de luta eletrizante.",
  },
  {
    id: 9,
    name: "Naruto Ultimated",
    brand: "PS5",
    imageUrl:
      "https://ik.imagekit.io/netdmdufko/boruto.webp?updatedAt=1729522276288",
    category: "Aventura",
    year: 2023,
    rating: 5.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: 109.99,
    description: "Uma nova jornada épica começa.",
  },
];

const Home = () => {
  const [filtros, setFiltros] = useState({
    precoMax: 1000,
    marcas: [] as string[],
    classificacao: 3,
  });

  const [mostrarLinks, setMostrarLinks] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const aplicarFiltros = (novosFiltros: { precoMax: number; marcas: string[]; classificacao: number; }) => {
    setFiltros(novosFiltros);
  };

  const jogosFiltrados = games.filter((game) => {
    const marcaMatch = filtros.marcas.length === 0 || filtros.marcas.includes(game.brand);
    const classificacaoMatch = game.rating >= filtros.classificacao;

    // Assumindo que purchasePrice é um número
    const precoMatch = game.purchasePrice <= filtros.precoMax;

    const categoriaMatch = selectedCategory === null || game.category === selectedCategory;

    return marcaMatch && classificacaoMatch && precoMatch && categoriaMatch;
});

  const categories = [
    // ... (suas categorias)
    {
      imageCategory:
        "https://ik.imagekit.io/netdmdufko/categoria%20simulador.jpeg?updatedAt=1730249903151",
      category: "Simulator",
    },
    {
      imageCategory:
        "https://ik.imagekit.io/netdmdufko/categoria%20aventura.jpeg?updatedAt=1730249887306",
      category: "Aventura",
    },
    {
      imageCategory:
        "https://ik.imagekit.io/netdmdufko/categoria%20luta.jpeg?updatedAt=1730249887102",
      category: "Luta",
    },
    {
      imageCategory:
        "https://ik.imagekit.io/netdmdufko/categoria%20esportes.jpeg?updatedAt=1730249886822",
      category: "Esporte",
    },
    // ... (outras categorias)
    
  ];

  const renderCategoriesIcons = (icons: { category: string; imageCategory: string }[]) => (
    <div className="flex flex-row overflow-x-auto space-x-4">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="tech-item flex flex-col items-center cursor-pointer mb-1"
          onClick={() => setSelectedCategory(selectedCategory === icon.category ? null : icon.category)}
        >
         <img
  src={icon.imageCategory}
  alt={icon.category}
  className={`w-16 h-16 rounded-full ${selectedCategory === icon.category ? "border-2 border-blue-500" : ""}`}
/>

          <span className="text-center">{icon.category}</span>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Carrossel />
      <div className="flex flex-col items-center">
        <button
          onClick={() => setMostrarLinks(!mostrarLinks)}
          className="px-4 py-2 text-white mb-2 md:hidden w-full bg-blue-500"
        >
          Filtro
        </button>

        <section className="py-0">
          <div className="container sm:mx-5 mx-auto">
            <div className="relative">
              {mostrarLinks && (
                <div className="absolute mt-2 p-4 bg-white shadow-lg rounded-md z-10">
                  <h3 className="text-lg font-semibold">Selecione um Link</h3>
                  <div className="w-full md:w-1/4 md:mr-10">
                    <Filtro onFiltrar={aplicarFiltros} />
                  </div>
                </div>
              )}
            </div>

            <div className="w-full max-w-4x4 p-4 mt-5 shadow-md rounded-lg md:hidden">
              <div className="animate-marquee">
                <h3 className="flex font-bold mb-3 justify-start">Navegue por categoria</h3>
                {renderCategoriesIcons(categories)}
              </div>
            </div>

            <div className="flex flex-col md:flex-row mt-10 mb-10 w-full">
              <div className="w-full md:w-1/4 md:mr-10 hidden sm:block">
                <Filtro onFiltrar={aplicarFiltros} />
              </div>

              <div className="w-full md:w-3/4 flex flex-col items-center">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {jogosFiltrados.length > 0 ? (
                    jogosFiltrados.map((game) => (
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
                        redirectPath={game.redirectPath || "/fallback"} id={0}                    />
                    
                    ))
                  ) : (
                    <div className="flex items-center justify-center w-full h-5 mx-auto">
                      Nenhum jogo encontrado
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};  
export default Home;