import { Link } from "react-router-dom";
import { GetIcon } from "./Icons";
import { BackButton } from "./BackButton";
export const Header = () => {
  return (
    <>
      <div className="headerTotal">
        <div>
          <BackButton />
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
