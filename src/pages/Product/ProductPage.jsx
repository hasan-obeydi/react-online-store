import BottomBar from "../../components/template/Product/BottomBar/BottomBar";
import Description from "../../components/template/Product/Description/Description";
import HeroSection from "../../components/template/Product/HeroSection/HeroSection";
import Sidebar from "../../components/template/Product/SideBar/Sidebar";

const ProductPage = () => {
  return (
    <>
      <main className="w-[95%] mx-auto mt-10 grid grid-cols-8 gap-4">
        <section className="col-span-8 lg:col-span-6 *:dark:bg-primary-dark">
          <HeroSection />
          <Description />
        </section>
        <Sidebar />
      </main>
      <BottomBar />
    </>
  );
};

export default ProductPage;
