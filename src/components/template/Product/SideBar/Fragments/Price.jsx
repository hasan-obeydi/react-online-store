const Price = () => {
  return (
    <div className="flex mt-6 gap-1 justify-end">
      <span className="font-bold">
        {Number(1230000).toLocaleString("fa-IR")}
      </span>
      <span className="">تومان</span>
    </div>
  );
};

export default Price;
