import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";
const ItemDetail = ({ item, onAdd }) => {
  return (
    <>
      <div>
        <div className={"containerItemDetail"}>
          <div className={"containerImage"}>
            <img src={item.img} alt="Zapas" />
          </div>

          <div className={"containerDetail"}>
            <h2>
              <span style={{ fontSize: "23px", color: "#003366" }}>
                Nombre:
              </span>{" "}
              {item.title}
            </h2>
            <h2>
              <span style={{ fontSize: "23px", color: "#003366" }}>
                Descripcion:
              </span>{" "}
              {item.description}
            </h2>
            <h2>
              <span style={{ fontSize: "23px", color: "#003366" }}>
                Precio:
              </span>{" "}
              ${item.price}.
            </h2>
          </div>
        </div>
        <CounterContainer onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemDetail;
