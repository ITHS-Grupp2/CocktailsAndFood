import { Button } from "react-bootstrap";
import { CartDispatchContext, CartProduct, decrementQuantity, incrementQuantity } from "./CartContext";
import { useContext } from "react";

export const CartQuantity = (data: {cartProduct: CartProduct}) => {
    const dispatch = useContext(CartDispatchContext);


    return (
        <>
        
        <div className="flexDC">
        <Button
          onClick={() => {
            if (data.cartProduct.quantity !== 0) {
              decrementQuantity(dispatch, data.cartProduct.id);
            }
          }}
          className="cartProductAmountButton"
          style={{ borderRadius: "10px 0 0 10px" }}
        >
          -
        </Button>
        <div className="amountBox">
          {data.cartProduct.quantity}
        </div>
        <Button
          onClick={() => {
            incrementQuantity(dispatch, data.cartProduct.id);
          }}
          className="cartProductAmountButton"
          style={{ borderRadius: "0 10px 10px 0" }}
        >
          +
        </Button>
      </div>
      </>
    )

}




const convertToCartProduct = (side: ProductInfoData): CartProduct => {
    return {
      id: side._id,
      title: side.title,
      img: side.imageUrl,
      price: side.price,
      quantity: 1,
    };
  };