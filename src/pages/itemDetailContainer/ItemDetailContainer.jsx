import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const initial = getQuantityById(id);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const productsCollection = collection(db, "products");
        const refDoc = doc(productsCollection, id);
        const res = await getDoc(refDoc);
        setItem({ ...res.data(), id: res.id });
      } catch (error) {
        toast.error("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const onAdd = (quantity) => {
    const objetoFinal = { ...item, quantity };
    addToCart(objetoFinal);
    toast.success("Producto Agregado");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;
