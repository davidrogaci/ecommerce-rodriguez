import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h2 className="brandLogo">KICKSTREET</h2>
      <ul className="navbarNav">
        <li>Runnig</li>
        <li>Sneakers</li>
        <li>Basketball</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
