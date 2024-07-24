import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "sonner";

const ItemListContainer = lazy(() =>
  import("./pages/itemListContainer/ItemListContainer")
);
const ItemDetailContainer = lazy(() =>
  import("./pages/itemDetailContainer/ItemDetailContainer")
);
const Cart = lazy(() => import("./pages/cart/Cart"));
const CheckoutV2 = lazy(() => import("./pages/checkoutV2/CheckoutV2"));

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" duration={5000} />
      <CartContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:name" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/checkout" element={<CheckoutV2 />} />
            </Route>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Suspense>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
