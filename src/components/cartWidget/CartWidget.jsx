import { BsCart3 } from "react-icons/bs";
import "./cartwidget.css";
const CartWidget = () => {
  return (
    <div className="cartWidget">
      <BsCart3 color="black" size={25} />
    </div>
  );
};

export default CartWidget;
