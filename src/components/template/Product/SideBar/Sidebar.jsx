import AddToCart from "./Fragments/AddToCart";
import Price from "./Fragments/Price";
import MiniProduct from "./Fragments/MiniProduct";
import Consulting from "./Fragments/Consulting";

const Sidebar = () => {
  return (
    <div className="fixed left-[6%] primary-border hidden md:block w-70 box-style bg-white dark:bg-primary-dark">
      <MiniProduct />
      <Price />
      <AddToCart />
      <Consulting />
    </div>
  );
};

export default Sidebar;
