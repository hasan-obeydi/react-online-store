const CartHeader = ({ count = 0 }) => {
  return (
    <div className="flex-between">
      <h3 className="text-2xl font-bold">سبد خرید شما</h3>
      <span>{count} محصول</span>
    </div>
  );
};

export default CartHeader;
