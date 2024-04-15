import { useLocation } from "react-router-dom";

export const usePageNumber = () => {
  const location = useLocation();
  const currentPath = location.pathname; //Get the current path from location

  //Map the current path to the corresponding page number
  const pageNumbers: { [key: string]: number } = {
    "/": 0, //Home
    "/productinfoview/:mealId": 1, //Main
    "/sideselect": 2, //SideSelect
    "/drinkselect": 3, //DrinkSelect
    "/shoppingcart": 4, //ShoppingCart
    "/about": 5, //About us
  };

  //Get the page number based on the current path. If the path doesn't exist in pageNumbers then default to 1
  //MVP workaround instead of having to implement how to know which mealid is currently displayed
  const pageNumber =
    pageNumbers[currentPath] !== undefined ? pageNumbers[currentPath] : 1;

  return pageNumber;
};
