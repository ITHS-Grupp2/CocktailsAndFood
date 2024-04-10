import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <p>Developer:</p>
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/productinfoview">Product Info</Link>
        </li>
        <li className="navbar-item">
          <Link to="/sideselect">Side Select</Link>
        </li>
        <li className="navbar-item">
          <Link to="/drinkselect">Drink Select</Link>
        </li>
        <li className="navbar-item">
          <Link to="/shoppingcart">Shopping Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export const LiveNavbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
