import { useState } from "react";
import Buttons from "./Fragments/Buttons/Buttons";
import NavLinks from "./Fragments/NavLinks";
import MenuIcon from "./Fragments/MenuIcon";
import Title from "./Fragments/Title";
import Menu from "../Menu/Menu";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const title = "آنلاین شاپ";
  return (
    <>
      <div className="py-3 dark:bg-primary-dark primary-border-b dark:border-none">
        <div className="flex-between container">
          <MenuIcon setIsMenuOpen={setIsMenuOpen} />
          <Title title={title} />
          <NavLinks />
          <Buttons />
        </div>
      </div>
      <Menu
        title={title}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};

export default Topbar;
