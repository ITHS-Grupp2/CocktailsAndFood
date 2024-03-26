import { ProductInfo } from "../components/ProductInfo";
import { Cocktail, CocktailFetch, price } from "../API/CocktailFetch";
import { CocktailPanel } from "../components/CocktailPanel";
// Våra valda drinkar:
// const idArray = [12752, 178342, 12402, 11003, 11410, 14167];

const idArray = [12752, 178342, 12402, 11003, 11410, 14167];
const recommendedDrink = 14167;
function MatchinDrinkService(mealId: number) {
  let drink = recommendedDrink;
  switch (mealId) {
    case 0:
      drink = 12752;
      break;
    case 1:
      drink = 178342;
      break;
    case 2:
      drink = 12402;
      break;
    case 3:
      drink = 11003;
      break;
    case 4:
      drink = 11410;
      break;
    case 5:
      drink = 12752;
      break;
    case 6:
      drink = 14167;
      break;
  }
  return drink;
}

export function DrinkSelect({ foodId }: { foodId: number }) {
  const recommendedDrink = MatchinDrinkService(foodId);
  //MatchinDrinkService(foodID:number) => return recommendedDrinkId;
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
