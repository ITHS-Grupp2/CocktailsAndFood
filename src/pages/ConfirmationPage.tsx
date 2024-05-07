import { OrderConfirmation } from "../components/OrderConfirmation";

export const ConfirmationPage = () => {
  return (
    <div className="siteSize siteSizeMin">
      <div className="headerSmaller first">
        <h1 className="text-center" style={{ marginBottom: "0px" }}>
          Thank you for your order
        </h1>
      </div>
      <OrderConfirmation />
    </div>
  );
};
