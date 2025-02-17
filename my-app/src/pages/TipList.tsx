// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "../assets/styles/pages/_HonyTip.module.scss";
import { Type } from "../module/Type";
interface OwnProps {
  tip: Type;
}
export const TipList: React.FC<OwnProps> = (props) => {
  return (
    <div>
      <div className="title">
        <p>아파트 입주 꿀팁</p>
        <span>모두 보기</span>
      </div>
      <ul className={styles.tip_list}>
        {/* <li>{props.전달[0].title} </li> */}
        {props.tip.map((_a: any, i) => i <= 4 && <li key={i}>{props.tip[i].title} </li>)}
        {/* {props.tip.map((a: any, i) => {
          console.log(a);
          return <li key={i}>{props.tip[i].title}</li>;
        })} */}
      </ul>
    </div>
  );
};
