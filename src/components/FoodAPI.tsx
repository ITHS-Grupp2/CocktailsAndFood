import { useEffect, useState } from "react";

type MainResponse = {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    categories: string[];
    ingredients: string[];
}

export const MainAPI = () => {
    const [mainCourses, setMainCourses] = useState<MainResponse[]>([]);

    useEffect(() => {
        //Hämtar alla recept
        fetch("https://iths-2024-recept-grupp2-s0124q.reky.se/recipes")
        .then((res) => res.json())
        .then((data) => setMainCourses(data));
    }, []);

    return (
        <ul>
            {mainCourses.map((main, index) => (
                <li key={index}>
                    {main.title}, {main.description},  
                    {main.imageUrl}, {main.price}
                </li>
            ))}
        </ul>
    );
}

/* //Räcker att använda mallen under för att lägga till nödvändiga värden till API:et
{
    "title": "Greasy Burger",
    "description": "A very greasy burger made of Sweden's fattest cow",
    "imageUrl": "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "price": 169,
    "categories": [
      "main"
    ],
    "ingredients": [
        {
          "name": "Bread",
          "amount": 1,
          "unit": "tsk"
        },
        {
          "name": "Swedish Beef",
          "amount": 1,
          "unit": "tsk"
        },
        {
          "name": "Mayonnaise",
          "amount": 100,
          "unit": "gram"
        },
        {
          "name": "Bacon",
          "amount": 100,
          "unit": "gram"
        },
        {
          "name": "Cheddar",
          "amount": 100,
          "unit": "gram"
        },
        {
          "name": "Tomato",
          "amount": 100,
          "unit": "gram"
        },
        {
          "name": "Sallad",
          "amount": 100,
          "unit": "gram"
        }
  
      ]
  }
  */