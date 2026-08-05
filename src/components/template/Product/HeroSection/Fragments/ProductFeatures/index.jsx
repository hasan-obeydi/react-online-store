import Option from "./Option";

const ProductFeaturs = () => {
  return (
    <div>
      <span className="text-xs text-style font-bold">ویژگی ها:</span>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {Array.from({ length: 5 }).map(() => (
          <Option />
        ))}
      </div>
    </div>
  );
};

export default ProductFeaturs;
