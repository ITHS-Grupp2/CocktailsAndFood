import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Cocktail } from "../API/CocktailFetch";
import { CocktailMiniComponent } from "./CocktailMiniComponent";
import { Link } from "react-router-dom";
import { GetIcon } from "./Icons";

// The Component that shows the non-recommended drinks on the DrinkSelect-page
export const CocktailPanel = (cocktailArray: { cocktails: Cocktail[] }) => {
  const rows = [];
  for (let i = 0; i < cocktailArray.cocktails.length; i++) {
    rows.push(
      <Col>
        <CocktailMiniComponent cocktail={cocktailArray.cocktails[i]} />
      </Col>
    );
  }

  return (
    <>
      <Container className="m-2">
        {
          <Row className="g-3">
            {rows}{" "}
            <Col>
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
                  <Card.Subtitle>
                    <p>
                      <i>Alcohol Percentage: 99%</i>
                    </p>
                  </Card.Subtitle>
                </Card.Body>
                <Link to={`/shoppingcart`}>
                  <button className="navigationButtonFill">
                    {GetIcon("Cart", "white", "Medium")}{" "}
                    <span style={{ paddingLeft: "10px" }}>Price: $0</span>
                  </button>
                </Link>
              </Card>
            </Col>
          </Row>
        }
      </Container>
    </>
  );
};
