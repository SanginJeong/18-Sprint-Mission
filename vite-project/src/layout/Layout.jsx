import { Outlet } from "react-router";
import ItemsNavbar from "../common/ItemsNavbar";

const Layout = () => {
  return (
    <>
      <ItemsNavbar />
      <div className="wrap">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
