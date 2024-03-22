import { Container, Col, Row, Button } from "react-bootstrap";

import { CocktailFetch } from "../API/cocktailapi";

// Våra valda drinkar:
// const idArray = [12752, 178342, 12402, 11003, 11410, 14167];

// Lägg till drinkid som parameter för att loopa över senare.
export function CocktailRecommended() {
  const cocktail = CocktailFetch(12752);
  const getIngrediens = () => {
    let ingredienser = [];
    for (let i = 1; i <= 15; i++) {
      const ingrediens = cocktail[`strIngredient${i}`];
      if (ingrediens == null) {
        break;
      } else {
        ingredienser.push(ingrediens);
      }
    }
    return ingredienser;
  };
  return (
    <>
      <h2>Product Name</h2>
      <Container>
        <Row>
          <Col>
            <img
              src={cocktail.strDrinkThumb}
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
                  {getIngrediens().map((item) => (
                    <li key={item.id}>{...item}</li>
                  ))}
                </ul>
              </p>
            </Row>
            <Row>
              <p>
                <strong>More Information</strong>
                <br />
                {cocktail.strInstructions}
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
