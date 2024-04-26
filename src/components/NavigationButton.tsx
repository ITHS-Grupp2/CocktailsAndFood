import { Link, useLocation } from "react-router-dom";

export type NavigationPath =
  | "/drinkselect"
  | "/productinfoview"
  | "/shoppingcart"
  | "/sideselect"
  | "/softdrinkselect";

type NavigationButtonData = {
  navigationPath?: NavigationPath;
  // Used to add the product to the cart
};

export const NavigationButton = (buttonData: NavigationButtonData) => {
  const { navigationPath } = buttonData;

  // Kod som användes för att tracka senast klickade burgare.

  // // Adds the product to the cart and remembers which burger is clicked
  // const handleAddToCart = () => {
  //   if (productInfo) {
  //     addToCart(dispatch, productInfo);

  //     if (productInfo.productType === "main") {
  //       localStorage.setItem("burgerId", productInfo.id);
  //     }
  //     const pageHistory: PageHistory = {
  //       page: location.pathname,
  //       productId: productInfo.id,
  //     };
  //     addToVisit(historyDispatch, pageHistory);
  //   }
  // };

  return (
    <Link to={"" + navigationPath}>
      <button className="navigationButtonFill">
        {/* {GetIcon("Cart", "white", "Medium")} */}
        <span style={{ paddingLeft: "10px" }}>Next</span>
      </button>
    </Link>
  );
};
