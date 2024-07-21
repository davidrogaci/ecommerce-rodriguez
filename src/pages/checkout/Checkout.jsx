import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
// import { products } from "../../products";

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  let total = getTotalPrice();
  const envioDeFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total,
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((res) => setOrderId(res.id));

    let productsCollection = collection(db, "products");

    cart.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
    clearCart();
  };

  const capturarData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>FINALIZAR LA COMPRA:</h1>
      {orderId ? (
        <h2>ORDEN DE COMPRA: {orderId}</h2>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturarData}
            name="nombre"
            autoComplete="on"
          />
          <input
            type="email"
            placeholder="Ingresa tu email"
            name="email"
            onChange={capturarData}
            autoComplete="on"
          />
          <input
            type="text"
            placeholder="Ingresa tu telefono"
            name="telefono"
            onChange={capturarData}
            autoComplete="on"
          />

          <button>REGISTRAR</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
