import { useContext, useEffect, useState } from "react";
import {
  CartContext,
  CartDispatchContext,
  decrementQuantity,
  emptyCart,
  incrementQuantity,
  removeFromCart,
} from "./CartContext";
import { Container, Button } from "react-bootstrap";
import { faCreditCard, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  eraseHistory,
  PageHistoryDispatchContext,
} from "./PageHistoryProvider";

export const CartProductList = () => {
  const state = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const dispatchPage = useContext(PageHistoryDispatchContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  // Used for an animation when a product is deleted from the Cart
  const [deletingItemId, setDeletingItemId] = useState<string | null>(null);

  // Used to show the total price and total amount of products in the Cart
  useEffect(() => {
    const totalPrice = state.cartProducts.reduce(
      (total, cartProduct) => total + cartProduct.price * cartProduct.quantity,
      0
    );
    setTotalPrice(totalPrice);

    const itemsCount = state.cartProducts.reduce(
      (total, cartProduct) => total + cartProduct.quantity,
      0
    );
    setTotalItems(itemsCount);
  }, [state.cartProducts]);

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
                    className={`row ${
                      deletingItemId === cartProduct.id ? "fadeOut" : ""
                    }`}
                    style={{
                      borderBottom: "3px solid black",
                      width: "878px",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      className="col-3"
                      style={{
                        maxWidth: "900px",
                        marginBottom: "20px",
                        marginLeft: "8px",
                      }}
                    >
                      <img
                        src={cartProduct.img}
                        alt={cartProduct.title}
                        className="img-fluid"
                        style={{
                          borderRadius: "0.8rem",
                          opacity: cartProduct.quantity === 0 ? "0.5" : "1",
                          transition: "opacity 0.15s",
                        }}
                      />
                    </div>
                    <div className="col">
                      <h5
                        className="card-subtitle mb-2"
                        style={{ fontWeight: "700" }}
                      >
                        <span>
                          <span
                            style={{
                              opacity: cartProduct.quantity === 0 ? "0.5" : "1",
                            }}
                          >
                            {cartProduct.title}
                          </span>
                          <button
                            onClick={() => {
                              setDeletingItemId(cartProduct.id);
                              setTimeout(() => {
                                removeFromCart(dispatch, cartProduct.id);
                                setDeletingItemId(null);
                              }, 750);
                            }}
                            className="removeFromCart"
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </button>
                        </span>
                      </h5>
                      <h6
                        style={{
                          opacity: cartProduct.quantity === 0 ? "0.5" : "1",
                        }}
                        className="card-text"
                      >
                        ${cartProduct.price}
                      </h6>
                      <div className="text-end" style={{ marginTop: "55px" }}>
                        <div className="flexDC">
                          <Button
                            onClick={() => {
                              if (cartProduct.quantity !== 0) {
                                decrementQuantity(dispatch, cartProduct.id);
                              }
                            }}
                            className="cartProductAmountButton"
                            style={{ borderRadius: "10px 0 0 10px" }}
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
                            style={{ borderRadius: "0 10px 10px 0" }}
                          >
                            +
                          </Button>
                        </div>
                        <p style={{ marginTop: "15px", marginRight: "5px" }}>
                          ${cartProduct.price * cartProduct.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Link to={"/"}>
                  <button
                    className="cartProductNewMenuButton"
                    onClick={() => eraseHistory(dispatchPage)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp; Add menu
                  </button>
                </Link>
              </div>
              <div className="cartProductListBottom">
                <h6
                  className="text-end"
                  style={{ color: "white", marginRight: "30px" }}
                >
                  {totalItems} products in cart | Total price: $
                  {totalPrice.toFixed(2)}
                </h6>
              </div>
              <div className="text-end">
                <span>
                  <Link to={`/orderconfirmation`}>
                    <button
                      className="cartProductCheckoutButton"
                      onClick={() => {
                        emptyCart(dispatch), eraseHistory(dispatchPage);
                      }}
                    >
                      <FontAwesomeIcon icon={faCreditCard} /> Pay
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          ) : (
            <div className="emptyCartBox">
              <p>Your cart is empty</p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
