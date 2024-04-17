import { useEffect, useState } from "react";

export type Cocktail = {
  id: string;
  name: string;
  img: string;
  ingredients: string[];
  instructions: string;
};

// Hardcoded price for a drink.
export const price: number = 9;

// Gets the CocktailData from the API based on drinkid
export const CocktailFetch = (drinkid: string): Cocktail => {
  const [cocktail, setCocktail] = useState<Cocktail>({
    id: "",
    name: "",
    img: "",
    ingredients: [],
    instructions: "",
  });

  useEffect(() => {
    const fetchCocktail = async () => {
      const response = (
        await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkid}&api_key=1`
        )
      ).json();
      const cocktailResponse = await response;
      const fetchedDrink = cocktailResponse.drinks[0];

      // Creates a Cocktail from the response
      const ProperCocktail: Cocktail = {
        id: fetchedDrink.idDrink,
        name: fetchedDrink.strDrink,
        img: fetchedDrink.strDrinkThumb,
        ingredients: getIngredients(fetchedDrink),
        instructions: fetchedDrink.strInstructions,
      };

      setCocktail(ProperCocktail);
    };
    fetchCocktail();
  }, []);

  return cocktail;
};

// Gets the ingredients from a Cocktail.
// Each cocktail comes wtih up to 15 ingredients from the API
// Loops until an incredient is null and adds every ingredient to the array
const getIngredients = (drink: any): string[] => {
  const ingredientsTemp = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    if (!ingredient) {
      break;
    }
    ingredientsTemp.push(ingredient);
  }
  return ingredientsTemp;
};
