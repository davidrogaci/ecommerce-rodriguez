// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./pages/itemListContanier/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a la Tienda!"} />
    </div>
  );
}

export default App;
