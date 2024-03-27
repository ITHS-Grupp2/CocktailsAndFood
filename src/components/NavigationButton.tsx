import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export type NavigationPath = "/drinkselect" | "/productinfoview" | "/shoppingcart" | "/sideselect";

type NavigationButtonData = {
  navigationPath?: NavigationPath;
  id?: string;
};

export const NavigationButton = (buttonData: NavigationButtonData) => {
  return (
    <Link to={"" + buttonData.navigationPath}>
      <button>
        Add to Cart | Path:{buttonData.navigationPath}
      </button>
    </Link>
  );
};
