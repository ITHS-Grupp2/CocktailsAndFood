import "./App.css"
import { Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import About from "./pages/About"
import ShoppingCart from "./pages/ShoppingCart"
import Navbar from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

function App() {
	return (
		<>
			<Header />
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Index />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/shoppingcart"
					element={<ShoppingCart />}
				/>
			</Routes>
			<Footer />
		</>
	)
}

export default App
