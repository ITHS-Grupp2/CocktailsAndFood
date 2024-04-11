import { ProductInfo } from "../components/ProductInfo";
import { Cocktail, CocktailFetch, price } from "../API/CocktailFetch";
import { CocktailPanel } from "../components/CocktailPanel";
import {
  cocktailIdArray,
  MatchDrinkService,
} from "../services/CocktailInfoService";
// Våra valda drinkar:
// const idArray = [12752, 178342, 12402, 11003, 11410, 14167];

export function DrinkSelect() {
  let foodId = localStorage.getItem("burgerId") as string;

  const recommendedDrink = MatchDrinkService(foodId);
  const cocktail: Cocktail = CocktailFetch(recommendedDrink.drinkId);
  const cocktails: Cocktail[] = [];
  const labels: string[] = [];
  let filteredCocktails = cocktailIdArray.filter(
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
        <div
          className="d-flex justify-content-center align-items-center bg-light rounded shadow-sm my-3"
          style={{ fontFamily: "Arial, sans-serif", height: "100px" }}
        >
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
        <div
          className="d-flex justify-content-center align-items-center bg-light rounded shadow-sm my-3"
          style={{ fontFamily: "Arial, sans-serif", height: "100px" }}
        >
          <h2 className="text-center" style={{ marginBottom: "0px" }}>
            Other Drinks
          </h2>
        </div>
        <div className="center-page-items">
          <CocktailPanel cocktails={cocktails} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center bg-light rounded shadow-sm my-3"
          style={{ fontFamily: "Arial, sans-serif", height: "100px" }}
        >
          <h1 className="text-center" style={{ marginBottom: "0px" }}>
            Select Drink
          </h1>
        </div>
        <div className="center-page-items">
          <CocktailPanel cocktails={cocktails} />
        </div>
      </>
    );
  }
}
