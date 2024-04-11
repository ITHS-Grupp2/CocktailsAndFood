import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <p>Developer:</p>
        <Link to="/">
          <li className="navbar-item">Home</li>
        </Link>
        <Link to="/productinfoview">
          <li className="navbar-item">Product Info</li>
        </Link>
        <Link to="/sideselect">
          <li className="navbar-item">Side Select</li>
        </Link>
        <Link to="/drinkselect">
          <li className="navbar-item">Drink Select</li>
        </Link>
        <Link to="/shoppingcart">
          <li className="navbar-item">Shopping Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export const LiveNavbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <Link to="/">
            <li className="navbar-item">Home</li>
          </Link>
          <Link to="/about">
            <li className="navbar-item">About us</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
