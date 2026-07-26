import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

const MenuHeader = ({ title, setIsMenuOpen }) => {
  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="flex-between primary-border-b">
      <Link onClick={closeMenuHandler} to="/" className="text-lg font-bold">
        {title}
      </Link>
      <div onClick={closeMenuHandler} className="hover-style hover:scale-90">
        <IoClose className="text-3xl" />
      </div>
    </div>
  );
};

export default MenuHeader;
