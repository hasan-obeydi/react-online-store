import { NavLink } from "react-router";
import menus from "../../../../lib/navLinks";
import clsx from "clsx";

const NavLinks = () => {
  return (
    <ul className="hidden md:flex gap-1">
      {menus.map((menu) => (
        <NavLink
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
  );
};

export default NavLinks;
