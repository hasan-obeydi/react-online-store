import { Outlet } from "react-router";
import Topbar from "../common/Topbar/Topbar";

const AppLayout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
