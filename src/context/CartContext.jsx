import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        const newCart = [...prevCart];
        newCart[productIndex] = {
          ...newCart[productIndex],
          quantity: product.quantity,
        };
        return newCart;
      } else {
        return [...prevCart, product];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getQuantityById = (id) => {
    const product = cart.find((item) => item.id === id);
    return product?.quantity || 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        deleteProduct,
        getQuantityById,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
