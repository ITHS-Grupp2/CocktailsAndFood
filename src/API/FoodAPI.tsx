import { useEffect, useState } from "react";

// Skapar en Mat-typ vars properties matchar det som kommer från API:et
export type MainResponse = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  categories: string[];
  ingredients: string[];
};

// Funktion för att hämta flera hamburgare eller sides från API:et
export const FoodAPI = (foodType: string): MainResponse[] => {
  const [food, setFood] = useState<MainResponse[]>([]);

  // Körs för att hämta sides samt hamburgare
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

// Funktion för att hämta data från EN rätt baserat på id
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
        //@ts-ignore
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
