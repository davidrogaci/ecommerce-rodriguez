import { Button } from "@mui/material";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Button variant="contained" onClick={restar}>
        -
      </Button>
      <h2> {contador} </h2>
      <Button variant="contained" onClick={sumar}>
        +
      </Button>

      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};
