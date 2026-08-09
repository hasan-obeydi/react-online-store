import BoxTitle from "../../../common/BoxTitle/BoxTitle";
import SwiperProducts from "./Fragments/SwiperProdutcs";

const RelatedProducts = () => {
  return (
    <div className="pt-5" id="realted-products">
      <section className="section-style">
        <BoxTitle title={"محصولات مرتبط"} />
        <SwiperProducts />
      </section>
    </div>
  );
};

export default RelatedProducts;
