import matchData from "../assets/drinkMatch.json";

export type Drink = {
    drinkId: string;
    percentage: number;
    motivation: string;
  };

export const cocktailIdArray = ["12752", "178342", "12402", "11003", "11410", "14167"]; 

//Match the drink with the given burger-id
export function MatchDrinkService(mealId: string) {
  const recommendedDrink: Drink = {
    drinkId: matchData.drinkMatch.find((d) => d.burgerId === mealId)?.drinkId as string,
    percentage: matchData.drinkMatch.find((d) => d.burgerId === mealId)?.percentage as number,
    motivation: matchData.drinkMatch.find((d) => d.burgerId === mealId)?.motivation as string
  };
  return recommendedDrink;
}

//Get the percentage of a drink
export function GetPercentage(drinkId: string){
  return matchData.drinkMatch.find((d) => d.drinkId === drinkId)?.percentage
}