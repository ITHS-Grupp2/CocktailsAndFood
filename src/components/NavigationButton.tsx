import { Link } from "react-router-dom";
import { ProductInfoData } from "./ProductInfo";

export type NavigationPath =
  | "/drinkselect"
  | "/productinfoview"
  | "/shoppingcart"
  | "/sideselect"
  | "/softdrinkselect";

type NavigationButtonData = {
  navigationPath?: NavigationPath;
  productData?: ProductInfoData;
  // Used to add the product to the cart
};

export const NavigationButton = (buttonData: NavigationButtonData) => {
  const { navigationPath, productData } = buttonData;

  // // Remembers which burger is clicked to recommend a drink to
  if (productData) {
    if (productData.productType === "main") {
      localStorage.setItem("burgerId", productData.id);
    }
  }
  return (
    <Link to={"" + navigationPath}>
      <button className="navigationButtonFill">
        {/* {GetIcon("Cart", "white", "Medium")} */}
        <span style={{ paddingLeft: "10px" }}>Next</span>
      </button>
    </Link>
  );
};
