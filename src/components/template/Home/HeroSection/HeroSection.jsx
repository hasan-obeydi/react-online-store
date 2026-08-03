import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <>
      <section className="h-35 sm:h-55 md:h-65 lg:h-75">
        <Swiper
          pagination
          loop
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          className="mySwiper size-full"
        >
          <SwiperSlide>
            <Link to="/">
              <img className="object-cover size-full" src="/assets/banner1.png" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <img className="object-cover size-full" src="/assets/banner2.png" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HeroSection;
