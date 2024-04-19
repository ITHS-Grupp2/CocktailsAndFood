export const OrderConfirmation = () => {
  return (
    <>
      <div
        className="confirmationPageLayout"
        style={{
          width: "600px",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "50px",
          display: "flex",
          flexDirection: "column",
          paddingTop: "25px",
        }}
      >
        <h1>Thank you for your order</h1>
        <h4 style={{ marginTop: "20px" }}>Your order is confirmed</h4>
      </div>
      <div
        style={{
          width: "600px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          paddingTop: "50px",
        }}
      >
        <img
          src="https://i.ibb.co/MsLnwLC/Hamburgare.png"
          style={{
            maxWidth: "400px",
            alignSelf: "center",
          }}
        />
      </div>
    </>
  );
};
