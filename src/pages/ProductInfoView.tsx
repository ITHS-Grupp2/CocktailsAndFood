import { ProductInfo } from "../components/ProductInfo";

export const ProductInfoView = () => {
  return (
    <>
    <h1>Product Info</h1>
      <ProductInfo id={0} productType={"Main"} title={"Test Burger"} imgSrc={""} ingredients={[]} information={""} price={0.99} />
    </>
  );
};
