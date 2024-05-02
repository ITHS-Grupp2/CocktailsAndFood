import { Card, Container } from "react-bootstrap";
import { Cocktail, price } from "../API/CocktailFetch";
import { NavigationPath } from "./NavigationButton";
import { GetPercentage } from "../services/CocktailInfoService";
import { ProductInfoData } from "./ProductInfo";
import {
  addToCart,
  CartContext,
  CartDispatchContext,
  findQuantity,
} from "./CartContext";
import { CartQuantity } from "./CartQuantity";
import { useContext } from "react";
import { GetIcon } from "./Icons";

export type CocktailInfoData = {
  id: string;
  price: number;
  navigationPath: NavigationPath;
  cocktail: Cocktail;
};

// Cp0: string, p1: string, p2: string, icon: Icon, size: SizeroductInfoData so it can be used in NavigationButton and the Cart.
const convertToProductInfoData = (cocktail: Cocktail): ProductInfoData => {
  return {
    id: cocktail.id,
    productType: "drink",
    title: cocktail.name,
    imgSrc: cocktail.img,
    ingredients: cocktail.ingredients,
    information: cocktail.instructions,
    price: price,
    navigationPath: "/drinkselect",
    quantity: 1,
  };
};

// The component for a single drink of the non-recommended drinks on the CocktailPanel (DrinkSelect page)
export const CocktailMiniComponent = (data: { cocktail: Cocktail }) => {
  const state = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  return (
    <Container>
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
            src={data.cocktail.img}
            alt={`${data.cocktail.name}`}
            style={{
              objectFit: "cover",
              height: "300px",
              width: "300px",
            }}
          />
        </div>
        <Card.Body
          className="d-flex flex-column mb-2"
          style={{ padding: "0px 10px" }}>
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
            <span className="fs-5">{data.cocktail.name}</span>
          </Card.Title>
          <Card.Subtitle>
            <p>
              <i>Alcohol Percentage: {GetPercentage(data.cocktail.id)}%</i>
            </p>
          </Card.Subtitle>
        </Card.Body>
        <div>
          {findQuantity(state, data.cocktail.id) === 0 ? (
            <button
              style={{ height: "40px", width: "100%" }}
              onClick={() =>
                addToCart(dispatch, convertToProductInfoData(data.cocktail))
              }>
              {GetIcon("Cart", "Medium")} $ 9
            </button>
          ) : (
            <CartQuantity
              radius="Card"
              data={{
                cartProduct: state.cartProducts.find(
                  (product) => product.id === data.cocktail.id
                ) || {
                  id: "",
                  title: "",
                  price: 0,
                  img: "",
                  quantity: 0,
                },
              }}
            />
          )}
        </div>
        {/* <NavigationButton navigationPath="/softdrinkselect"></NavigationButton> */}
      </Card>
    </Container>
  );
};
