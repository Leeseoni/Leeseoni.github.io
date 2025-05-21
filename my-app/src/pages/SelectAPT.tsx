import React from "react";
import styles from "../assets/styles/pages/_SelectAPT.module.scss";

export const SelectAPT: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__board}>
        <div className="item">
          <div className="title">
            <p>입주아파트 선택하기</p>
            <span>모두 보기</span>
          </div>
        </div>
      </div>
    </div>
  );
};
