import { Outlet } from "react-router";
import Topbar from "../common/Topbar/Topbar";
import Footer from "../common/Footer/Footer";

const AppLayout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
