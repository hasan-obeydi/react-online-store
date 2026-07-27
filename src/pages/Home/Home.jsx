import BestSelling from "../../template/Home/BestSelling/BestSelling";
import HeroSection from "../../template/Home/HeroSection/HeroSection";
import LastProducts from "../../template/Home/LastProducts/LastProducts";
import SEO from "../../template/Home/SEO-Section/SEO";

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
