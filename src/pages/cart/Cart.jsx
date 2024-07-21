import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { ProductCart } from "../../components/productCard/ProductCart";
import { toast } from "sonner";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Seguro quieres eliminar?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, borrar",
      denyButtonText: `No, no borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        toast.error("Eliminado", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        toast.success("No se elimino", "", "info");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        margin: "30px",
      }}
    >
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <ProductCart
              key={elemento.id}
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
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          border: "3px solid blue",
          borderRadius: "5px",
          gap: "10px",
          backgroundColor: "white",
        }}
      >
        <h2 className={cart.length > 0 ? "title" : "ocultar"}>
          EL TOTAL ES: ${total}
        </h2>
        {cart.length > 0 && (
          <Button variant="outlined" onClick={clearCart}>
            Limpiar carrito{" "}
          </Button>
        )}

        <Link to="/checkout">
          <Button
            variant="contained"
            style={{
              backgroundColor: cart.length > 0 ? "blue" : "red",
            }}
          >
            Finalizar compra
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
