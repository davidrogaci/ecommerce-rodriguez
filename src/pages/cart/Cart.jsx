import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { ProductCart } from "../../components/productCart/ProductCart";
import { toast } from "sonner";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  const total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Seguro quieres eliminar?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, borrar",
      denyButtonText: `No, no borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        toast.error("Eliminado");
        deleteProduct(id);
      } else if (result.isDenied) {
        toast.success("No se eliminó");
      }
    });
  };

  return (
    <div className="cartContainer">
      <div className="cartItems">
        {cart.map((elemento) => (
          <div key={elemento.id} className="cartItem">
            <ProductCart
              title={elemento.title}
              description={elemento.description}
              price={elemento.price}
              id={elemento.id}
              img={elemento.img}
            />
            <Button
              variant="contained"
              onClick={() => handleDelete(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        ))}
      </div>
      <div className="cartSummary">
        {cart.length > 0 ? (
          <>
            <h2>EL TOTAL ES: ${total}</h2>
            <Button variant="outlined" onClick={clearCart}>
              Limpiar carrito
            </Button>
          </>
        ) : (
          <h2>Tu carrito está vacío</h2>
        )}
        <Link to="/checkout">
          <Button
            variant="contained"
            style={{ backgroundColor: cart.length > 0 ? "blue" : "red" }}
          >
            Finalizar compra
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
