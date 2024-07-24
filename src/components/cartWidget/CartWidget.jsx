import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const total = getTotalItems();

  return (
    <Link to="/cart" className="cartWidget">
      <Badge badgeContent={total} color="primary" showZero>
        <ShoppingCartIcon className="cartIcon" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
