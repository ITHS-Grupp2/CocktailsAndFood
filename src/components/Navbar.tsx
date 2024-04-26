import { Link } from "react-router-dom";

export const LiveNavbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <Link to="/">
            <li className="navbar-item">Burgers</li>
          </Link>
          <Link to="/sideselect">
            <li className="navbar-item">Sides</li>
          </Link>
          <Link to="/drinkselect">
            <li className="navbar-item">Cocktails</li>
          </Link>
          <Link to="/about">
            <li className="navbar-item">Soft Drinks</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
