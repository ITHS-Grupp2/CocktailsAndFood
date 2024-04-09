import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { About } from "./pages/About";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Navbar, LiveNavbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SideSelect } from "./pages/SideSelect";
import { DrinkSelect } from "./pages/DrinkSelect";
import { ProductInfoView } from "./pages/ProductInfoView";
import { useReducer } from "react";
import {
  CartContext,
  CartDispatchContext,
  cartReducer,
} from "./components/CartContext";

function App() {
  const foodId = 3;

  const [state, dispatch] = useReducer(cartReducer, { cartProducts: [] });

  return (
    <>
      <CartContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
          <div id="header">
            <Header />
            <Navbar />
            <LiveNavbar />
          </div>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/sideselect" element={<SideSelect />} />
            <Route path="/drinkselect" element={<DrinkSelect foodId={4} />} />
            <Route
              path="/productinfoview/:mealId"
              element={<ProductInfoView />}
            />
            <Route
              path="/drinkselect"
              element={<DrinkSelect foodId={foodId} />}
            />
          </Routes>
          <Footer />
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
