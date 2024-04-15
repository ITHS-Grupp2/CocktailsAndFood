import { Link } from "react-router-dom";
import { GetIcon } from "./Icons";
export const Header = () => {
  return (
    <>
      <div className="headerTotal">
        <div>
          <Link to={"/"}>
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="40px"
                width="40px"
                fill="white">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            }
          </Link>
        </div>
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
