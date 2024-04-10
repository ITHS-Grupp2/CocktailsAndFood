import { Card, Container, Row } from "react-bootstrap";
import { FoodAPI, MainResponse } from "../API/FoodAPI";
import { NavigationButton } from "./NavigationButton";
import { ProductInfoData } from "./ProductInfo";

// Kommer användas för att skicka info till varukorgen //RE
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
  };
};

// En funktion som hämtar alla sides och populerar data-variabeln med dessa.
export const SidesComponent = () => {
  const sides = FoodAPI("sides");
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-light rounded shadow-sm my-3"
        style={{ fontFamily: "Arial, sans-serif", height: "100px" }}
      >
        <h1 className="text-center" style={{ marginBottom: "0px" }}>
          Select Sides
        </h1>
      </div>
      <Container>
        <Row>
          {sides.map((sides, index) => (
            <Card
              key={index}
              className="shadow"
              style={{
                width: "300px",
                overflow: "hidden",
                padding: "0px",
                margin: "5px",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  className="cardImage"
                  src={sides.imageUrl}
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    width: "300px",
                  }}
                />
              </div>
              <Card.Body
                className="d-flex flex-column mb-2 "
                style={{ padding: "0px 10px", height: "3rem" }}
              >
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
                  <span className="fs-5 ">{sides.title} </span>
                  <span
                    className="text-muted align-self-end"
                    style={{ minWidth: "4rem", textAlign: "right" }}
                  >
                    ${sides.price}
                  </span>
                </Card.Title>
              </Card.Body>
              <NavigationButton
                productInfo={convertToProductInfoData(sides)}
                price={sides.price}
                navigationPath="/drinkselect"
              ></NavigationButton>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};
