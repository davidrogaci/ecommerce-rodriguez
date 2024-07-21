import { useState } from "react";
import { Counter } from "./Counter";
import { toast } from "sonner";

const CounterContainer = ({ onAdd, stock, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      toast.error(`NO HAY MAS!`);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      toast.error(`MINIMO!`);
    }
  };
  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
