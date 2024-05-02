import { Link } from "react-router-dom";
import { GetIcon } from "./Icons";
import { BackButton } from "./BackButton";
import { SesameSeed } from "./SesameSeed";
import { LiveNavbar } from "./Navbar";
// Header that navigates to Home- and ShoppingCart pages when clicked.
export const Header = () => {
  return (
    <>
      <div id="breader-header">
        <div
          style={{
            width: "0px",
            position: "relative",
            left: "-100px",
            top: "-25px",
          }}>
          <BackButton />
        </div>
        <div style={{ width: "100%" }}>
          <div id="bread-crown">
            <SesameSeed />
            <Link to="/">
              <h1 className="h1Header">AI's Burgers & Cocktails</h1>
            </Link>
            <SesameSeed />
          </div>

          <LiveNavbar />
        </div>
        <div
          style={{
            width: "0px",
            position: "relative",
            right: "-15px",
            top: "-25px",
          }}>
          <Link to="/shoppingcart">
            <div className="header-button">{GetIcon("Cart", "Large")}</div>
          </Link>
        </div>
      </div>
    </>
  );
};
