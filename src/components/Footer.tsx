import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer">

      <div>
        <p>
          <strong> Visit us</strong>
          <br />
          Storgatan 12
          <br />
          123 23 Storstan
        </p>
        <p>
          <strong>Contact us!</strong>
          <br />
          +46 70-123 456 78
        </p>
        <p>
          <Link to="/about">About us</Link>
        </p>
      </div>
      <div></div>
      <div>
        <img
          src="src\assets\2021_Facebook_icon.svg"
          style={{ height: "40px" }}
          className="p-1"
        ></img>
        <br />
        <img
          src="src\assets\Instagram_icon.png"
          style={{ height: "40px" }}
          className="p-1"
        ></img>
        <br />
      </div>
    </div>
  );
};
