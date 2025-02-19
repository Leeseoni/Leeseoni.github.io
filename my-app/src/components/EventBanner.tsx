import React from "react";
import styles from "../assets/styles/components/_EventBanner.module.scss";

export const EventBanner: React.FC = () => {
  return (
    <div className={styles.bar_banner}>
      <p>
        다신사현대카드&nbsp; <strong>최대 4만원 즉시할인</strong>
      </p>
    </div>
  );
};
