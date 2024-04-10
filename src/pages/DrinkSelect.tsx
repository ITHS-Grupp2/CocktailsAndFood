import { ProductInfo } from "../components/ProductInfo";
import { Cocktail, CocktailFetch, price } from "../API/CocktailFetch";
import { CocktailPanel } from "../components/CocktailPanel";
import {
  cocktailIdArray,
  MatchDrinkService,
} from "../services/CocktailInfoService";
// Våra valda drinkar:
// const idArray = [12752, 178342, 12402, 11003, 11410, 14167];

//temporary, until we have a way to get the main course id from cartService
const mainCourseIdArray = [
  "65fd96c529f983c33c7ec9c2",
  "65fd96f229f983c33c7eca00",
  "65fd976a29f983c33c7eca37",
  "65fd978129f983c33c7eca55",
  "65fd97b729f983c33c7eca9e",
  "65fd98ca29f983c33c7ece4a",
];

export function DrinkSelect({ foodId }: { foodId: string }) {
  foodId = localStorage.getItem("burgerId") as string;
  if (foodId == null || foodId == "") {
    foodId =
      mainCourseIdArray[Math.floor(Math.random() * mainCourseIdArray.length)];
  }

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

  return (
    <>
      <div className="d-flex justify-content-center align-items-center divHeader">
        <h1 className="text-center" style={{ marginBottom: "0px" }}>
          Select Drink
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
      ></ProductInfo>

      <div className="center-page-items">
        <CocktailPanel cocktails={cocktails} />
      </div>
    </>
  );
}
