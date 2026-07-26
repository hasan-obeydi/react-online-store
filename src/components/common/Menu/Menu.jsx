import OverLay from "../OverLay/OverLay";
import MenuHeader from "./Fragments/MenuHeader";
import MenusLinks from "./Fragments/MenusLinks";

const Menu = ({ title, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <aside
        className={
          isMenuOpen
            ? "fixed md:hidden right-0 top-0 h-screen w-[90%] max-w-70 bg-[#FAFAFA] dark:bg-primary-dark primary-border-l shadow z-10 *:py-3 *:px-4"
            : "hidden"
        }
      >
        <MenuHeader title={title} setIsMenuOpen={setIsMenuOpen} />
        <MenusLinks setIsMenuOpen={setIsMenuOpen} />
      </aside>
      <OverLay state={isMenuOpen} setState={setIsMenuOpen} />
    </>
  );
};

export default Menu;
