import HeroSection from "../../components/template/Product/HeroSection/HeroSection";
import Sidebar from "../../components/template/Product/SideBar/Sidebar";

const ProductPage = () => {
  return (
    <main className="container mt-10 flex">
      <div>
        <HeroSection />
      </div>
      <Sidebar />
    </main>
  );
};

export default ProductPage;
