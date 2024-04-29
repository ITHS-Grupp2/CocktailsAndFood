import { Col, Container, Row } from "react-bootstrap";
import { Cocktail } from "../API/CocktailFetch";
import { CocktailMiniComponent } from "./CocktailMiniComponent";
import { NextButton, NextButtonCocktail } from "./NextButton";

export const CocktailPanel = (cocktailArray: { cocktails: Cocktail[] }) => {
  const rows = [];
  for (let i = 0; i < cocktailArray.cocktails.length; i++) {
    rows.push(
      <Col key={i}>
        <CocktailMiniComponent cocktail={cocktailArray.cocktails[i]} />
      </Col>
    );
  }

  const foodId = localStorage.getItem("burgerId") as string;

  // A bool to check if the burger ID is not null, based on the above bool.
  const isBurgerIdNotNull = foodId !== null;

  return (
    <>
      <Container className="m-2">
        <Row className="g-3">
          {rows}
          {/* conditional rendering, based on whether the burger ID is null or not  */}
          {isBurgerIdNotNull && (
            <Col>
              <NextButtonCocktail targetPage="/softdrinkselect" />
            </Col>
          )}
        </Row>
      </Container>
      {/* Button instead of the "no drink card" for when burgerId is null */}
      {!isBurgerIdNotNull && (
        <Container>
          <Row>
            <NextButton targetPage="/softdrinkselect" />
          </Row>
        </Container>
      )}
    </>
  );
};
