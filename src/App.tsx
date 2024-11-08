import "./App.css";
import { Footer } from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuProvider } from "./context/Context"; // Seu MenuContext Provider
import Flight from "./components/gameDetail/Flight";
import Seeker from "./components/gameDetail/OPSeeker";
import Cart from "./components/shoppingCart/ShoppingCart";
import { CartProvider } from "./cartContext/CartContext";

function App() {
  return (
    <MenuProvider>
      <CartProvider> {/* Envolvendo com CartProvider */}
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flight" element={<Flight />} />
            <Route path="/seeker" element={<Seeker />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </CartProvider> {/* Fechando CartProvider */}
    </MenuProvider>
  );
}

export default App;
