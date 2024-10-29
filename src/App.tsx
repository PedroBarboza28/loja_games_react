import "./App.css";
import { Footer } from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuProvider } from "./context/Context";

function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      </MenuProvider>

  );
}

export default App;
