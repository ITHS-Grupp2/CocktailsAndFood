import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { ShoppingAmount } from "./ShoppingAmount";

export const CartProductList = () => {
  const state = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = state.cartProducts.reduce(
      (count, cartProduct) => count + cartProduct.price, // * cartProduct.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [state.cartProducts]);

  return (
    <>
      <div className="container">
        {state.cartProducts.length > 0 ? (
          <div className="row">
            <div className="col">
              <div className="card mb-3">
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
                        <ShoppingAmount productId={cartProduct.id} />
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
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </>
  );
};
