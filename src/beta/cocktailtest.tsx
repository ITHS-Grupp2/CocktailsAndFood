import { CocktailFetch } from "../API/cocktailapi";

// Våra valda drinkar:
// const idArray = [12752, 178342, 12402, 11003, 11410, 14167];

// Lägg till drinkid som parameter för att loopa över senare.
export function CocktailTest2() {
  const cocktail = CocktailFetch(12752);
  return (
    <>
      <div>
        <h2>Cocktail:</h2>
        <p>Name: {cocktail.strDrink}</p>
        <p>Category: {cocktail.strCategory}</p>
        <img src={cocktail.strDrinkThumb}></img>
        <p>Description: {cocktail.strInstructions}</p>
      </div>
      <button>Köp mig</button>
    </>
  );
}



// loopa 5 ggr
export function SmallCocktail(drinkid : number) {
    const cocktail = CocktailFetch(drinkid);
    return (
      <>
        <div>
          <h2>Cocktail:</h2>
          <p>Name: {cocktail.strDrink}</p>
          <p>Category: {cocktail.strCategory}</p>
          <img src={cocktail.strDrinkThumb}></img>
          <p>Description: {cocktail.strInstructions}</p>
        </div>
        <button>Köp mig</button>
      </>
    );
  }