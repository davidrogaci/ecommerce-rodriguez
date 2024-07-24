import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div>
      <div className="containerItemDetail">
        <div className="containerImage">
          <img src={item.img} alt={item.title} />
        </div>

        <div className="containerDetail">
          <h2>
            <span className="itemDetailLabel">Nombre:</span> {item.title}
          </h2>
          <h2>
            <span className="itemDetailLabel">Descripción:</span>{" "}
            {item.description}
          </h2>
          <h2>
            <span className="itemDetailLabel">STOCK:</span> {item.stock}
          </h2>
          <h2>
            <span className="itemDetailLabel">Precio:</span> ${item.price}
          </h2>
        </div>
      </div>
      <CounterContainer onAdd={onAdd} stock={item.stock} initial={initial} />
    </div>
  );
};

export default ItemDetail;
