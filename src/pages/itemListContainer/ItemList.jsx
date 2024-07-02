import { ProductCard } from "../../components/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div className="ItemListContainer">
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            title={elemento.title}
            description={elemento.description}
            price={elemento.price}
            id={elemento.id}
            img={elemento.img}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
