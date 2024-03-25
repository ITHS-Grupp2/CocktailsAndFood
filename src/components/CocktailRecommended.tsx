import { Container, Col, Row, Button } from "react-bootstrap";

import { CocktailFetch } from "../API/cocktailapi";

// Våra valda drinkar:
// const idArray = [12752, 178342, 12402, 11003, 11410, 14167];
type CocktailProperties = {
  title: string;
  img: string;
  description: string;
  ingredients: string[];
};
// Lägg till drinkid som parameter för att loopa över senare.

export function CocktailRecommended() {
  const cocktailResponse = CocktailFetch(178342);
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
    title: cocktailResponse.strDrink,
    img: cocktailResponse.strDrinkThumb,
    description: cocktailResponse.strInstructions,
    ingredients: getIngredient(),
  };
  return (
    <>
      <h2>{cocktail.title}</h2>
      <Container>
        <Row>
          <Col>
            <img
              src={cocktail.img}
              style={{ width: "400px", height: "400px" }}
            ></img>
            <Row>
              <Col>
                <span>Price: 200 $</span>
              </Col>
              <Col>
                <Button>Add to Cart</Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <p>
                <strong>Ingredients</strong>
                <br />
                <ul>
                  {cocktail.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
            </Row>
            <Row>
              <p>
                <strong>More Information</strong>
                <br />
                {cocktail.description}
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
