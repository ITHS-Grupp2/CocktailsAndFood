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
    // Om varan redan finns i varukorg, öka quantity. Annars lägg till
    case "ADD_TO_CART":
      const existingProductIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        // Skapar en kopia av varukorg med den nya produkten och ersätter varukorgen igen
        // Fråga inte varför men java being java så lägger den annars till 2.
        // Det fungerar, dont question it :)
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
    case "REMOVE_FROM_CART": // Tar bort produkten från shoppingcarten
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "DECREMENT_QUANTITY":
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
    case "INCREMENT_QUANTITY":
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

// Tar bort en i quantity sålänge quantity är mer än 0
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
