import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styles from "../assets/styles/components/_BannerSlide.module.scss";

export const BannerSlider: React.FC = () => {
  return (
    <Swiper
      centeredSlides={true}
      slidesPerView={1.4}
      slidesOffsetBefore={-40}
      spaceBetween={30}
      //
      modules={[Pagination, Navigation]}
      className={styles.mySwiper}>
      <SwiperSlide>
        <div>
          <img
            src="https://raw.githubusercontent.com/Leeseoni/Leeseoni.github.io/refs/heads/main/img/ex_img1.png"
            alt=""
          />
          <ol className={styles.inner_txt}>
            <li>LG전자 베스트샵</li>
            <li>신검단 중앙역 풍경채 어바니티</li>
            <li>공동구매 프로모션</li>
            <li>2024.02.23~12.02</li>
          </ol>
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/Leeseoni/Leeseoni.github.io/refs/heads/main/img/ex_img1.png"
            alt=""
          />
          <ol className={styles.inner_txt}>
            <li>LG전자 베스트샵</li>
            <li>신검단 중앙역 풍경채 어바니티</li>
            <li>공동구매 프로모션</li>
            <li>2024.02.23~12.02</li>
          </ol>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            src="https://raw.githubusercontent.com/Leeseoni/Leeseoni.github.io/refs/heads/main/img/ex_img1.png"
            alt=""
          />
          <ol className={styles.inner_txt}>
            <li>LG전자 베스트샵</li>
            <li>신검단 중앙역 풍경채 어바니티</li>
            <li>공동구매 프로모션</li>
            <li>2024.02.23~12.02</li>
          </ol>
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/Leeseoni/Leeseoni.github.io/refs/heads/main/img/ex_img1.png"
            alt=""
          />
          <ol className={styles.inner_txt}>
            <li>LG전자 베스트샵</li>
            <li>신검단 중앙역 풍경채 어바니티</li>
            <li>공동구매 프로모션</li>
            <li>2024.02.23~12.02</li>
          </ol>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            src="https://raw.githubusercontent.com/Leeseoni/Leeseoni.github.io/refs/heads/main/img/ex_img1.png"
            alt=""
          />
          <ol className={styles.inner_txt}>
            <li>LG전자 베스트샵</li>
            <li>신검단 중앙역 풍경채 어바니티</li>
            <li>공동구매 프로모션</li>
            <li>2024.02.23~12.02</li>
          </ol>
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/Leeseoni/Leeseoni.github.io/refs/heads/main/img/ex_img1.png"
            alt=""
          />
          <ol className={styles.inner_txt}>
            <li>LG전자 베스트샵</li>
            <li>신검단 중앙역 풍경채 어바니티</li>
            <li>공동구매 프로모션</li>
            <li>2024.02.23~12.02</li>
          </ol>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
