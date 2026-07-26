import { FiHome } from "react-icons/fi";
import { IoBookOutline, IoCallOutline } from "react-icons/io5";
import { VscThinking } from "react-icons/vsc";

const menus = [
  { id: crypto.randomUUID(), title: "خانه", icon: FiHome, href: "/" },
  {
    id: crypto.randomUUID(),
    title: "مقالات",
    icon: IoBookOutline,
    href: "/blog",
  },
  {
    id: crypto.randomUUID(),
    title: "درباره ما",
    icon: VscThinking,
    href: "/about-us",
  },
  {
    id: crypto.randomUUID(),
    title: "تماس با ما",
    icon: IoCallOutline,
    href: "/contact-us",
  },
];

export default menus;
