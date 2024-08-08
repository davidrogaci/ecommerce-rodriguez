import React from "react";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Counter.css";

export const Counter = ({ decrement, count, increment, onAdd }) => {
  return (
    <div className="counter-container">
      <IconButton
        className="decrement-button"
        variant="contained"
        size="small"
        onClick={decrement}
      >
        <RemoveIcon />
      </IconButton>
      <h2> {count} </h2>
      <IconButton
        className="increment-button"
        variant="contained"
        size="small"
        onClick={increment}
      >
        <AddIcon />
      </IconButton>
      <Button variant="outlined" onClick={() => onAdd(count)}>
        Agregar al carrito
      </Button>
    </div>
  );
};
