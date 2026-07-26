import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router";

const CartButton = () => {
  return (
    <Link to='cart' className="p-2 cursor-pointer primary-border rounded-lg hover-style">
      <MdOutlineShoppingCart className="text-2xl" />
    </Link>
  );
};

export default CartButton;
