import CartButton from "./Fragments/CartButton";
import ThemeIcon from "./Fragments/ThemeIcon";
import LoginButton from "./Fragments/LoginButton";

const Buttons = () => {
  return (
    <div className="flex-itc gap-2">
      <ThemeIcon />
      <CartButton />
      <LoginButton />
    </div>
  );
};

export default Buttons;
