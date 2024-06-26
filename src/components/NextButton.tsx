import { Link } from "react-router-dom";
import { GetIcon } from "./Icons";

interface NextButtonProps {
  targetPage: string;
}

//Smol NEXT button Variant
export const NextButton: React.FC<NextButtonProps> = ({ targetPage }) => {
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <div style={{ width: "50%", margin: "0 auto" }}>
        <Link to={targetPage}>
          <button className="nextButton" style={{ display: "flex" }}>
            <span className="nextButtonText">NEXT</span>
            <span className="nextButtonArrow">
              {GetIcon("ArrowRight", "Large")}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

//Large NEXT button card Variant
export const NextButtonCard: React.FC<NextButtonProps> = ({ targetPage }) => {
  return (
    <div className="next-button-cocktail">
      <Link to={targetPage}>
        <button className="shadow">
          <span style={{ paddingTop: "115px", paddingBottom: "15px" }}>
            {GetIcon("ArrowRight", 110)}
          </span>
          <span>NEXT</span>
        </button>
      </Link>
    </div>
  );
};
