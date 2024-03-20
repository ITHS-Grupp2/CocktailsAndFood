import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ShoppingCart from "./pages/ShoppingCart";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import FoodComponent from "./components/FoodComponent";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <FoodComponent />
    </>
  );
}

export default App;
