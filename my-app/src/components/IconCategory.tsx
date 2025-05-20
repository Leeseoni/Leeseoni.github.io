import React from "react";
import styles from "../assets/styles/components/_IconCategory.module.scss";

export const IconCategory: React.FC = () => {
  return (
    <nav>
      <ul className={styles.category}>
        <li>
          <button className={styles.business_1}>부동산</button>
        </li>
        <li>
          <button className={styles.business_2}>가구</button>
        </li>
        <li>
          <button className={styles.business_3}>가전</button>
        </li>
        <li>
          <button className={styles.business_4}>커튼</button>
        </li>
        <li>
          <button className={styles.business_5}>IOT</button>
        </li>
        <li>
          <button className={styles.business_6}>이사</button>
        </li>
        <li>
          <button className={styles.business_7}>줄눈</button>
        </li>
        <li>
          <button className={styles.business_8}>인테리어</button>
        </li>
        <li>
          <button className={styles.business_9}>청소</button>
        </li>
        <li>
          <button className={styles.business_10}>기타</button>
        </li>
      </ul>
    </nav>
  );
};
