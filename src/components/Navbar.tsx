import { Link } from "react-router-dom";

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
