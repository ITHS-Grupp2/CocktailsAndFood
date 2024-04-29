import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>
          <strong>
            <a href="https://maps.app.goo.gl/zut2pREhkCaJwi598">Visit</a>
          </strong>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>
      <div className="footer-social-icons">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/240px-Facebook_icon_%28black%29.svg.png"
          style={{ height: "40px" }}
          className="p-1"
          alt="Facebook Icon"
        ></img>
        <br />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/240px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png"
          style={{ height: "40px" }}
          className="p-1"
          alt="Instagram Icon"
        ></img>
      </div>
    </div>
  );
};
