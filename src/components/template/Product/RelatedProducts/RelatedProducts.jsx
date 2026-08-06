import BoxTitle from "../../../common/BoxTitle/BoxTitle";
import SwiperProducts from "./Fragments/SwiperProdutcs";

const RelatedProducts = () => {
  return (
    <section className="box-style mt-8">
      <BoxTitle title={"محصولات مرتبط"} />
      <SwiperProducts />
    </section>
  );
};

export default RelatedProducts;
