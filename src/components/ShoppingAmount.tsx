import { useReducer, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { removeFromCart, CartDispatchContext } from "./CartContext";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

export const ShoppingAmount = (props: {
  productId: string;
  quantity: number;
  //  Detta är en funktion som används för att uppdatera antalet av en produkt i kundvagnen, returnerar ingenting
  updateQuantity: (productId: string, newQuantity: number) => void;
}) => {
  const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return state + 1;
      case ACTIONS.DECREMENT:
        return state - 1;
      default:
        return state;
    }
  };
  const [amount, dispatch] = useReducer(reducer, props.quantity || 1);
  const dispatchCart = useContext(CartDispatchContext);

  // Funktion som körs varje gång någon trycker på amount knapparna
  // Används det för att uppdatera antalet av produkten
  useEffect(() => {
    props.updateQuantity(props.productId, amount);
  }, [amount, props.productId, props.updateQuantity]);

  return (
    <>
      <div className="flexDC">
        <Button
          onClick={() => {
            if (amount !== 1) {
              dispatch({ type: ACTIONS.DECREMENT });
            } else {
              removeFromCart(dispatchCart, props.productId);
            }
          }}
          className="cartProductAmountButton"
          style={{ borderRadius: "10px 0 0 10px" }}
        >
          -
        </Button>
        <div className="amountBox">{amount}</div>
        <Button
          onClick={() => {
            dispatch({ type: ACTIONS.INCREMENT });
          }}
          className="cartProductAmountButton"
          style={{ borderRadius: "0 10px 10px 0" }}
        >
          +
        </Button>
      </div>
      <p style={{ marginTop: "15px", marginRight: "5px" }}>$240</p>
    </>
  );
};
