import { DEFAULT_PRODUCT_IMAGE } from "../../../../../../lib/constants";

const ProductImage = () => {
  return (
    <div className="col-span-8 md:col-span-3 mx-auto">
      <img
        className=""
        src={DEFAULT_PRODUCT_IMAGE}
        alt="iPhone 17 Air"
      />
    </div>
  );
};

export default ProductImage;
