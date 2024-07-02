import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
