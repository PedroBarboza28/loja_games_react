export const Navbar = () => {
  return (
    <div className="flex items-center justify-between space-x-4 overflow-auto">
      <h2 className="text-xl font-bold">North Games</h2>
      <ul style={{ listStyleType: 'none' }} className=" flex items-center gap-5 float-left">
      <li><a href="#">Comprar</a></li>
        <li><a href="#">Carrinho</a></li> 
        <li><a href="#">Ofertas</a></li> 
      </ul>
    </div>
  );
};
