import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ShoppingCart from "./pages/ShoppingCart";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* Lägg till <Footer/> här */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shoppingcart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
