import { Link } from "react-router-dom";
import { ProductInfoData } from "./ProductInfo";
import { Button } from "react-bootstrap";

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
    <>
      <div className="flexDC">
        <Button className="nextButtonSmall" style={{ borderRadius: "10px" }}>
          <Link to={"" + navigationPath} style={{color:"white"}}>
            <span style={{ paddingLeft: "10px" }}>Next &#129130;</span>
          </Link>
        </Button>
      </div>
    </>
  );
};
