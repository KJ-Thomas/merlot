import React from "react";

const findSubInfo = ({ data }) => {
  return (
    <div class="sub-info-card">
      <h2 class="title">上次更新</h2>
      <div class="count">{data[1]}个</div>
      <div class="time">于{data[0]}</div>
    </div>
  );
};

export default findSubInfo;
