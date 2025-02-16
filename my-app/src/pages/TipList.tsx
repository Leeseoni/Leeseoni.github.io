import styles from "../assets/styles/pages/_HonyTip.module.scss";
import { Type } from "../module/type";
interface OwnProps {
  tip: Type;
}
const TipList: React.FC<OwnProps> = (props) => {
  return (
    <div>
      <div className="title">
        <p>아파트 입주 꿀팁</p>
        <span>모두 보기</span>
      </div>
      <ul className={styles.tip_list}>
        {/* <li>{props.전달[0].title} </li> */}
        {props.tip.map((a: any, i) => {
          return <li key={i}>{props.tip[i].title}</li>;
        })}
      </ul>
    </div>
  );
};
export default TipList;
