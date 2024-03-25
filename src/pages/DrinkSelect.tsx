import { Button } from "react-bootstrap";
import { ProductInfo } from "../components/ProductInfo";
import { ProductPanel } from "../components/ProductPanel";
import { CocktailFetch } from "../API/cocktailapi";
// Våra valda drinkar:
// const idArray = [12752, 178342, 12402, 11003, 11410, 14167];
type CocktailProperties = {
  id: number;
  title: string;
  img: string;
  description: string;
  ingredients: string[];
};
// Lägg till drinkid som parameter för att loopa över senare.
const idArray = [12752, 178342, 12402, 11003, 11410, 14167];
const recommendedDrink = 178342;

export function DrinkSelect() {
  const cocktailResponse = CocktailFetch(recommendedDrink);
  const getIngredient = () => {
    let ingredientsTemp = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktailResponse[`strIngredient${i}`];
      if (ingredient == null) {
        break;
      } else {
        ingredientsTemp.push(ingredient);
      }
    }
    return ingredientsTemp;
  };
  const cocktail: CocktailProperties = {
    id: cocktailResponse.idDrink,
    title: cocktailResponse.strDrink,
    img: cocktailResponse.strDrinkThumb,
    description: cocktailResponse.strInstructions,
    ingredients: getIngredient(),
  };

  const cocktails: CocktailProperties[] = [];
  const labels: string[] = [];
  idArray.filter((drink) => drink !== recommendedDrink);
  idArray.forEach((id) => {
    const cocktailResponse = CocktailFetch(id);
    labels.push(cocktailResponse.strDrink);
    const c: CocktailProperties = {
      id: cocktailResponse.idDrink,
      title: cocktailResponse.strDrink,
      img: cocktailResponse.strDrinkThumb,
      description: cocktailResponse.strInstructions,
      ingredients: getIngredient(),
    };
    if (id !== recommendedDrink) cocktails.push(c);
  });

  // const list = CocktailList(178342);
  console.log(cocktails);
  return (
    <>
      <h1>Select Drink</h1>
      <h2>Recommended Drink</h2>
      <ProductInfo
        id={cocktail.id}
        productType={"Cocktail"}
        title={cocktail.title}
        imgSrc={cocktail.img}
        ingredients={cocktail.ingredients}
        information={cocktail.description}
        price={0.99}></ProductInfo>

      <ProductPanel panelLabel="Select extra drink" labels={labels} />

      <Button>To Checkout</Button>
    </>
  );
}
