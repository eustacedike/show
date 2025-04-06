import ReactDOM from "react-dom/client";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";



function Layout() {

  const location = useLocation();

  return (
    <div className="Layout">
      
      {location.pathname !== "/login" ? <Header/> : null}
      {location.pathname !== "/login" ? <Sidebar/> : null}
      {/* <Header/>
      <Sidebar /> */}
      <Outlet />
      {location.pathname !== "/login" ? <Footer/> : null}
      {/* <Footer/> */}
    </div>
  );
}

export default Layout;