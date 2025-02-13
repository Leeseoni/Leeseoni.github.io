import { useState } from "react";
import styles from "../assets/styles/pages/_HonyTip.module.scss";
import TipContents from "../components/TipContents";

const TipList = (props: { 전달: any[] }) => {
  // console.log(전달);

  const [tip2] = useState(props.전달);

  // const product: number = props.전달.find((x) => {
  //   console.log(product);
  //   return x.id;
  // });

  useState();

  return (
    <div>
      <div className="title">
        <p>아파트 입주 꿀팁</p>
        <span>모두 보기</span>
      </div>
      <ul className={styles.tip_list}>
        {/* <li>{props.전달[0].title} </li> */}
        {props.전달.map((_a: any, i: number) => {
          return <TipContents key={i} 전달={tip2[i]} />;
        })}
      </ul>
    </div>
  );
};
export default TipList;
