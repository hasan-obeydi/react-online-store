import { DEFAULT_PRODUCT_IMAGE } from "../../../../../lib/constants";

const MiniProduct = () => {
  return (
    <div className="flex-itc gap-4">
      <div className="w-25">
        <img className="size-full object-cover" src={DEFAULT_PRODUCT_IMAGE} />
      </div>
      <h3 className="text-sm line-clamp-2 font-semibold">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
      </h3>
    </div>
  );
};

export default MiniProduct;
