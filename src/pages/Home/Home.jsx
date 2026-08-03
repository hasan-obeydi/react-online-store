import BestSelling from "../../components/template/Home/BestSelling/BestSelling";
import HeroSection from "../../components/template/Home/HeroSection/HeroSection";
import LastProducts from "../../components/template/Home/LastProducts/LastProducts";
import SEO from "../../components/template/Home/SEO-Section/SEO";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BestSelling />
      <LastProducts />
      <SEO />
    </div>
  );
};

export default Home;
