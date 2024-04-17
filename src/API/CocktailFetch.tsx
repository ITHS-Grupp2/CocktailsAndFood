import { useEffect, useState } from "react";

// Skapar en Cocktail-typ vars properties matchar det som kommer från API:et
export type Cocktail = {
  id: string;
  name: string;
  img: string;
  ingredients: string[];
  instructions: string;
};

//Hårdkodat pris för en cocktail
export const price: number = 9;

// Funktion för att hämta cocktaildata från ett API baserat på drinkid
export const CocktailFetch = (drinkid: string): Cocktail => {
  const [cocktail, setCocktail] = useState<Cocktail>({
    id: "",
    name: "",
    img: "",
    ingredients: [],
    instructions: "",
  });

  // Körs för att hämta cocktaildata
  useEffect(() => {
    const fetchCocktail = async () => {
      const response = (
        await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkid}&api_key=1`
        )
      ).json();
      const cocktailResponse = await response;
      const fetchedDrink = cocktailResponse.drinks[0];

      // Skapar en Cocktail från den hämtade datan
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

// Funktion för att hämta ingredienser från cocktails
// Varje cocktail har upp till 15 ingredienser, loopar tills det inte finns någon ingrediens kvar att hämta
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
