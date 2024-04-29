import { Card, Container, Row, Col } from "react-bootstrap";
import { FoodAPI, MainResponse } from "../API/FoodAPI";
import { NavigationButton } from "./NavigationButton";
import { ProductInfoData } from "./ProductInfo";
import { NextButton } from "./NextButton";
import {
  addToCart,
  CartContext,
  CartDispatchContext,
  findQuantity,
} from "./CartContext";
import { GetIcon } from "./Icons";
import { CartQuantity } from "./CartQuantity";
import { useContext } from "react";

// Sends information to cart
const convertToProductInfoData = (softDrink: MainResponse): ProductInfoData => {
  return {
    id: softDrink._id,
    productType: "softdrinks",
    title: softDrink.title,
    imgSrc: softDrink.imageUrl,
    ingredients: softDrink.ingredients,
    information: softDrink.description,
    price: softDrink.price,
    navigationPath: "/shoppingcart",
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

// A function that fetches all softdrinks-data from FoodAPI and populates the cards with its data
export const SoftDrinkComponent = () => {
  const softdrink = FoodAPI("softdrinks");
  const groupedSoftDrinks = groupItems(softdrink, 3);
  const state = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  return (
    <>
      <div className="headerSmaller, first" style={{ margin: "30px 0px" }}>
        <h1 className="text-center" style={{ marginBottom: "0px" }}>
          Select Soft Drinks
        </h1>
      </div>
      <Container>
        {groupedSoftDrinks.map((group, index) => (
          <Row key={index}>
            {group.map((softDrink, innerIndex) => (
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
                      src={softDrink.imageUrl}
                      alt={`${softDrink.title}`}
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
                      <span className="fs-5">{softDrink.title}</span>
                    </Card.Title>
                  </Card.Body>
                  {findQuantity(state, softDrink._id) === 0 ? (
                    <button
                      style={{ height: "40px", width: "100%" }}
                      onClick={() =>
                        addToCart(dispatch, convertToProductInfoData(softDrink))
                      }
                    >
                      {GetIcon("Cart", "Medium")} $ 9
                    </button>
                  ) : (
                    <CartQuantity
                      cartProduct={
                        state.cartProducts.find(
                          (product) => product.id === softDrink._id
                        ) || {
                          id: "",
                          title: "",
                          price: 0,
                          img: "",
                          quantity: 0,
                        }
                      }
                    />
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <NextButton targetPage="/shoppingcart" />
    </>
  );
};
