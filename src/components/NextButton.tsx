import { Link } from "react-router-dom";

interface NextButtonProps {
  targetPage: string;
}

export const NextButton: React.FC<NextButtonProps> = ({ targetPage }) => {
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <div style={{ width: "30%", margin: "0 auto" }}>
        <Link to={targetPage}>
          <button
            style={{
              backgroundColor: "#BF0426",
              width: "100%",
              padding: "0px",
              border: "",
              fontSize: "30px",
              display: "flex",
              justifyContent: "space-between", // Aligns items with space between them
              alignItems: "center", // Centers items vertically
              position: "relative",
            }}
          >
            <span></span>
            <span style={{ flex: "1", paddingTop: "5px", paddingLeft: "80px" }}>
              NEXT
            </span>
            <span style={{ fontSize: "40px", paddingRight: "40px" }}>
              &#129130;
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
