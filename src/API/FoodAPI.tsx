import { useEffect, useState } from "react";

// En typ som matchar alla relevanta delar från responsen från alla API-calls. Anna
export type MainResponse = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  categories: string[];
  ingredients: string[];
};

export const FoodAPI = (foodType: string): MainResponse[] => {
  const [food, setFood] = useState<MainResponse[]>([]);
  useEffect(() => {
    const fetchFood = async () => {
      const response = (
        await fetch(
          `https://iths-2024-recept-grupp2-s0124q.reky.se/categories/${foodType}/recipes`
        )
      ).json();
      const foodResponse = await response;
      setFood(foodResponse);
    };
    fetchFood();
  }, []);
  return food;
};

export const SingleFoodAPI = (recipeID: string): MainResponse => {
  const [food, setFood] = useState<MainResponse>({
    _id: "",
    title: "",
    description: "",
    imageUrl: "",
    price: 0,
    categories: [],
    ingredients: [],
  });

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(
        `https://iths-2024-recept-grupp2-s0124q.reky.se/recipes/${recipeID}`
      );
      const foodResponse: MainResponse = await response.json();
      const ingredientNames: string[] = foodResponse.ingredients.map(
        // Name har squiggly för att:
        // mainresponse kan inte ha en ingredients : {name: string} för att:
        // den skickas till productinfoview som använder productinfo som BARA tar emot en string[].
        // Så antingen kan vi ändra mainresponse göra en "ny" productinfo istället för att återanvända
        // samma som i cocktails eller så låter vi squigglyn vara
        // / Rikard
        // MEN DE FUNGERAR!
        (ingredient) => ingredient.name
      );
      setFood({
        ...foodResponse,
        ingredients: ingredientNames,
      });
    };

    fetchFood();
  }, [recipeID]);

  return food;
};

/* //Räcker att använda mallen under för att lägga till nödvändiga värden till API:et
{
    "title": "Mozarella Sticks",
    "description": "Crispy panko coated cheese sticks",
    "imageUrl": "https://natashaskitchen.com/wp-content/uploads/2023/05/Cheese-Sticks-SQ.jpg",
    "price": 5,
    "categories": [
      "sides"
    ],
    "ingredients": [
        {
          "name": "Panko",
          "amount": 1,
          "unit": "tsk"
        },
        {
          "name": "Mozarella",
          "amount": 1,
          "unit": "tsk"
        }
      ]
  }
  */
