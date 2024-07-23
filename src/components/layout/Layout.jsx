// import { Outlet } from "react-router-dom";
// import { Navbar } from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <div style={{ minHeight: "100vh" }}>
//         <Outlet />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Layout;

import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
