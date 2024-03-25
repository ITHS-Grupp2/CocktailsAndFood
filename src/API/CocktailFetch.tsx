import { useEffect, useState } from "react";

export type Cocktail = {
  id: number;
  name: string;
  img: string;
  ingredients: string[];
  instructions: string;
};

export const price: number = 9.99;

export const CocktailFetch = (drinkid: number): Cocktail => {
  const [cocktail, setCocktail] = useState<Cocktail>({
    id: -1,
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

// export const CocktailFetch = (drinkid: number) => {
//   const [cocktail, setCocktail] = useState<any>({ drinks: [] });
//   useEffect(() => {
//     const fetchCocktail = async () => {
//       const response = (
//         await fetch(
//           `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkid}&api_key=1`
//         )
//       ).json();
//       const cocktail = await response;
//       const fetchedDrink = cocktail.drinks[0];
//       setCocktail(fetchedDrink);
//     };
//     fetchCocktail();
//   }, []);

//   return cocktail;
// };

// {
//     "drinks":[
//        {
//           "idDrink":"11007",
//           "strDrink":"Margarita",
//           "strDrinkAlternate":null,
//           "strTags":"IBA,ContemporaryClassic",
//           "strVideo":null,
//           "strCategory":"Ordinary Drink",
//           "strIBA":"Contemporary Classics",
//           "strAlcoholic":"Alcoholic",
//           "strGlass":"Cocktail glass",
//           "strInstructions":"Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
//           "strInstructionsES":null,
//           "strInstructionsDE":"Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der \u00e4u\u00dfere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genie\u00dfers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis sch\u00fctteln und vorsichtig in das Glas geben.",
//           "strInstructionsFR":null,
//           "strInstructionsIT":"Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
//           "strInstructionsZH-HANS":null,
//           "strInstructionsZH-HANT":null,
//           "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg",
//           "strIngredient1":"Tequila",
//           "strIngredient2":"Triple sec",
//           "strIngredient3":"Lime juice",
//           "strIngredient4":"Salt",
//           "strIngredient5":null,
//           "strIngredient6":null,
//           "strIngredient7":null,
//           "strIngredient8":null,
//           "strIngredient9":null,
//           "strIngredient10":null,
//           "strIngredient11":null,
//           "strIngredient12":null,
//           "strIngredient13":null,
//           "strIngredient14":null,
//           "strIngredient15":null,
//           "strMeasure1":"1 1\/2 oz ",
//           "strMeasure2":"1\/2 oz ",
//           "strMeasure3":"1 oz ",
//           "strMeasure4":null,
//           "strMeasure5":null,
//           "strMeasure6":null,
//           "strMeasure7":null,
//           "strMeasure8":null,
//           "strMeasure9":null,
//           "strMeasure10":null,
//           "strMeasure11":null,
//           "strMeasure12":null,
//           "strMeasure13":null,
//           "strMeasure14":null,
//           "strMeasure15":null,
//           "strImageSource":"https:\/\/commons.wikimedia.org\/wiki\/File:Klassiche_Margarita.jpg",
//           "strImageAttribution":"\"Cocktai"
