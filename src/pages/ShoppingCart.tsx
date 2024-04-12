import { CartProductList } from "../components/CartProductList";

export const ShoppingCart = () => {
  return (
    <>
          <div className="headerSmaller" style={{ margin: "30px 0px" }}>
            <h1
              className="text-center"
              style={{ marginBottom: "0px" }}
            >
              Shopping Cart
            </h1>
          </div>
      <div>
        <CartProductList />
      </div>
    </>
  );
};
