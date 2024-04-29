import { PageTracker } from "../services/PageHistoryService";
import { CartProductList } from "../components/CartProductList";
export const ShoppingCart = () => {
  return (
    <>
      {PageTracker()}
      <div className="siteSizeMin" style={{ width: "1176px" }}>
        <div className="headerSmaller" style={{ margin: "30px 0px", borderRadius: "0.8rem"}}>
          <h1 className="text-center" style={{ marginBottom: "0px" }}>
            YOUR ORDER:
          </h1>
        </div>
        <div>
          <CartProductList />
        </div>
      </div>
    </>
  );
};
