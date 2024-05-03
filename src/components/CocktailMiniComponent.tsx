import { Card } from "react-bootstrap";
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
    <Card
      className="shadow"
      style={{
        width: "auto",
        overflow: "hidden",
        padding: "0px",
        margin: "5px",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <img
          className="cardImage"
          src={data.cocktail.img}
          alt={`${data.cocktail.name}`}
          style={{
            objectFit: "cover",
            height: "300px",
            minWidth: "300px",
            width: "100%",
          }}
        />
      </div>
      <Card.Body className="text-card-center" style={{ padding: "0px 10px" }}>
        <Card.Title className="mb-1">
          <div className="fontBrown">{data.cocktail.name}</div>
        </Card.Title>
        <Card.Subtitle>
          Alcohol Percentage: {GetPercentage(data.cocktail.id)}%
        </Card.Subtitle>
      </Card.Body>
      <div
        style={{
          overflow: "hidden",
          height: "46px",
        }}
      >
        {findQuantity(state, data.cocktail.id) === 0 ? (
          <button
            className="addToCartButton"
            //Have to keep this style here, otherwise it's overridden by other CSS classes
            style={{ width: "100%", borderRadius: "0px 0px 0px 0px" }}
            onClick={() =>
              addToCart(dispatch, convertToProductInfoData(data.cocktail))
            }
          >
            {GetIcon("Cart", "Medium")} $ 9
          </button>
        ) : (
          <div style={{ fontSize: "1.35rem", height: "46.59px" }}>
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
          </div>
        )}
      </div>
      {/* <NavigationButton navigationPath="/softdrinkselect"></NavigationButton> */}
    </Card>
  );
};
