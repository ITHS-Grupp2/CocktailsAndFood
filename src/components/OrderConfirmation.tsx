import React, { useEffect } from "react";

function RandomNumber() {
  return Math.floor(Math.random() * 9000) + 1000;
}

export const OrderConfirmation: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <div className="orderConfirmationPage">
        <h1>Your order has been placed!</h1>
        <div className="orderConfirmationPageNumber">
          <h1>ORDER NR</h1>
          <h1>{RandomNumber()}</h1>
        </div>
      </div>
    </>
  );
};
