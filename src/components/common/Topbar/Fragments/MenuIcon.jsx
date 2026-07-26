import { IoMenu } from "react-icons/io5";

const MenuIcon = ({ setIsMenuOpen }) => {
  const OpenMenuHandler = () => {
    setIsMenuOpen(true);
  };
  return (
    <div
      onClick={OpenMenuHandler}
      className="hover-style hover:scale-90 md:hidden"
    >
      <IoMenu className="text-3xl" />
    </div>
  );
};

export default MenuIcon;
