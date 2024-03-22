import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { About } from "./pages/About";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SideSelect } from "./pages/SideSelect";
import { DrinkSelect } from "./pages/DrinkSelect";
import { ProductInfoView } from "./pages/ProductInfoView";
import { CocktailPage, CocktailTest2 } from "./beta/cocktailtest";
import { CocktailRecommended } from "./components/CocktailRecommended";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/sideselect" element={<SideSelect />} />
        <Route path="/drinkselect" element={<DrinkSelect />} />
        <Route path="/productinfoview" element={<ProductInfoView />} />
        <Route path="/cocktailpage" element={<CocktailRecommended />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
