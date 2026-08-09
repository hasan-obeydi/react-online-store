const Tooltip = ({ children, text }) => {
  return (
    <div className="group relative">
      <div className="invisible absolute -top-9 z-8 min-w-max opacity-0 group-hover:visible group-hover:opacity-100 duration-200 px-2 py-1 bg-zinc-700 rounded-lg text-white text-sm left-1/2 -translate-x-1/2">
        {text}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Tooltip;
