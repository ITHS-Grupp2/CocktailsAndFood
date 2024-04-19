import { Link } from "react-router-dom";
import { ProductInfoData } from "./ProductInfo";
import { CartDispatchContext, addToCart } from "./CartContext";
import { useContext } from "react";
import { GetIcon } from "./Icons";

export type NavigationPath =
  | "/drinkselect"
  | "/productinfoview"
  | "/shoppingcart"
  | "/sideselect";

type NavigationButtonData = {
  navigationPath?: NavigationPath;
  id?: string;
  price?: number;
  productInfo?: ProductInfoData; // Used to add the product to the cart
};

export const NavigationButton = (buttonData: NavigationButtonData) => {
  const { navigationPath, productInfo } = buttonData;
  const dispatch = useContext(CartDispatchContext);

  // Adds the product to the cart and remembers which burger is clicked
  const handleAddToCart = () => {
    if (productInfo) {
      addToCart(dispatch, productInfo);

      if (productInfo.productType === "main") {
        localStorage.setItem("burgerId", productInfo.id);
      }
    }
  };

  return (
    <Link to={"" + navigationPath}>
      <button onClick={handleAddToCart} className="navigationButtonFill">
        {GetIcon("Cart", "white", "Medium")}
        <span style={{ paddingLeft: "10px" }}>Price: ${buttonData.price}</span>
      </button>
    </Link>
  );
};
