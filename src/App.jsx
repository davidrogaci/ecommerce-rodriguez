import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import Cart from "./pages/cart/Cart";
import CartContextProvider from "./context/CartContext";
import CheckoutFormik2 from "./pages/checkout2.0/Checkout2";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" duration={4000} />
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<CheckoutFormik2 />} />
          </Route>
          <Route path="*" element={<h1> 404 Not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
