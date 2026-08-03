import clsx from "clsx";

const Icon = ({ icon, color }) => {
  return (
    <a
      href="/"
      className={clsx(
        `p-2 rounded-lg border border-gray-700 text-xl text-gray-400 duration-200`,
        color === "green" && "hover:bg-[#25D366] hover:text-white",
        color === "blue" && "hover:bg-[#24A1DE] hover:text-white",
        color === "pink" && "hover:bg-[#E4405F] hover:text-white",
      )}
    >
      {icon}
    </a>
  );
};

export default Icon;
