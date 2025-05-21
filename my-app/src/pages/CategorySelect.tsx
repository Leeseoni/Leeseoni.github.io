import React from "react";
import { RangkingList } from "../pages/RangkingList";
import benefitList from "../data/benefit.json";
import rangking from "../data/rangkin.json";

export const CategorySelect: React.FC = () => {
  const title1 = "AI 혜택순위";
  const title2 = "가장 많이 노출 되었어요";

  return (
    <>
      <section>
        <RangkingList benefit={benefitList} title={title1} />
        <RangkingList benefit={rangking} title={title2} />
      </section>
    </>
  );
};
