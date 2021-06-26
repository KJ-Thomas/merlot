import React from "react";
import SubTable from "./SubTable";

const findSubShow = ({ data }) => {
  return (
    <div class="sub-show-card">
      <h2 class="title">更新记录</h2>
      {data &&
        data.map(() => {
          return <SubTable data={data} />;
        })}
      <a class="more" href="/updatesubhistory/xinjiang">
        查看更多
      </a>
    </div>
  );
};

export default findSubShow;
