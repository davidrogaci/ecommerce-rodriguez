import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { CartContext } from "../../context/CartContext";
import { ProductCart } from "../../components/productCart/ProductCart";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  const total = getTotalPrice();
  const isCartEmpty = cart.length === 0;

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Seguro quieres eliminar?",
      showDenyButton: true,
      confirmButtonText: "Sí, borrar",
      denyButtonText: "No, no borrar",
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
              className="deleteButton"
              style={{ backgroundColor: "red" }}
            >
              Eliminar
            </Button>
          </div>
        ))}
      </div>
      <div className="cartSummary">
        {isCartEmpty ? (
          <h2>No has agregado artículos a tu carrito.</h2>
        ) : (
          <>
            <h2>EL TOTAL ES: ${total}</h2>
            <Button variant="outlined" onClick={clearCart}>
              Limpiar carrito
            </Button>
          </>
        )}
        <Link to={isCartEmpty ? "#" : "/checkout"} className="link">
          <Button
            variant="contained"
            style={{ backgroundColor: isCartEmpty ? "" : "green" }}
            disabled={isCartEmpty}
          >
            Finalizar compra
          </Button>
        </Link>
        <Link to="/" className="link">
          <Button variant="contained">Seguir comprando</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
