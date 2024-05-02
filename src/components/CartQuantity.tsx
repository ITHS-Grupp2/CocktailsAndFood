import { Button } from "react-bootstrap";
import {
  CartDispatchContext,
  CartProduct,
  decrementQuantity,
  incrementQuantity,
  findQuantity,
  CartContext,
} from "./CartContext";
import { useContext } from "react";

type CartQuantityBorderRadius = "Card" | "Standalone";

interface CartQuantityProps {
  data: { cartProduct: CartProduct };
  radius: CartQuantityBorderRadius;
}

export const CartQuantity: React.FC<CartQuantityProps> = ({ data, radius }) => {
  const dispatch = useContext(CartDispatchContext);
  const state = useContext(CartContext);

  let radiusLeft;
  let radiusRight;

  if (radius === "Card") {

    radiusLeft = "0 0 0 10px";
    radiusRight = "0 0 10px 0";
  }
  if (radius === "Standalone") {
    radiusLeft = "10px 0 0px 10px";
    radiusRight = "0 10px 10px 0";
  }

  return (
    <>
      <div className="flexDC">
        <Button
          onClick={() => {
            const quantity = findQuantity(state, data.cartProduct.id);
            if (quantity !== 0) {
              decrementQuantity(dispatch, data.cartProduct.id);
            }
          }}
          className="amount-btn"
          style={{ borderRadius: radiusLeft }}
        >
          -
        </Button>
        <div className="amount-box">
          {findQuantity(state, data.cartProduct.id)}
        </div>
        <Button
          onClick={() => {
            incrementQuantity(dispatch, data.cartProduct.id);
          }}
          className="amount-btn"
          style={{ borderRadius: radiusRight }}
        >
          +
        </Button>
      </div>
    </>
  );
};
