import Card from "../../components/card";
import { Filtro } from "../../components/Filter";

const games = [

  {
    id: 1,
    name: "Flight Simulator",
    imageUrl: "https://ik.imagekit.io/netdmdufko/flight.png?updatedAt=1722113634898",
    year: 2023,
    rating: 3.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$29.99",
    description: "Um jogo emocionante de aventura.",
  },
  {
    id: 2,
    name: "God of War Ragnarok",
    imageUrl: "https://ik.imagekit.io/netdmdufko/god.png?updatedAt=1722113706172",
    year: 2022,
    rating: 3.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$39.99",
    description: "Aventura épica em um mundo aberto.",
  },
  {
    id: 3,
    name: "Fifa 23",
    imageUrl: "https://ik.imagekit.io/netdmdufko/fifa_23-min.png?updatedAt=1722113727673",
    year: 2021,
    rating: 4.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$49.99",
    description: "Um jogo de estratégia envolvente.",
  },
  {
    id: 4,
    name: "Hogwarts Legacy",
    imageUrl: "https://ik.imagekit.io/netdmdufko/hogwarts.png?updatedAt=1722113683981",
    year: 2020,
    rating: 4.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$59.99",
    description: "Uma corrida cheia de adrenalina.",
  },
  {
    id: 5,
    name: "Spiderman",
    imageUrl: "https://ik.imagekit.io/netdmdufko/spiderman.png?updatedAt=1722113651917",
    year: 2023,
    rating: 3.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$69.99",
    description: "Um jogo de ação emocionante.",
  },
  {
    id: 6,
    name: "One Piece",
    imageUrl: "https://ik.imagekit.io/netdmdufko/jogo%20one%20piece%20ps4.webp?updatedAt=1729518490566",
    year: 2022,
    rating: 5.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$79.99",
    description: "Um puzzle desafiador.",
  },
  {
    id: 7,
    name: "One Piece Unlimited World",
    imageUrl: "https://ik.imagekit.io/netdmdufko/one%20piece%20jogo%20ps4%202.jpeg?updatedAt=1729519209697",
    year: 2021,
    rating: 5.0, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$89.99",
    description: "Uma experiência de simulação realista.",
  },
  {
    id: 8,
    name: "Mortal Kombat",
    imageUrl: "https://ik.imagekit.io/netdmdufko/mortal%20kombat.webp?updatedAt=1729522107646",
    year: 2020,
    rating: 4.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$99.99",
    description: "Um jogo de plataforma divertido.",
  },
  {
    id: 9,
    name: "Naruto Ultimated",
    imageUrl: "https://ik.imagekit.io/netdmdufko/boruto.webp?updatedAt=1729522276288",
    year: 2023,
    rating: 4.5, // Adicione a classificação aqui
    platform: "North Games",
    purchasePrice: "$109.99",
    description: "Uma nova era de jogos de estratégia.",
  },
  // seus jogos...
];

export const Home = () => {

  return (
    <>
      <div>
        {/* Seção de Apresentação */}
        <section className="relative py-12 mt-20">
          {/* Vídeo de fundo */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cdn.pixabay.com/video/2022/05/20/117606-712421887_large.mp4"
              type="video/mp4"
            />
            Seu navegador não suporta vídeos.
          </video>

          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Bem-vindo à North Games
            </h1>
            <p className="text-lg mb-6 text-white">
              Descubra os melhores jogos para todas as plataformas e aproveite
              as melhores ofertas!
            </p>
            <a
              href="#"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Explorar Jogos
            </a>
          </div>
        </section>

        <style>{`
          body {
            margin: 0;
            padding: 0;
          }

          video {
            pointer-events: none;
          }
        `}</style>

        {/* Seção de Jogos */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Nossos Jogos</h2>
            <div className="flex">
              {/* Filtro */}
              
              <div className="w-1/4">
                <Filtro image={""} label={""} />
              </div>
              {/* Cards */}
              <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.map((game) => (
                  <Card
                    key={game.id}
                    name={game.name}
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
        </section>
      </div>
    </>
  );
};

export default Home;
