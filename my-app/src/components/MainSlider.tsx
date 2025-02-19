import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "../assets/styles/components/_MainSlide.module.scss";

export const MainSlider: React.FC = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={styles.mySwiper}>
      <SwiperSlide>
        <div className={styles.slide_info}>
          <p>우리 백화점 잠실점</p>
          <span>입주자 대상 가전제품 20% 할인</span>
          <small>행사기간 : 2024.02.02 ~ 05.01</small>
        </div>
        <img src="https://raw.githubusercontent.com/Leeseoni/Leeseoni.github.io/refs/heads/main/img/visual01.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slide_info}>
          <p>우리 백화점 잠실점</p>
          <span>입주자 대상 가전제품 20% 할인</span>
          <small>행사기간 : 2024.02.02 ~ 05.01</small>
        </div>
        <img src="https://raw.githubusercontent.com/Leeseoni/Leeseoni.github.io/refs/heads/main/img/visual02.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slide_info}>
          <p>우리 백화점 잠실점</p>
          <span>입주자 대상 가전제품 20% 할인</span>
          <small>행사기간 : 2024.02.02 ~ 05.01</small>
        </div>
        <img src="https://raw.githubusercontent.com/Leeseoni/Leeseoni.github.io/refs/heads/main/img/visual03.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
