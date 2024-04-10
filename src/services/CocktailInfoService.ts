export type Drink = {
    drinkId: number;
    percentage: number;
  };
export const cocktailIdArray = [12752, 178342, 12402, 11003, 11410, 14167];
export function CocktailPercentage(cocktail: number | string){
    if (typeof cocktail === "number") {
        switch (cocktail) {
            case cocktailIdArray[0]:
                return 40;
            case cocktailIdArray[1]:
                return 35;
            case cocktailIdArray[2]:
                return 10;
            case cocktailIdArray[3]:
                return 99;
            case cocktailIdArray[4]:
                return 15;
            case cocktailIdArray[5]:
                return 18;
            default:
                return 0;
        }
    } else {
        switch (cocktail) {
            case ""+cocktailIdArray[0]:
                return 40;
            case ""+cocktailIdArray[1]:
                return 35;
            case ""+cocktailIdArray[2]:
                return 10;
            case ""+cocktailIdArray[3]:
                return 99;
            case ""+cocktailIdArray[4]:
                return 15;
            case ""+cocktailIdArray[5]:
                return 18;
            default:
                return 0;
        }
    }
}
  



export function MatchDrinkService(mealId: string) {
  const recommendedDrink: Drink = {
    drinkId: -1,
    percentage: -1,
  };
  switch (mealId) {
    case "65fd96c529f983c33c7ec9c2": //Gluten Free Burger With Bacon
      recommendedDrink.drinkId = cocktailIdArray[0];
      recommendedDrink.percentage = CocktailPercentage(recommendedDrink.drinkId);
      break;
    case "65fd96f229f983c33c7eca00": //Greasy Burger
      recommendedDrink.drinkId = cocktailIdArray[1];
      recommendedDrink.percentage = 35;
      break;
    case "65fd976a29f983c33c7eca37": //Chicken Burger
      recommendedDrink.drinkId = cocktailIdArray[2];
      recommendedDrink.percentage = 10;
      break;
    case "65fd978129f983c33c7eca55": //Olive Burger
      recommendedDrink.drinkId = cocktailIdArray[3];
      recommendedDrink.percentage = 99;
      break;
    case "65fd97b729f983c33c7eca9e": //Spicy Chicken Burger
      recommendedDrink.drinkId = cocktailIdArray[4];
      recommendedDrink.percentage = 15;
      break;
    case "65fd98ca29f983c33c7ece4a": //Healthy Burger with Salad
      recommendedDrink.drinkId = cocktailIdArray[5];
      recommendedDrink.percentage = 18;
      break;
  }
  return recommendedDrink;
}