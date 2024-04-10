import { useReducer, useContext } from "react";
import { Button } from "react-bootstrap";
import { removeFromCart, CartDispatchContext } from "./CartContext";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

export const ShoppingAmount = (props: { productId: string }) => {
  const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return state + 1;
      case ACTIONS.DECREMENT:
        if (state === 0) return state;
        else return state - 1;
      default:
        return state;
    }
  };

  const [amount, dispatch] = useReducer(reducer, 1);
  const dispatchCart = useContext(CartDispatchContext);

  return (
    <>
      <div>
        <p>id: {props.productId}</p>
        <Button
          onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
          style={{ marginRight: "15px" }}
          className="rounded-circle"
        >
          -
        </Button>
        <span>{amount}</span>
        <Button
          onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
          style={{ marginLeft: "15px" }}
          className="rounded-circle"
        >
          +
        </Button>
      </div>
      <Button onClick={() => removeFromCart(dispatchCart, props.productId)}>
        Remove
      </Button>
    </>
  );
};
