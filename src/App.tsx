import "./App.css";
import { Footer } from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuProvider } from "./context/Context";
import Flight from "./components/gamedetail/Flight";

function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<Flight />} /> {/* Rota para Projects */}

        </Routes>

        <Footer />
      </BrowserRouter>
      </MenuProvider>

  );
}

export default App;
