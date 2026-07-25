import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      {/* <Topbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
