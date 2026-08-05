const ColorOption = ({  lable = "مشکی" }) => {
  return (
    <div className="box-style p-2! flex-itc gap-2 cursor-pointer">
      <div className="border primary-border bg-white dark:bg-gray-700 size-6 flex-center rounded">
        <div className={`bg-black size-4 rounded`}></div>
      </div>
      <div className="text-sm">{lable}</div>
    </div>
  );
};

export default ColorOption;
