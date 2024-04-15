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
import { VideoWrapper } from "./components/VideoWrapper";
import { BreadCrumbs } from "./components/BreadCrumbs";
import { usePageNumber } from "./components/BreadCrumbsPageProvider";

function App() {
  const pageNumber = usePageNumber();

  return (
    <>
      <div id="header">
        <Header />
        <Navbar />
        <LiveNavbar />
      </div>
      <BreadCrumbs pageNumber={pageNumber} />
      <VideoWrapper>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/sideselect" element={<SideSelect />} />
          <Route
            path="/productinfoview/:mealId"
            element={<ProductInfoView />}
          />
          <Route path="/drinkselect" element={<DrinkSelect />} />
        </Routes>
      </VideoWrapper>
      <Footer />
    </>
  );
}

export default App;
