import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/pages/_SelectAPT.module.scss";
import Img from "../components/Img";
import { BenefitType } from "../module/Type";

interface aptProps {
  aptList: BenefitType;
}

export const SelectAPT: React.FC<aptProps> = ({ aptList }) => {
  console.log(aptList);
  const navigate = useNavigate();

  // fade 애니메이션
  const [fade, setFade] = useState("");
  useEffect(() => {
    setFade("ani");
    return () => {
      setFade("");
    };
  }, []);

  // body 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
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

        <div className="capsule">
          <button className="on">입주일순</button>
          <button>사전점검일 순</button>
          <button>이름순</button>
        </div>

        <ul className={styles.apt_select}>
          {aptList.map((_a: any, i) => (
            <li>
              <Img src={aptList[i].image} className={styles.thumb_img2} alt={`입주아파트이미지`} />
              <ol className={styles.inner_txt}>
                <li>{aptList[i].title}</li>
                <li>{aptList[i].address}</li>
                <li>사전 점검일 : {aptList[i].inspectionDate}</li>
                <li>입주 예정일 : {aptList[i].moveInDate}</li>
              </ol>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
