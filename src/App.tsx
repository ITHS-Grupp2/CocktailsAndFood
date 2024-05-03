import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { About } from "./pages/About";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SideSelect } from "./pages/SideSelect";
import { DrinkSelect } from "./pages/DrinkSelect";
import { ProductInfoView } from "./pages/ProductInfoView";
import { ConfirmationPage } from "./pages/ConfirmationPage";
import { SoftDrink } from "./pages/SoftDrink";

function App() {
  return (
    <>
      <div id="header">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/orderconfirmation" element={<ConfirmationPage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/sideselect" element={<SideSelect />} />
        <Route path="/productinfoview/:mealId" element={<ProductInfoView />} />
        <Route path="/drinkselect" element={<DrinkSelect />} />
        <Route path="/softdrinkselect" element={<SoftDrink />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
