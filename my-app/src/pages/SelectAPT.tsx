import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/pages/_SelectAPT.module.scss";

export const SelectAPT: React.FC = () => {
  const navigate = useNavigate();

  let [fade, setFade] = useState("");
  useEffect(() => {
    setFade("ani");
    return () => {
      setFade("");
    };
  }, []);

  return (
    <div className={styles.modal + ` ${fade}`}>
      <div className={styles.modal__board}>
        <div className="item">
          <div className="title">
            <p>입주아파트 선택하기</p>
            <span className="arrow" onClick={() => navigate(-1)}>
              숨기기
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
