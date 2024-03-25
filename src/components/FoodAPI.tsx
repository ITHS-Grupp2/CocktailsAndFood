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

// Hämta alla huvudrätter från API:et asynkront. Anna
export const MainAPI = async (): Promise<MainResponse[]> => {
  try {
    const response = await fetch(
      "https://iths-2024-recept-grupp2-s0124q.reky.se/categories/main/recipes"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: MainResponse[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Hämta alla sides från API:et asynkront. Anna
export const SidesAPI = async (): Promise<MainResponse[]> => {
  try {
    const response = await fetch(
      "https://iths-2024-recept-grupp2-s0124q.reky.se/categories/sides/recipes"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: MainResponse[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
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
