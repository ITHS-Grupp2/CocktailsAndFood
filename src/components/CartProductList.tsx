import { useContext, useEffect, useState } from "react";
import {
  CartContext,
  CartDispatchContext,
  decrementQuantity,
  incrementQuantity,
} from "./CartContext";
import { Container, Button } from "react-bootstrap";

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
  // Till den som lägger till "x" knappen. Använd "removeFromCart" från CartContext"
  return (
    <>
      <Container>
        <div className="cartItemListBox">
          {state.cartProducts.length > 0 ? (
            <div className="col ">
              <div className="col cardItemList">
                {state.cartProducts.map((cartProduct, index) => (
                  <div
                    key={index}
                    className="row mt-3"
                    style={{ borderBottom: "3px solid black" }}
                  >
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
                      <div className="text-end" style={{ marginTop: "55px" }}>
                        <div className="flexDC">
                          <Button
                            onClick={() => {
                              if (cartProduct.quantity !== 0) {
                                decrementQuantity(dispatch, cartProduct.id);
                              }
                            }}
                            className="cartProductAmountButton"
                            style={{ borderRadius: "10px 0 0 0" }}
                          >
                            -
                          </Button>
                          <div className="amountBox">
                            {cartProduct.quantity}
                          </div>
                          <Button
                            onClick={() => {
                              incrementQuantity(dispatch, cartProduct.id);
                            }}
                            className="cartProductAmountButton"
                            style={{ borderRadius: "0 10px 0 0" }}
                          >
                            +
                          </Button>
                          <p style={{ marginTop: "15px", marginRight: "5px" }}>
                            ${cartProduct.price * cartProduct.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cartProductListBottom">
                <h6
                  className="text-end"
                  style={{ color: "white", marginRight: "30px" }}
                >
                  {state.cartProducts.length} products in cart | Total price: $
                  {totalPrice.toFixed(2)}
                </h6>
              </div>
              <div className="text-end">
                <button className="cartProductCheckoutButton">Pay</button>
              </div>
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </Container>
    </>
  );
};
