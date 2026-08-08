import { FaShoppingCart } from "react-icons/fa";
import Actions from "./Actions";

const EmptyCart = () => {
  return (
    <div className="box-style mt-8 py-20!">
      <div className="flex-center">
        <div className="text-center">
          <FaShoppingCart className="text-7xl mx-auto" />
          <div className="mt-8 space-y-2">
            <h4 className="text-lg font-bold">سبد خرید شما خالی است</h4>
            <p className="text-sm text-style">می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید</p>
          </div>
          <Actions />
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
