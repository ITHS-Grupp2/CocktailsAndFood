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

const groupItems = (arr: MainResponse[], size: number) => {
  const grouped = [];
  for (let i = 0; i < arr.length; i += size) {
    grouped.push(arr.slice(i, i + size));
  }
  return grouped;
};

// A function that fetches all Sides-data from FoodAPI and populates the cards with its data
export const SidesComponent = () => {
  const sides = FoodAPI("sides");
  const groupedSides = groupItems(sides, 3);
  return (
    <>
      <div className="headerSmaller, first" style={{ margin: "30px 0px" }}>
        <h1 className="text-center" style={{ marginBottom: "0px" }}>
          Select Sides
        </h1>
      </div>
      <Container>
        {groupedSides.map((side, index) => (
          <Row key={index}>
            {side.map((side, innerIndex) => (
              <Col key={innerIndex} style={{ margin: "25px" }}>
                <Card
                  className="shadow"
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    padding: "0px",
                    margin: "5px",
                  }}>
                  <div style={{ overflow: "hidden" }}>
                    <img
                      className="cardImage"
                      src={side.imageUrl}
                      alt={`${side.title}`}
                      style={{
                        objectFit: "cover",
                        height: "300px",
                        width: "300px",
                      }}
                    />
                  </div>
                  <Card.Body
                    className="d-flex flex-column mb-2"
                    style={{ padding: "0px 10px", height: "3rem" }}>
                    <Card.Title className="d-flex justify-content-between align-items-baseline mt-3">
                      <span className="fs-5">{side.title}</span>
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
        ))}
      </Container>
      <NextButton targetPage="/drinkselect" />
    </>
  );
};
