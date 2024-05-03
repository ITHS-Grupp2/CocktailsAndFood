import { Link } from "react-router-dom";
import { ProductInfoData } from "./ProductInfo";
import { Button } from "react-bootstrap";
import { GetIcon } from "./Icons";

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
          <Link
            to={"" + navigationPath}
            style={{
              color: "white",
            }}
          >
            <span
              style={{
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              NEXT &nbsp; {GetIcon("ArrowRight", "Large")}
            </span>
          </Link>
        </Button>
      </div>
    </>
  );
};
