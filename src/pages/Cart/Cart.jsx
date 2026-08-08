import CartHeader from "../../components/template/Cart/CartHeader";
import EmptyCart from "../../components/template/Cart/EmptyCart/EmptyCart";

const Cart = () => {
  return (
    <main className="container mt-8 max-w-220!">
      <CartHeader />
      <EmptyCart />
    </main>
  );
};

export default Cart;
