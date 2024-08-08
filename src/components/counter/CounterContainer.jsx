import { useState, useEffect } from "react";
import { Counter } from "./Counter";
import { toast } from "sonner";

const CounterContainer = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    if (initial < 1) {
      setCount(1);
    }
  }, [initial]);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      toast.error("No hay más stock disponible.");
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      toast.error("Cantidad mínima alcanzada.");
    }
  };

  const handleAdd = () => {
    if (count >= 1) {
      onAdd(count);
    } else {
      toast.error("Debe agregar al menos una unidad.");
    }
  };

  return (
    <Counter
      count={count}
      increment={increment}
      decrement={decrement}
      onAdd={handleAdd}
    />
  );
};

export default CounterContainer;
