import BottomBar from "../../components/template/Product/BottomBar/BottomBar";
import Comments from "../../components/template/Product/Comments/Comments";
import Description from "../../components/template/Product/Description/Description";
import HeroSection from "../../components/template/Product/HeroSection/HeroSection";
import RelatedProducts from "../../components/template/Product/RelatedProducts/RelatedProducts";
import Sidebar from "../../components/template/Product/SideBar/Sidebar";

const ProductPage = () => {
  return (
    <>
      <main className="w-[95%] mx-auto mt-10 grid grid-cols-8 gap-4">
        <section className="col-span-8 lg:col-span-6 space-y-4">
          <HeroSection />
          <Description />
          <RelatedProducts />
          <Comments />
        </section>
        <Sidebar />
      </main>
      <BottomBar />
    </>
  );
};

export default ProductPage;
