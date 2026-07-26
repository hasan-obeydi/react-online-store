const OverLay = ({ state, setState }) => {
  const closeMenuHandler = () => {
    setState(false);
  };
  return (
    <div
      onClick={closeMenuHandler}
      className={
        state
          ? "bg-zinc-900/50 w-screen h-screen fixed top-0 left-0 z-9 md:hidden"
          : "hidden"
      }
    ></div>
  );
};

export default OverLay;
