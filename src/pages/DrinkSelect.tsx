import { ProductInfo } from "../components/ProductInfo";
import { Cocktail, CocktailFetch, price } from "../API/CocktailFetch";
import { CocktailPanel } from "../components/CocktailPanel";
import {
  cocktailIdArray,
  MatchDrinkService,
} from "../services/CocktailInfoService";
import { PageTracker } from "../services/PageHistoryService";

export function DrinkSelect() {
  const foodId = localStorage.getItem("burgerId") as string;

  const recommendedDrink = MatchDrinkService(foodId);
  const cocktail: Cocktail = CocktailFetch(recommendedDrink.drinkId);
  const cocktails: Cocktail[] = [];
  const labels: string[] = [];
  const filteredCocktails = cocktailIdArray.filter(
    (drink) => drink !== recommendedDrink.drinkId
  );
  filteredCocktails.forEach((id) => {
    const cocktail: Cocktail = CocktailFetch(id);
    labels.push(cocktail.name);
    if (id !== recommendedDrink.drinkId) cocktails.push(cocktail);
  });
  if (localStorage.getItem("burgerId") !== null) {
    return (
      <>
        {PageTracker()}
        <div className="siteSize">
          <div className="headerSmaller" style={{ margin: "30px 0px" }}>
            <h1 className="text-center" style={{ marginBottom: "0px" }}>
              Recommended Drink
            </h1>
          </div>
          <ProductInfo
            id={cocktail.id}
            productType={"Cocktail"}
            title={cocktail.name}
            imgSrc={cocktail.img}
            ingredients={cocktail.ingredients}
            information={cocktail.instructions}
            price={price}
            navigationPath="/shoppingcart"
            percentage={recommendedDrink.percentage}
            motivation={recommendedDrink.motivation}
            quantity={1}
          ></ProductInfo>
          <div className="headerSmaller" style={{ margin: "30px 0px" }}>
            <h4 className="text-center" style={{ marginBottom: "0px" }}>
              Other Drinks
            </h4>
          </div>
          <div className="center-page-items">
            <CocktailPanel cocktails={cocktails} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="headerSmaller" style={{ margin: "30px 0px" }}>
          <h1 className="text-center" style={{ marginBottom: "0px" }}>
            Select Drink
          </h1>
        </div>
        <div style={{ width: "1176px", height: "1530px" }}>
          <div className="center-page-items">
            <CocktailPanel cocktails={cocktails} />
          </div>
        </div>
      </>
    );
  }
}
