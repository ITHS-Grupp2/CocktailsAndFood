import { useContext, useEffect, useState } from "react";
import {
  CartContext,
  CartDispatchContext,
  emptyCart,
  removeFromCart,
} from "./CartContext";
import { Container } from "react-bootstrap";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  eraseHistory,
  PageHistoryDispatchContext,
} from "./PageHistoryProvider";
import { CartQuantity } from "./CartQuantity";
import { Salad } from "./Salad";
import { GetIcon } from "./Icons";

export const CartProductList = () => {
  const state = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const dispatchPage = useContext(PageHistoryDispatchContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  // Used for an animation when a product is deleted from the Cart
  const [deletingItemId, setDeletingItemId] = useState<string | null>(null);
  const colors = [
    "rgba(191, 4, 38, 0.34)",
    "rgba(64, 15, 15, 0.34)",
    "rgba(217, 95, 24, 0.34)",
    "rgba(85, 140, 3, 0.34)",
  ];
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
                    } shadowSubtle`}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "0.8rem",
                      padding: "10px",
                      marginBottom: "6px",
                      marginTop: "6px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: colors[index % colors.length],
                        opacity: 0.2, // Change depending on what opacity you prefer.
                        borderRadius: "0.8rem",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                      }}
                    ></div>
                    <div
                      className="col-3"
                      style={{
                        maxWidth: "175px",
                        padding: "0px",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <img
                        src={cartProduct.img}
                        alt={cartProduct.title}
                        className="shadowSubtle"
                        style={{
                          opacity: cartProduct.quantity === 0 ? "0.5" : "1",
                          transition: "opacity 0.15s",
                          width: "177px",
                          borderRadius: "0.8rem",
                        }}
                      />
                    </div>

                    <div className="col">
                      <div
                        className="card-subtitle mb-2"
                        style={{ fontWeight: "700" }}
                      >
                        <span>
                          <span
                            className="fontBrown"
                            style={{
                              fontSize: "1.6rem",
                              opacity: cartProduct.quantity === 0 ? "0.5" : "1",
                            }}
                          >
                            {cartProduct.title}
                          </span>
                          <span
                            className="fontBrown"
                            style={{ fontWeight: "450", fontSize: "1.2rem" }}
                          >
                            &nbsp; - ${cartProduct.price}.00 x 1
                          </span>
                        </span>
                        <div className="amount-price-box">
                          <button
                            onClick={() => {
                              setDeletingItemId(cartProduct.id);
                              setTimeout(() => {
                                removeFromCart(dispatch, cartProduct.id);
                                setDeletingItemId(null);
                              }, 750);
                            }}
                            className="remove-from-cart"
                          >
                            {GetIcon("Cross", "Medium")}
                          </button>
                          <div
                            className="text-end"
                            style={{ width: "150px", fontSize: "1.2rem" }}
                          >
                            <CartQuantity
                              radius="Standalone"
                              data={{ cartProduct }}
                            />
                            <p className="price-amount-single">
                              ${cartProduct.price * cartProduct.quantity}.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <h6
                        style={{
                          opacity: cartProduct.quantity === 0 ? "0.5" : "1",
                        }}
                        className="card-text"
                      ></h6>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Link to={"/"}>
                  <button
                    className="add-menu-btn"
                    onClick={() => {
                      eraseHistory(dispatchPage), localStorage.clear();
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp; Add Extra
                  </button>
                </Link>
              </div>
              <div className="cartProductListBottom">
                <h6
                  className="text-end fontBrown"
                  style={{ marginRight: "30px" }}
                >
                  <b>
                    {totalItems} products in cart | Total sum: $
                    {totalPrice.toFixed(2)}
                  </b>
                </h6>
              </div>
              <div className="salad-row">
                <Salad />
                <div>
                  <Link to={`/orderconfirmation`}>
                    <button
                      className="cartProductCheckoutButton"
                      onClick={() => {
                        emptyCart(dispatch),
                          eraseHistory(dispatchPage),
                          localStorage.clear();
                      }}
                    >
                      <FontAwesomeIcon icon={faCreditCard} />
                      &nbsp;Pay
                    </button>
                  </Link>
                </div>
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
