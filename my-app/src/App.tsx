import { useState } from "react";
import { Type } from "./module/Type";
import { RangkingType } from "./module/Type";
import { Header } from "./components/Header";
import { TipList } from "./pages/TipList";
import { RangkingList } from "./pages/RangkingList";
import { EventBanner } from "./components/EventBanner";
import { MainSlider } from "./components/MainSlider";
import { BannerSlider } from "./components/BannerSlider";
import { Input } from "./components/Input";
import { IconCategory } from "./components/IconCategory";
import { Navigator } from "./components/Navigator";
// import { Button } from "@mui/material";

import data from "./data/data.json";
import benefitList from "./data/benefit.json";
import rangking from "./data/rangkin.json";
import "./assets/css/index.css";

const App: React.FC = () => {
  // const [name] = useState(["구라댕씨를", "몰아내자", "타도구라댕"]);

  const [tip] = useState<Type>(data);
  const [benefit] = useState<RangkingType>(benefitList);
  const [rangkin] = useState<RangkingType>(rangking);

  let title0: string = "아파트 입주 꿀팁";
  let title1: string = "AI 혜택순위";
  let title2: string = "가장 많이 노출 되었어요";

  return (
    <div className="full-wrap">
      <Header />
      <Input />

      <section>
        {/* Visual Swiper */}
        <MainSlider />
        <EventBanner />
      </section>

      <section>
        <IconCategory />
      </section>

      <section>
        <TipList tip={tip} title={title0} />
      </section>

      <section>
        {/* Banner Swiper */}
        <BannerSlider />
      </section>

      <section>
        <RangkingList benefit={benefit} title={title1} />
        <RangkingList benefit={rangkin} title={title2} />
      </section>
      <nav>
        <Navigator />
      </nav>
    </div>
  );
};

export default App;
