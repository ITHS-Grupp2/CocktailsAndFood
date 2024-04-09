import { createContext } from "react";
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

export type Action = { type: "ADD_TO_CART"; payload: CartProduct };

export const CartContext = createContext(initialContext);
export const CartDispatchContext = createContext(dispatch);

export const cartReducer = (state: CartState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
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
};
