import React, { useState } from "react";
import styles from "../assets/styles/components/_Input.module.scss";

export const Input: React.FC = () => {
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <div className={`${styles.main_input} ${styles.search}`}>
      <input
        type="text"
        name="search"
        onFocus={() => {
          setInputFocused(true);
        }}
        onBlur={() => {
          setInputFocused(false);
        }}
        placeholder={isInputFocused === true ? "" : "망구리님 검색어를 입력해주세요!! 제발"}
      />
    </div>
  );
};
