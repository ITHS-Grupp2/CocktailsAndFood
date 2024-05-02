import { Link } from "react-router-dom";
import { GetIcon } from "./Icons";

interface NextButtonProps {
  targetPage: string;
}

export const NextButton: React.FC<NextButtonProps> = ({ targetPage }) => {
  return (
    <div
      style={{
        marginTop: "50px",
      }}>
      <div style={{ width: "30%", margin: "0 auto" }}>
        <Link to={targetPage}>
          <button className="nextButton">
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

export const NextButtonCocktail: React.FC<NextButtonProps> = ({
  targetPage,
}) => {
  return (
    <div className="next-button-cocktail">
      <Link to={targetPage}>
        <button className="shadow">
          <span style={{ paddingTop: "115px",paddingBottom:"15px" }}>
            {GetIcon("ArrowRight", 110)}
          </span>
          <span>NEXT</span>
        </button>
      </Link>
    </div>
  );
};
