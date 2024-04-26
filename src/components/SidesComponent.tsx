import { Card, Container, Row, Col } from "react-bootstrap";
import { FoodAPI, MainResponse } from "../API/FoodAPI";
import { NavigationButton } from "./NavigationButton";
import { ProductInfoData } from "./ProductInfo";
import { NextButton } from "./NextButton";

// Sends information to cart
const convertToProductInfoData = (side: MainResponse): ProductInfoData => {
  return {
    id: side._id,
    productType: "Side",
    title: side.title,
    imgSrc: side.imageUrl,
    ingredients: side.ingredients,
    information: side.description,
    price: side.price,
    navigationPath: "/drinkselect",
    quantity: 1,
  };
};

// A function that fetches all Sides-data from FoodAPI and populates the cards with its data
export const SidesComponent = () => {
  const sides = FoodAPI("sides");
  return (
    <>
      <div className="headerSmaller" style={{ margin: "30px 0px" }}>
        <h1 className="text-center" style={{ marginBottom: "0px" }}>
          Sides Select
        </h1>
      </div>
      <Container style={{ minWidth: "500px" }}>
        <Row>
          {sides.map((side, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={4}>
              <Card
                className="shadow"
                style={{
                  overflow: "hidden",
                  padding: "0px",
                  margin: "5px",
                  minWidth: "200px",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <img
                    className="cardImage"
                    src={side.imageUrl}
                    alt={`${side.title}`}
                    style={{
                      objectFit: "cover",
                      height: "300px",
                      width: "100%",
                    }}
                  />
                </div>
                <Card.Body
                  className="d-flex flex-column mb-2 "
                  style={{ padding: "0px 10px", height: "3rem" }}
                >
                  <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
                    <span className="fs-5 ">{side.title} </span>
                  </Card.Title>
                </Card.Body>
                <NavigationButton
                  productInfo={convertToProductInfoData(side)}
                  price={side.price}
                  navigationPath="/drinkselect"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <NextButton targetPage="/drinkselect" />
    </>
  );
};
