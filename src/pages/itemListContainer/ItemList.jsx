import { ProductCard } from "../../components/productCard/ProductCard";
import "./itemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="ItemListContainer">
      {items.map(({ id, title, description, price, img }) => (
        <ProductCard
          key={id}
          title={title}
          description={description}
          price={price}
          id={id}
          img={img}
        />
      ))}
    </div>
  );
};

export default ItemList;
