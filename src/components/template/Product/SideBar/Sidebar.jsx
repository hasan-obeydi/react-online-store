import AddToCart from "./Fragments/AddToCart";
import Price from "./Fragments/Price";
import MiniProduct from "./Fragments/MiniProduct";
import Consulting from "./Fragments/Consulting";

const Sidebar = () => {
  return (
    <div className="sticky max-h-max col-span-2 primary-border hidden lg:block box-style bg-white dark:bg-primary-dark space-y-4 top-5">
      <MiniProduct />
      <Price />
      <AddToCart />
      <Consulting />
    </div>
  );
};

export default Sidebar;
