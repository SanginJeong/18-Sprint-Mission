import { Outlet, useLocation } from "react-router";
import ItemsNavbar from "../common/ItemsNavbar";
import { MAIN_NAVBAR_ROUTES } from "../constants/MAIN_NAVBAR_ROUTES";
import MainNavbar from "../common/MainNavbar";

const Layout = () => {
  const params = useLocation();
  const { pathname } = params;
  const isMainRoute = MAIN_NAVBAR_ROUTES.some((url) => url === pathname);

  return (
    <>
      {isMainRoute ? <MainNavbar /> : <ItemsNavbar />}
      <div className="wrap">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
