import { Card, Col, Container, Row } from "react-bootstrap";
import { Cocktail } from "../API/CocktailFetch";
import { CocktailMiniComponent } from "./CocktailMiniComponent";
import { Link } from "react-router-dom";

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
                  width: "300px",
                  overflow: "hidden",
                  padding: "0px",
                  margin: "5px",
                  backgroundImage: `url('https://img.freepik.com/premium-vector/drinking-alcoholic-beverages-forbidden-sign_204827-138.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Link to={`/shoppingcart`}>
                  <div style={{ overflow: "hidden", height: "440px" }}></div>
                </Link>
              </Card>
            </Col>
          </Row>
        }
      </Container>
    </>
  );
};
