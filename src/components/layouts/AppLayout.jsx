import { Outlet } from "react-router";
import Topbar from "../common/Topbar/Topbar";
import Footer from "../common/Footer/Footer";

const AppLayout = () => {
  return (
    <>
      <Topbar />
      <div className="pt-16 md:pt-0">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
