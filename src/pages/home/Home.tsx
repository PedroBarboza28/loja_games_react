const games = [
  { id: 1, name: 'Jogo 1', imageUrl: 'https://via.placeholder.com/150', price: '$29.99' },
  { id: 2, name: 'Jogo 2', imageUrl: 'https://via.placeholder.com/150', price: '$39.99' },
  { id: 3, name: 'Jogo 3', imageUrl: 'https://via.placeholder.com/150', price: '$49.99' },
  { id: 4, name: 'Jogo 4', imageUrl: 'https://via.placeholder.com/150', price: '$59.99' },
  { id: 5, name: 'Jogo 5', imageUrl: 'https://via.placeholder.com/150', price: '$69.99' },
  { id: 6, name: 'Jogo 6', imageUrl: 'https://via.placeholder.com/150', price: '$79.99' },
  { id: 7, name: 'Jogo 7', imageUrl: 'https://via.placeholder.com/150', price: '$89.99' },
  { id: 8, name: 'Jogo 8', imageUrl: 'https://via.placeholder.com/150', price: '$99.99' },
  { id: 9, name: 'Jogo 9', imageUrl: 'https://via.placeholder.com/150', price: '$109.99' },
];

export const Home = () => {

  return (
    <>
 <div>
      {/* Seção de Apresentação */}
      <section className="bg-gray-800 text-white py-12 mt-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo à North Games</h1>
          <p className="text-lg mb-6">Descubra os melhores jogos para todas as plataformas e aproveite as melhores ofertas!</p>
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Explorar Jogos</a>
        </div>
      </section>

      {/* Seção de Jogos */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Nossos Jogos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {games.map((game) => (
              <div key={game.id} className="bg-white border rounded-lg overflow-hidden shadow-lg">
                <img src={game.imageUrl} alt={game.name} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                  <p className="text-lg text-gray-600 mb-4">{game.price}</p>
                  <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Ver Detalhes</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>    </>
  )
}

export default Home
