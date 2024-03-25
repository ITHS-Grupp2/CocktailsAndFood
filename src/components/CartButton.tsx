import { Button } from "react-bootstrap";

type ProductType = "Cocktail" | "Main" | "Sides"

type CartButtonData ={
    productType?: ProductType;
    id?: number;
}

export const CartButton = (buttonData: CartButtonData) => {
  return <Button>Add to Cart | ProductId:{buttonData.id} Type:{buttonData.productType}</Button>;
};
