export const OrderConfirmation = () => {
  return (
    <>
      <div
        className="confirmationPageLayout"
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4 style={{ marginTop: "30px" }}>Your order is confirmed</h4>
      </div>
      <div
        style={{
          width: "100%",
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
