import { useContext } from "react";
import { CartContext, CartDispatchContext } from "./CartContext";

export const CartProductList = () => {
  const state = useContext(CartContext);
  //const dispatch = useContext(CartDispatchContext);
  return (
    <>
      {state.cartProducts.length > 0 &&
        state.cartProducts.map((cartProduct) => (
          <>
            <p>
              Product: {cartProduct.id} - {cartProduct.title} -
              {cartProduct.price + ""} -
            </p>
            <img src={cartProduct.img} />
          </>
        ))}
    </>
  );
};
