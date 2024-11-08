import { useCart } from "../../cartContext/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculando o total do carrinho
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.purchasePrice * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio!</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={index} // A chave deve ser única
              className="flex mb-4 p-4 border rounded-lg shadow-md"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-[100px] h-[100px] object-contain mr-4"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p>Quantidade: {item.quantity}</p>
                <p>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.purchasePrice)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white py-1 px-4 rounded-lg"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(totalPrice)}
            </h3>
          </div>
          <div className="mt-4">
            <button
              onClick={clearCart}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Limpar Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
