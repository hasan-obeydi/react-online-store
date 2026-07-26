import { NavLink } from "react-router";
import clsx from "clsx";

import menus from "../../../../lib/navLinks";

const MenusLinks = ({ setIsMenuOpen }) => {
  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="mt-10">
      {" "}
      <ul className="flex-col space-y-2">
        {menus.map((menu) => (
          <NavLink
            onClick={closeMenuHandler}
            to={menu.href}
            key={menu.id}
            className={({ isActive }) =>
              clsx("flex-itc gap-2 hover-style", {
                "bg-gray-200 dark:bg-gray-700": isActive,
              })
            }
          >
            <menu.icon />
            <span>{menu.title}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default MenusLinks;
