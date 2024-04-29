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
          <button className="nextButton">
            <span className="nextButtonText">NEXT</span>
            <span className="nextButtonArrow">&#129130;</span>
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
    <div className="next-button-cocktail" style={{ paddingLeft: "12px" }}>
      <Link to={targetPage}>
        <button className="shadow">
          <span style={{ fontSize: "150px", paddingTop: "50px" }}>
            &#129130;
          </span>
          <span>NEXT</span>
        </button>
      </Link>
    </div>
  );
};
