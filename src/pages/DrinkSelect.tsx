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
          <div className="headerSmaller first" style={{marginBottom:"1rem"}}>
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
            navigationPath="/softdrinkselect"
            percentage={recommendedDrink.percentage}
            motivation={recommendedDrink.motivation}
            quantity={1}
          ></ProductInfo>
          <div className="headerSmaller second" style={{marginBottom: "1.5rem", marginTop: "1.5rem"}}>
            <h2 className="text-center" style={{ marginBottom: "0px" }}>
              Other Drinks
            </h2>
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
        <div className="siteSize">
          <div className="headerSmaller first">
            <h1 className="text-center" style={{ marginBottom: "0px" }}>
              Select Drink
            </h1>
          </div>
          <div style={{ width:"100%", height: "1530px", marginTop:"1rem"}}>
            <div className="center-page-items" >
              <CocktailPanel cocktails={cocktails} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
