import AddToCart from "./Fragments/AddToCart";
import Price from "./Fragments/Price";
import MiniProduct from "./Fragments/MiniProduct";
import Consulting from "./Fragments/Consulting";

const Sidebar = () => {
  return (
    <div className="sticky col-span-2 primary-border hidden lg:block box-style bg-white h-fit dark:bg-primary-dark space-y-4">
      <MiniProduct />
      <Price />
      <AddToCart />
      <Consulting />
    </div>
  );
};

export default Sidebar;
