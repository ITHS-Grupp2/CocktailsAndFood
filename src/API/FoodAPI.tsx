import { useEffect, useState } from "react";

export type MainResponse = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  categories: string[];
  ingredients: string[];
};

// API call to get all Mains or Sides depending on foodType.
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

// API call to get a single Main or Side.
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
        // ts-ignore due to ingredient.(name) being Any. We dont want to change it due to how ProductInfoData works
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
