import BoxTitle from "../../../common/BoxTitle/BoxTitle";
import SwiperProducts from "./Fragments/SwiperProdutcs";

const RelatedProducts = () => {
  return (
    <div className="box-style mt-8">
      <BoxTitle title={"محصولات مرتبط"} />
      <SwiperProducts />
    </div>
  );
};

export default RelatedProducts;
