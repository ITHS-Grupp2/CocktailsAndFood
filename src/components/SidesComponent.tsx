import { Card, Container, Row } from "react-bootstrap";
import { FoodAPI, MainResponse } from "../API/FoodAPI";
import { NavigationButton } from "./NavigationButton";
import { ProductInfoData } from "./ProductInfo";
import { Link } from "react-router-dom";

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
                  alt={`${sides.title}`}
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
                </Card.Title>
              </Card.Body>
              <NavigationButton
                productInfo={convertToProductInfoData(sides)}
                price={sides.price}
                navigationPath="/drinkselect"
              ></NavigationButton>
            </Card>
          ))}
          {/*A No-Sides card that takes you to drinks*/}
          <Card
            className="shadow"
            style={{
              width: "300px",
              overflow: "hidden",
              padding: "0px",
              margin: "5px",
              backgroundImage: `url('https://media.istockphoto.com/id/1396541669/vector/no-food-or-drink-icon.jpg?s=612x612&w=0&k=20&c=T8qvZM66nqu-Ir_rhjnmlmfTnbSUR4G6t0oPPlvVqfw=')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Link to={`/drinkselect`}>
              <div style={{ overflow: "hidden", height: "300px" }}></div>
            </Link>
          </Card>
        </Row>
      </Container>
    </>
  );
};
