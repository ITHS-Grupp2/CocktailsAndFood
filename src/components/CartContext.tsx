import { ReactNode, createContext, useReducer } from "react";
import { ProductInfoData } from "./ProductInfo";

const initialContext: CartState = { cartProducts: [] };
const dispatch: React.Dispatch<Action> = () => null;

export type CartProduct = {
  id: string;
  title: string;
  price: number;
  img: string;
  quantity: number;
};

export type CartState = {
  cartProducts: CartProduct[];
};

export type Action =
  | { type: "ADD_TO_CART"; payload: CartProduct }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: string; newQuantity: number };
    }
  | { type: "REMOVE_FROM_CART"; payload: string };

export const CartContext = createContext(initialContext);
export const CartDispatchContext = createContext(dispatch);


// TODO:
// När man callar Add-to-cart, kolla om den redan finns i shoppingcart,
// isåfall +1 quantity istället

// 


export const cartReducer = (state: CartState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartProducts: state.cartProducts.map((product) =>
          product.id === action.payload.productId
            ? { ...product, quantity: action.payload.newQuantity }
            : product
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
    quantity: productData.quantity || 1,
  };
  dispatch({ type: "ADD_TO_CART", payload: cartProduct });
};

export const removeFromCart = (
  dispatch: React.Dispatch<Action>,
  productId: string
) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: productId });
};

// Skickar en handling till UPDATE_QUANTITY att mappa om nya siffran
export const updateQuantity = (
  dispatch: React.Dispatch<Action>,
  productId: string,
  newQuantity: number
) => {
  dispatch({ type: "UPDATE_QUANTITY", payload: { productId, newQuantity } });
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
