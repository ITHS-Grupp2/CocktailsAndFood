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

export const CartQuantity = (data: { cartProduct: CartProduct }) => {
  const dispatch = useContext(CartDispatchContext);
  const state = useContext(CartContext);

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
          className="cartProductAmountButton"
          style={{ borderRadius: "0 0 0 10px" }}
        >
          -
        </Button>
        <div className="amountBox">
          {findQuantity(state, data.cartProduct.id)}
        </div>
        <Button
          onClick={() => {
            incrementQuantity(dispatch, data.cartProduct.id);
          }}
          className="cartProductAmountButton"
          style={{ borderRadius: "0 0 10px 0" }}
        >
          +
        </Button>
      </div>
    </>
  );
};