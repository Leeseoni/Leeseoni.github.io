// import { useState } from "react";
import Header from "./components/Header";
import TipList from "./pages/TipList";
import data from "./data/data.json";
import "./assets/index.css";
import { useState } from "react";

// const data = [
//   { id: 0, title: "dsldkfjsdf" },
//   { id: 1, title: "dsldkfjsdf" },
//   { id: 2, title: "dsldkfjsdf" },
// ];

interface list {
  id: number;
  title: string;
}

const App: React.FC = () => {
  // const [name] = useState(["구라댕씨를", "몰아내자", "타도구라댕"]);

  const [tip] = useState<list[]>(data);
  // console.log(tip);

  return (
    <div className="full-wrap">
      <Header />
      <section>메인 슬라이드</section>
      <section>
        <TipList 전달={tip}></TipList>
        {/* {tip.map((a, i) => {
          return <TipList 전달={tip} key={i} />;
        })} */}
      </section>
    </div>
  );
};

export default App;
