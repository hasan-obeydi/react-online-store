import ProductCard from "../../../common/ProductCard/ProductCard";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";
import products from "../../../../lib/products";

const LastProducts = () => {
  return (
    <section className="container mt-6 md:px-3">
      <SectionTitle title="آخرین محصولات" />
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6 gap-2">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default LastProducts;
