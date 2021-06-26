import React from "react";
import ProTable from "./ProTable";

const ProShowData = ({ data }) => {
  return (
    <div class="pro-show-card">
      <h2 class="title">素材库</h2>
      <ProTable data={data} />
      <a class="more" href="/prolibrary/xinjiang">
        查看更多
      </a>
    </div>
  );
};

export default ProShowData;
