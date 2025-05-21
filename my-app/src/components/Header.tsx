import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "../assets/styles/components/_Header.module.scss";
import { SelectAPT } from "../pages/SelectAPT";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      {/* <h1 className={styles.header__logo}>logo</h1> */}
      <div className={styles.header__btn__back}>뒤로가기</div>
      <h2 className={styles.header__title}>서울센트럴파크케슬</h2>
      <div
        className={styles.header__btn__menu}
        onClick={() => {
          navigate("/pages/SelectAPT");
        }}>
        메뉴
      </div>

      <Routes>
        <Route path="/pages/SelectAPT" element={<SelectAPT />} />
      </Routes>
    </header>
  );
};
