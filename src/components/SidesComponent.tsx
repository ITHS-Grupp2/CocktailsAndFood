import { Card, Container, Row, Col } from "react-bootstrap";
import { FoodAPI, MainResponse } from "../API/FoodAPI";
import { NavigationButton } from "./NavigationButton";
import { ProductInfoData } from "./ProductInfo";
import { Link } from "react-router-dom";
import { GetIcon } from "./Icons";
import { CartProduct } from "./CartContext";

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

const convertToCartProduct = (side: ProductInfoData): CartProduct => {
  return {
    id: side._id,
    title: side.title,
    img: side.imageUrl,
    price: side.price,
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
          <Col xs={12} sm={6} md={6} lg={4} xl={4}>
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
                  src={`https://media.istockphoto.com/id/1396541669/vector/no-food-or-drink-icon.jpg?s=612x612&w=0&k=20&c=T8qvZM66nqu-Ir_rhjnmlmfTnbSUR4G6t0oPPlvVqfw=`}
                  alt={"No Drink"}
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
                  <span className="fs-5 ">No Sides</span>
                </Card.Title>
              </Card.Body>
              <Link to={`/drinkselect`}>
                <button className="navigationButtonFill">
                  {GetIcon("Cart", "white", "Medium")}{" "}
                  <span style={{ paddingLeft: "10px" }}>No Sides</span>
                </button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
