import { Button } from "react-bootstrap";
import { ProductInfo } from "../components/ProductInfo";
import { ProductPanel } from "../components/ProductPanel";

import { Cocktail, CocktailFetch, price } from "../API/CocktailFetch";
import { CocktailMiniComponent } from "../components/CocktailMiniComponent";
import { CocktailPanel } from "../components/CocktailPanel";
// Våra valda drinkar:
// const idArray = [12752, 178342, 12402, 11003, 11410, 14167];

const idArray = [12752, 178342, 12402, 11003, 11410, 14167];
const recommendedDrink = 14167;

export function DrinkSelect() {
  const cocktail: Cocktail = CocktailFetch(recommendedDrink);
  const cocktails: Cocktail[] = [];
  const labels: string[] = [];
  idArray.filter((drink) => drink !== recommendedDrink);
  idArray.forEach((id) => {
    const cocktail: Cocktail = CocktailFetch(id);
    labels.push(cocktail.name);
    if (id !== recommendedDrink) cocktails.push(cocktail);
  });

  return (
    <>
      <h1>Select Drink</h1>
      <h2>Recommended Drink</h2>
      <ProductInfo
        id={cocktail.id}
        productType={"Cocktail"}
        title={cocktail.name}
        imgSrc={cocktail.img}
        ingredients={cocktail.ingredients}
        information={cocktail.instructions}
        price={price}
      ></ProductInfo>

      <CocktailPanel cocktails={cocktails} />
    </>
  );
}
