import { Link } from "react-router-dom";
import { GetIcon } from "./Icons";

// Header med namn som navigerar till Home-sidan och Shoppingcart-sidan
export const Header = () => {
  return (
    <>
      <div className="headerTotal">
        <Link to="/">
          <h1 className="h1Header">Cocktails & Food</h1>
        </Link>
        <div className="shoppingIcon">
          <Link to="/shoppingcart">{GetIcon("Cart", "blue", "Large")}</Link>
        </div>
      </div>
    </>
  );
};
