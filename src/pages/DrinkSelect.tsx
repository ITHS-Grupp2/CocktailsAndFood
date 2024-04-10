import { ProductInfo } from "../components/ProductInfo";
import { Cocktail, CocktailFetch, price } from "../API/CocktailFetch";
import { CocktailPanel } from "../components/CocktailPanel";
// Våra valda drinkar:
// const idArray = [12752, 178342, 12402, 11003, 11410, 14167];

type Drink = {
  drinkId: number;
  percentage: number;
};

const idArray = [12752, 178342, 12402, 11003, 11410, 14167];

function MatchDrinkService(mealId: string) {
  const recommendedDrink: Drink = {
    drinkId: 14167,
    percentage: -1,
  };
  switch (mealId) {
    case "65fd96c529f983c33c7ec9c2": //Gluten Free Burger With Bacon
      recommendedDrink.drinkId = idArray[0];
      recommendedDrink.percentage = 40;
      break;
    case "65fd96f229f983c33c7eca00": //Greasy Burger
      recommendedDrink.drinkId = idArray[1];
      recommendedDrink.percentage = 35;
      break;
    case "65fd976a29f983c33c7eca37": //Chicken Burger
      recommendedDrink.drinkId = idArray[2];
      recommendedDrink.percentage = 10;
      break;
    case "65fd978129f983c33c7eca55": //Olive Burger
      recommendedDrink.drinkId = idArray[3];
      recommendedDrink.percentage = 99;
      break;
    case "65fd97b729f983c33c7eca9e": //Spicy Chicken Burger
      recommendedDrink.drinkId = idArray[4];
      recommendedDrink.percentage = 15;
      break;
    case "65fd98ca29f983c33c7ece4a": //Healthy Burger with Salad
      recommendedDrink.drinkId = idArray[5];
      recommendedDrink.percentage = 18;
      break;
  }
  return recommendedDrink;
}

export function DrinkSelect({ foodId }: { foodId: string }) {
  const recommendedDrink = MatchDrinkService(foodId);
  //MatchinDrinkService(foodID:number) => return recommendedDrinkId;
  const cocktail: Cocktail = CocktailFetch(recommendedDrink.drinkId);
  const cocktails: Cocktail[] = [];
  const labels: string[] = [];
  idArray.filter((drink) => drink !== recommendedDrink.drinkId);
  idArray.forEach((id) => {
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
        percentage={recommendedDrink.percentage}>
        </ProductInfo>

      <div className="center-page-items">
        <CocktailPanel cocktails={cocktails} />
      </div>
    </>
  );
}
