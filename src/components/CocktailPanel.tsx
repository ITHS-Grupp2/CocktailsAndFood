import { Col, Container, Row } from "react-bootstrap";
import { Cocktail } from "../API/CocktailFetch";
import { CocktailMiniComponent } from "./CocktailMiniComponent";
import { NextButton, NextButtonCard } from "./NextButton";

export const CocktailPanel = (cocktailArray: { cocktails: Cocktail[] }) => {
  const rows = [];
  for (let i = 0; i < cocktailArray.cocktails.length; i++) {
    rows.push(
      <Col key={i} style={{ margin: "0.5rem" }}>
        <CocktailMiniComponent cocktail={cocktailArray.cocktails[i]} />
      </Col>
    );
  }

  const foodId = localStorage.getItem("burgerId") as string;

  // A bool to check if the burger ID is not null, based on the above bool.
  const isBurgerIdNotNull = foodId !== null;

  return (
    <>
      <div style={{ justifyContent: "center" }}>
        <Row
          className="g-3"
          style={{
            display: "flex",
            flex: "0 0 33.3333%",
            justifyContent: "space-between",
          }}>
          {rows}
          {/* conditional rendering, based on whether the burger ID is null or not  */}
          {isBurgerIdNotNull && (
            <Col>
              <NextButtonCard targetPage="/softdrinkselect" />
            </Col>
          )}
        </Row>
      </div>
      {/* Button instead of the "no drink card" for when burgerId is null */}
      {!isBurgerIdNotNull && (
        <Container>
          <NextButton targetPage="/softdrinkselect" />
        </Container>
      )}
    </>
  );
};
