import { useState } from "react";
import { Type } from "./module/type";
import Header from "./components/Header";
import TipList from "./pages/TipList";
import data from "./data/data.json";
import "./assets/index.css";

const App: React.FC = () => {
  // const [name] = useState(["구라댕씨를", "몰아내자", "타도구라댕"]);

  const [tip] = useState<Type>(data);
  // console.log(tip);
  return (
    <div className="full-wrap">
      <Header />
      <section>메인 슬라이드</section>
      <section>
        <TipList tip={tip}></TipList>
      </section>
    </div>
  );
};

export default App;
