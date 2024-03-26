import { Button } from "react-bootstrap";

type CartButtonData ={
    productType?: string;
    id?: string;
}

export const CartButton = (buttonData: CartButtonData) => {
  return <Button>Add to Cart | ProductId:{buttonData.id} Type:{buttonData.productType}</Button>;
};

