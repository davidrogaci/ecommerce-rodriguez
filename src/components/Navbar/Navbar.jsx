import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navbarContainer">
          <Link className="brandLogo" to="/">
            KICKSTREET
          </Link>
          <ul className="navbarNav">
            <Link to="/category/runnig">Runnig</Link>
            <Link to="/category/sneakers">Sneakers</Link>
            <Link to="/category/basketball">Basketball</Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
