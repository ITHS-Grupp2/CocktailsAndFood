import { ReactNode, createContext, useReducer } from "react";
import { ProductInfoData } from "./ProductInfo";

const initialContext: CartState = { cartProducts: [] };
const dispatch: React.Dispatch<Action> = () => null;

export type CartProduct = {
  id: string;
  title: string;
  price: number;
  img: string;
};

export type CartState = {
  cartProducts: CartProduct[];
};

export type Action =
  | { type: "ADD_TO_CART"; payload: CartProduct }
  | { type: "REMOVE_FROM_CART"; payload: string };

export const CartContext = createContext(initialContext);
export const CartDispatchContext = createContext(dispatch);

export const cartReducer = (state: CartState, action: Action) => {
  console.log("Cart Action Called!");
  console.log("CartSize: " + initialContext.cartProducts.length);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case "REMOVE_FROM_CART":
      console.log("Reducer remove from cart =>");
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addToCart = (
  dispatch: React.Dispatch<Action>,
  productData: ProductInfoData
) => {
  const cartProduct: CartProduct = {
    id: productData.id,
    title: productData.title,
    price: productData.price,
    img: productData.imgSrc,
  };
  dispatch({ type: "ADD_TO_CART", payload: cartProduct });
  console.log("Added to Cart");
};

export const removeFromCart = (
  dispatch: React.Dispatch<Action>,
  productId: string
) => {
  console.log(dispatch.name + " " + productId);
  dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  console.log("Removed from Cart");
};

// Nu finns bara children men är convention att alltid ha med props om man behöver fler.
type CartProviderProps = {
  children: ReactNode;
};

// I och med att vi separerat och lagt till det här här inne istället för ute i app.tsx
// så rendreras inte hela sidan om utan bara relevanta komponenter (Fråga Alex)
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialContext);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
