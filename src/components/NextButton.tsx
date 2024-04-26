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
