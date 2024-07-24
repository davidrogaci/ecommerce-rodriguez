import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      let productsCollection = collection(db, "products");
      let consulta = name
        ? query(productsCollection, where("category", "==", name))
        : productsCollection;

      try {
        const res = await getDocs(consulta);
        const arrayValido = res.docs.map((product) => ({
          ...product.data(),
          id: product.id,
        }));
        setItems(arrayValido);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [name]);

  const SkeletonLoader = () => (
    <Box>
      <Skeleton variant="rectangular" width={250} height={100} />
      <Skeleton variant="text" width={150} height={60} />
      <Skeleton variant="text" width={150} height={50} />
      <Skeleton variant="rectangular" width={100} height={50} />
    </Box>
  );

  if (loading) {
    return (
      <div className="ItemListPreLoad">
        {Array(18)
          .fill()
          .map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
      </div>
    );
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
