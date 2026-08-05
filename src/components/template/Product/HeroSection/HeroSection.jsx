import ProductColors from "./Fragments/ProductColors/ProductColors";
import ProductFeaturs from "./Fragments/ProductFeatures";
import ProductImage from "./Fragments/ProductImage/ProductImage";
import ProductTitle from "./Fragments/ProductTitle/ProductTitle";

const HeroSection = () => {
  return (
    <div className="box-style p-8! grid grid-cols-8 gap-4">
      <ProductImage />
      <div className="mt-2 space-y-4 col-span-8 md:col-span-5">
        <ProductTitle />
        <ProductColors />
        <ProductFeaturs />
      </div>
    </div>
  );
};

export default HeroSection;
