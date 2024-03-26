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
      <Button>
        Add to Cart | Path:{buttonData.navigationPath}
      </Button>
    </Link>
  );
};
