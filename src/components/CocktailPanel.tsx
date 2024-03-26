import { Col, Container, Row } from "react-bootstrap";
import { Cocktail } from "../API/CocktailFetch";
import { CocktailMiniComponent } from "./CocktailMiniComponent";

export const CocktailPanel = (cocktailArray: { cocktails: Cocktail[] }) => {
  const rows = [];
  for (let i = 0; i < cocktailArray.cocktails.length; i++) {
    rows.push(
        
      <Col>
        <CocktailMiniComponent cocktail={cocktailArray.cocktails[i]}/>
      </Col>
    );
  }

  return (
    <>
      <h3>Select Drink</h3>
      <Container className="m-2">{<Row className="g-3">{rows}</Row>}</Container>
    </>
  );
};
