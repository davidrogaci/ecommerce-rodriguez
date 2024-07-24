import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <Link className="brandLogo" to="/">
        KickStreet
      </Link>
      <ul className="navbarNav">
        <li>
          <Link to="/category/running">Running</Link>
        </li>
        <li>
          <Link to="/category/sneakers">Sneakers</Link>
        </li>
        <li>
          <Link to="/category/basketball">Basketball</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};
