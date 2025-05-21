import React from "react";
// import { Routes, Route, Link, useNavigate } from "react-router-dom";
import styles from "../assets/styles/components/_Header.module.scss";

export const Header: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <header className={styles.header}>
      {/* <h1 className={styles.header__logo}>logo</h1> */}
      <div className={styles.header__btn__back}>뒤로가기</div>
      <h2 className={styles.header__title}>서울센트럴파크케슬</h2>
      <div
        className={styles.header__btn__menu}
        onClick={() => {
          // navigate("/SelectAPT");
        }}>
        메뉴
      </div>
    </header>
  );
};
