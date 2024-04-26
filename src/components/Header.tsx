import { Link } from "react-router-dom";
import { GetIcon } from "./Icons";
import { BackButton } from "./BackButton";
import { SesameSeed } from "./SesameSeed";
// Header that navigates to Home- and ShoppingCart pages when clicked.
export const Header = () => {
  return (
    <>
      <div id="breader-header">
        <div>
          <BackButton />
        </div>
        <div id="bread-crown">
          <SesameSeed />
          <Link to="/">
            <h1 className="h1Header">AI's Burgers & Cocktails</h1>
          </Link>
          <SesameSeed />
        </div>
        <Link to="/shoppingcart">
          <div className="header-button">{GetIcon("Cart", "Large")}</div>
        </Link>
      </div>
    </>
  );
};
