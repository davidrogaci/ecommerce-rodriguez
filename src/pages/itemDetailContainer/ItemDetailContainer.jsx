import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const [item, setItem] = useState({});

  let initial = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    let getProducts = getDoc(refDoc);
    getProducts.then((res) => setItem({ ...res.data(), id: res.id }));
  }, [id]);

  const onAdd = (quantity) => {
    let objetoFinal = { ...item, quantity: quantity };
    addToCart(objetoFinal);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto Agregado",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;
