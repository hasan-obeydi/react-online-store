import ColorOption from "./ColorOption";

const ProductColors = () => {
  return (
    <div>
      <span className="text-xs text-style font-bold">رنگ بندی:</span>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {Array.from({ length: 5 }).map((color) => (
          <ColorOption key={color} color="#000" />
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
