// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../../../../../lib/products";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Product from "./Product";
import { Autoplay } from "swiper/modules";

const SwiperProducts = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView:4,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
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
