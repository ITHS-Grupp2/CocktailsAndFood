import { useContext, useEffect, useState } from "react";
import {
  CartContext,
  CartDispatchContext,
  updateQuantity,
} from "./CartContext";
import { ShoppingAmount } from "./ShoppingAmount";

export const CartProductList = () => {
  const state = useContext(CartContext);

  const dispatch = useContext(CartDispatchContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = state.cartProducts.reduce(
      (total, cartProduct) => total + cartProduct.price * cartProduct.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [state.cartProducts]);

  return (
    <>
      <div className="container">
        {state.cartProducts.length > 0 ? (
          <div className="col">
            <div className="col card mb-3">
              <div className="card-body">
                {state.cartProducts.map((cartProduct, index) => (
                  <div key={index} className="row mb-3">
                    <div className="col-3" style={{ maxWidth: "200px" }}>
                      <img
                        src={cartProduct.img}
                        alt={cartProduct.title}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col">
                      <h6 className="card-subtitle mb-2">
                        {cartProduct.title}
                      </h6>
                      <p className="card-text">${cartProduct.price}</p>
                      {/*När antalet ändras, anropas updateQuantity-funktionen i CartContext. */}
                      <ShoppingAmount
                        productId={cartProduct.id}
                        quantity={cartProduct.quantity}
                        updateQuantity={(productId, newQuantity) => {
                          updateQuantity(dispatch, productId, newQuantity);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h6 className="text-end" style={{ color: "white" }}>
                Total price: ${totalPrice.toFixed(2)}
              </h6>
            </div>
            <div className="text-end">
              <button className="btn btn-success">Pay</button>
            </div>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </>
  );
};
