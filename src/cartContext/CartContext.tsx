import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  brand: string;
  year: number;
  platform: string;
  rating: number;
  purchasePrice: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;  // Passando índice do item
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Carregar itens do carrinho do localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Sincronizar o carrinho com o localStorage
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  // Adicionar item ao carrinho
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        // Se o item já existe, incrementar a quantidade
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Se o item não existe, adicionar um novo item
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remover item do carrinho com base no índice
  const removeFromCart = (index: number) => {
    setCartItems((prevItems) => {
      // Copiar o array e remover o item no índice
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);  // Remove apenas o item no índice
      return updatedItems;
    });
  };

  // Limpar o carrinho
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
