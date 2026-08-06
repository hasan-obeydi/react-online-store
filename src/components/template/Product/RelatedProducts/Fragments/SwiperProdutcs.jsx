// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../../../../../lib/products";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Product from "./Product";

const SwiperProducts = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper mt-6"
      >
        {products.map((product) => (
          <SwiperSlide>
            <Product key={product.id} {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperProducts;
