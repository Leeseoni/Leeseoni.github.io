import React from "react";
import styles from "../assets/styles/components/_Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* <h1 className={styles.header__logo}>logo</h1> */}
      <div className={styles.header__btn__back}>뒤로가기</div>
      <h2 className={styles.header__title}>서울센트럴파크케슬</h2>
      <div className={styles.header__btn__menu}>메뉴</div>
    </header>
  );
};
