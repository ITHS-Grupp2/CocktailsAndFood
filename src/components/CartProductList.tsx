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
                      borderRadius: "0.8rem",
                      padding: "10px",
                      border: "0.5rem solid #fffcf8",
                    }}>
                    <div
                      className="col-3"
                      style={{
                        maxWidth: "900px",
                        marginLeft: "8px",
                      }}>
                      <img
                        src={cartProduct.img}
                        alt={cartProduct.title}
                        className="img-fluid"
                        style={{
                          opacity: cartProduct.quantity === 0 ? "0.5" : "1",
                          transition: "opacity 0.15s",
                        }}
                      />
                    </div>
                    <div className="col">
                      <h5
                        className="card-subtitle mb-2"
                        style={{ fontWeight: "700" }}>
                        <span>
                          <span
                            style={{
                              opacity: cartProduct.quantity === 0 ? "0.5" : "1",
                            }}>
                            {cartProduct.title} - ${cartProduct.price} x 1
                          </span>
                          <button
                            onClick={() => {
                              setDeletingItemId(cartProduct.id);
                              setTimeout(() => {
                                removeFromCart(dispatch, cartProduct.id);
                                setDeletingItemId(null);
                              }, 750);
                            }}
                            className="remove-from-cart">
                            {GetIcon("Cross", "XLarge")}
                          </button>
                        </span>
                      </h5>
                      <h6
                        style={{
                          opacity: cartProduct.quantity === 0 ? "0.5" : "1",
                        }}
                        className="card-text"></h6>
                      <div className="amount-price-box">
                        <div className="text-end" style={{ width: "150px" }}>
                          <CartQuantity
                            radius="Standalone"
                            data={{ cartProduct }}
                          />
                        </div>
                        <p className="price-amount-single">
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
                    className="add-menu-btn"
                    onClick={() => eraseHistory(dispatchPage)}>
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp; Add Extra
                  </button>
                </Link>
              </div>
              <div className="cartProductListBottom">
                <h6
                  className="text-end"
                  style={{ color: "black", marginRight: "30px" }}>
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
                        emptyCart(dispatch), eraseHistory(dispatchPage);
                      }}>
                      Pay
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
