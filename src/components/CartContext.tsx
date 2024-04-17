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
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "DECREMENT_QUANTITY"; payload: string }
  | { type: "INCREMENT_QUANTITY"; payload: string };

export const CartContext = createContext(initialContext);
export const CartDispatchContext = createContext(dispatch);

export const cartReducer = (state: CartState, action: Action) => {
  switch (action.type) {
    // If product already exists in the cart, increase quantity by 1, otherwise add the product to the cart.
    case "ADD_TO_CART":
      const existingProductIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        // Creates a copy of the cart and the product
        // Add the copy of the product to the copy of the cart
        // Replace the cart with the Copied cart
        // It has to be done this way or the quantity is increased by 2 instead of 1
        // Dont question it, it works ¯\_(ツ)_/¯ //RE
        const updatedCartProducts = [...state.cartProducts];
        const updatedProduct = { ...updatedCartProducts[existingProductIndex] };
        updatedProduct.quantity += 1;
        updatedCartProducts[existingProductIndex] = updatedProduct;
        return {
          ...state,
          cartProducts: updatedCartProducts,
        };
      } else {
        return {
          ...state,
          cartProducts: [
            ...state.cartProducts,
            { ...action.payload, quantity: 1 },
          ],
        };
      }
    case "REMOVE_FROM_CART": // Removes the product (all quantity) from the cart
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "DECREMENT_QUANTITY": // Decrements one of the selected products from the cart (aslong as quantity > 0)
      return {
        ...state,
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === action.payload) {
            if (product.quantity > 0) {
              return { ...product, quantity: product.quantity - 1 };
            } else {
              return product;
            }
          } else {
            return product;
          }
        }),
      };
    case "INCREMENT_QUANTITY": // Increments one of the selected products from the cart
      return {
        ...state,
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        }),
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

export const decrementQuantity = (
  dispatch: React.Dispatch<Action>,
  productId: string
) => {
  dispatch({ type: "DECREMENT_QUANTITY", payload: productId });
};

export const incrementQuantity = (
  dispatch: React.Dispatch<Action>,
  productId: string
) => {
  dispatch({ type: "INCREMENT_QUANTITY", payload: productId });
};

// Right now theres only the children props but convention is to always have a x-ProviderProps incase u need to add more later.
type CartProviderProps = {
  children: ReactNode;
};

// Having these seperate here instead of having them both wrap everything in app/main.tsx
// makes only the relevant component be re-rendered instead of the whole page (Ask Alex)
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
