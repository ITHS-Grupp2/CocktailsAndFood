import { CartProductList } from "../components/CartProductList";

export const ShoppingCart = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-light rounded shadow-sm my-3"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <div className="headerSmaller">
          <h1 className="text-center h1Header" style={{ marginBottom: "0px" }}>
            Shopping Cart
          </h1>
        </div>
      </div>
      <div>
        <CartProductList />
      </div>
    </>
  );
};
