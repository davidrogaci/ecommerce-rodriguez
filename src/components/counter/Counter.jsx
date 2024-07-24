import { Button } from "@mui/material";
import "./Counter.css";

export const Counter = ({ decrement, count, increment, onAdd }) => {
  return (
    <div className="counter-container">
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <h2> {count} </h2>
      <Button variant="contained" onClick={increment}>
        +
      </Button>
      <Button variant="outlined" onClick={() => onAdd(count)}>
        Agregar al carrito
      </Button>
    </div>
  );
};
