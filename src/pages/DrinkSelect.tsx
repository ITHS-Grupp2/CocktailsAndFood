import { Button } from "react-bootstrap";
import { ProductInfo } from "../components/ProductInfo";
import { ProductPanel } from "../components/ProductPanel";

export const DrinkSelect = () => {
  return (
    <>
      <h1>Select Drink</h1>
      <h2>Recommended Drink</h2>
      <ProductInfo />
      <ProductPanel label="Select extra drink" />
      <Button>To Checkout</Button>
    </>
  );
};
