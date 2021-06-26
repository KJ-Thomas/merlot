import React from "react";

const GuideInfoCard = ({ data }) => {
  return (
    <div class="guide-info-card">
      <h2 class="title">上次引导</h2>
      <div class="count">{data[1]}条</div>
      <div class="time">于{data[0]}</div>
    </div>
  );
};

export default GuideInfoCard;
