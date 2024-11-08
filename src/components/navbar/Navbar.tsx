import { HiMenu, HiX } from "react-icons/hi";
import { useMenu } from "../../context/Context";

export const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useMenu(); // Controle de visibilidade pelo contexto

  return (
    <div className="flex items-center py-5 pb-2 pt-2 md:pt-5 md:pb-5 mr-10 justify-between space-x-4 overflow-auto">
      <a href="/"><h2 className="text-xl font-bold ml-10">
        <span className="text-blabk">North</span>
        <span className="text-black">Games</span>
      </h2> </a>

      <button
        onClick={toggleMenu}
        className="text-3xl p-2 focus:outline-none md:hidden"
      >
        {isMenuOpen ? (
          <HiX className="h-8 w-8" />
        ) : (
          <HiMenu className="h-8 w-8" />
        )}
      </button>

      <ul
        style={{ listStyleType: "none" }}
        className="items-center gap-5 mr-10 hidden md:flex"
      >
        <li>
          <a href="#">Comprar</a>
        </li>
        <li>
          <a href="#">Ofertas</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </li>
      </ul>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 bg-white">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleMenu} className="text-3xl">
              <HiX />
            </button>
          </div>

          <ul
            style={{ listStyleType: "none" }}
            className="flex flex-col items-center gap-5 py-5"
          >
            <li>
              <a href="#">Comprar</a>
            </li>
            <li>
              <a href="#">Ofertas</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
