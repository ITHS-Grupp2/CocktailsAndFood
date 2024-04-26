import { Link } from "react-router-dom";

export const LiveNavbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <Link to="/">
            <li className="navbar-item">BURGERS</li>
          </Link>
          <Link to="/sideselect">
            <li className="navbar-item">SIDES</li>
          </Link>
          <Link to="/drinkselect">
            <li className="navbar-item">COCKTAILS</li>
          </Link>
          <Link to="/softdrinkselect">
            <li className="navbar-item">SOFT DRINKS</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
