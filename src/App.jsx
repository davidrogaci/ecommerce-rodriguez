import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
