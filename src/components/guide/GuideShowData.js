import React from "react";
import GuideTable from "./GuideTable";

const GuideShowData = ({ data }) => {
  return (
    <div class="guide-show-card">
      <h2 class="title">引导历史</h2>
      {data &&
        data.map(() => {
          return <GuideTable data={data} />;
        })}
      <a class="more" href="/guidehistory/xinjiang">
        查看更多
      </a>
    </div>
  );
};

export default GuideShowData;
