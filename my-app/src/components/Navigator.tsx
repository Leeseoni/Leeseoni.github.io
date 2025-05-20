import React from "react";
import styles from "../assets/styles/components/_MainNavigation.module.scss";

export const Navigator: React.FC = () => {
  return (
    <div className={styles.navTabWrap}>
      <ul className={styles.navTabWrap__menu}>
        <li>
          <div className={styles.Icon_1}>
            <span>내아파통</span>
          </div>
        </li>
        <li>
          <div className={styles.Icon_2__on}>
            <span>지도</span>
          </div>
        </li>
        <li>
          <div className={styles.Icon_3}>
            <span>카테고리</span>
          </div>
        </li>
        <li>
          <div className={styles.Icon_4}>
            <span>마이</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
