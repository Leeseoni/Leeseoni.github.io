import { useState } from "react";
import { Type } from "./module/Type";
import { RangkingType } from "./module/Type";
import Header from "./components/Header";
import { TipList } from "./pages/TipList";
import { RangkingList } from "./pages/RangkingList";
import data from "./data/data.json";
import benefitList from "./data/benefit.json";
import rangking from "./data/rangkin.json";
import "./assets/index.css";

const App: React.FC = () => {
  // const [name] = useState(["구라댕씨를", "몰아내자", "타도구라댕"]);

  const [tip] = useState<Type>(data);
  const [benefit] = useState<RangkingType>(benefitList);
  const [rangkin] = useState<RangkingType>(rangking);

  let title1: string = "AI 혜택순위";
  let title2: string = "가장 많이 노출 되었어요";

  return (
    <div className="full-wrap">
      <Header />

      <section>메인 슬라이드</section>
      <section>
        <TipList tip={tip} />
      </section>
      <section className="item_list">
        <RangkingList benefit={benefit} title={title1} />
        <RangkingList benefit={rangkin} title={title2} />
      </section>
    </div>
  );
};

export default App;
