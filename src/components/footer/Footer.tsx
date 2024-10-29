import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Seção de Informações de Contato */}
          <div className="mb-6 md:mb-0 md:ml-10">
            <h4 className="text-lg font-semibold mb-2">North Games</h4>
            <p className="text-sm mb-2">123 Game Street, Arcadex Citx</p>
            <p className="text-sm">Email: support@northgames.com</p>
            <p className="text-sm">Telefone: (103) 456-0000</p>
          </div>

          {/* Seção de Links Rápidos */}
          <div className="mb-6 md:mb-0 md:mr-10">
            <h4 className="text-lg font-semibold md:mb-2">Links Rápidos</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Comprar</a></li>
              <li><a href="#" className="hover:underline">Carrinho</a></li>
              <li><a href="#" className="hover:underline">Ofertas</a></li>
              <li><a href="#" className="hover:underline">Sobre Nós</a></li>
              <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Seção de Redes Sociais */}
          <div className='md:mr-10'>
            <h4 className="text-lg font-semibold mb-2">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="text-center mt-6 md:ml-20">
          <p className="text-sm">© 2024 North Games. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

