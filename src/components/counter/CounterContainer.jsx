import { useState } from "react";
import { Counter } from "./Counter";
import { toast } from "sonner";

const CounterContainer = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      toast.error(`No hay más stock disponible.`);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      toast.error(`Cantidad mínima alcanzada.`);
    }
  };

  return (
    <Counter
      count={count}
      increment={increment}
      decrement={decrement}
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;
