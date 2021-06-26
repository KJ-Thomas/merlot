import React from "react";

const ProInfoCard = ({ data }) => {
  return (
    <div class="pro-info-card">
      <h2 class="title">上次更新</h2>
      <div class="count">{data[1]}条</div>
      <div class="time">于{data[0]}</div>
    </div>
  );
};

export default ProInfoCard;
