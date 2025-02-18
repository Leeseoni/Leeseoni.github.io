// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import styles from "../assets/styles/pages/_LinkList.module.scss";
import { RangkingType } from "../module/Type";

interface OwnProps {
  benefit: RangkingType;
  title: string;
}

export const RangkingList: React.FC<OwnProps> = (props) => {
  console.log(props);
  return (
    <div className="item">
      <div className="title">
        <p>{props.title}</p>
        <span>모두 보기</span>
      </div>
      <ul className={styles.ranking_list}>
        {props.benefit.map((_a: any, i) => (
          <li key={i}>
            <div>
              <img src={props.benefit[i].image} className={styles.thumb_img} alt="" />
              <div className={styles.inner_txt}>
                <p>{props.benefit[i].title}</p>
                <small>{props.benefit[i].address} </small>
                <span>{props.benefit[i].subtitle}</span>
              </div>
            </div>
            <div className={styles.average}>
              <span>{props.benefit[i].percent}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
