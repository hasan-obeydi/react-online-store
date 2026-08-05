import Price from "../SideBar/Fragments/Price";
import AddToCart from "./Fragments/AddToCart";

const BottomBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full primary-border-t bg-gray-100 dark:bg-dark-body">
      <div className="container py-2 flex-between items-center gap-2">
        <AddToCart />
        <Price />
      </div>
    </div>
  );
};

export default BottomBar;
