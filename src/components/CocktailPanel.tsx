import { Card, Col, Container, Row } from "react-bootstrap";
import { Cocktail } from "../API/CocktailFetch";
import { CocktailMiniComponent } from "./CocktailMiniComponent";
import { Link } from "react-router-dom";
import { GetIcon } from "./Icons";
import { NextButton } from "./NextButton";

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
              <div style={{ paddingLeft: "12px" }}>
                <Card
                  className="shadow"
                  style={{
                    height: "421px",
                    width: "300px",
                    overflow: "hidden",
                    padding: "0px",
                    marginLeft: "15px",
                    margin: "5px",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <img
                      className="cardImage"
                      src={`https://img.freepik.com/premium-vector/drinking-alcoholic-beverages-forbidden-sign_204827-138.jpg`}
                      alt={"No Drink"}
                      style={{
                        objectFit: "cover",
                        height: "300px",
                        width: "300px",
                      }}
                    />
                  </div>
                  <Card.Body
                    className="d-flex flex-column mb-2"
                    style={{ padding: "0px 10px" }}
                  >
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
                      <span className="fs-5">No Drink</span>
                    </Card.Title>
                  </Card.Body>
                  <Link to={`/softdrinkselect`}>
                    <button className="navigationButtonFill">
                      {GetIcon("Cart", "Medium")}{" "}
                      <span style={{ paddingLeft: "10px" }}>No Drink</span>
                    </button>
                  </Link>
                </Card>
              </div>
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
