import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import useLocalStorage from "../../../../../../lib/hooks/useLocalStorage";
import { useEffect } from "react";

const ThemeIcon = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  return (
    <div onClick={changeTheme} className="hover-style rounded-full!">
      {theme === "light" ? (
        <MdOutlineDarkMode className="text-2xl" />
      ) : (
        <MdOutlineLightMode className="text-2xl" />
      )}
    </div>
  );
};

export default ThemeIcon;
