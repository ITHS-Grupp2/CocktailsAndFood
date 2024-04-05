import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="w-100">
      <Link to="/">
        <h1>Cocktails & Food</h1>
      </Link>
    </div>
  );
};
