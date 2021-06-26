import React from "react";

const ProUpdateCard = ({ proWait, searchProWait, savePro, loadPro }) => {
  return (
    <div class="pro-update-card">
      <h2 class="title">待筛内容</h2>
      <p class="text">
        {proWait.expert}：{proWait.text}
      </p>
      <a class="link" href={proWait.link} target="_blank">
        原文链接
      </a>
      <button
        class="save"
        onClick={() => {
          savePro();
          searchProWait();
          loadPro();
        }}
      >
        加入
      </button>
      <button class="drop" onClick={searchProWait}>
        舍弃
      </button>
    </div>
  );
};

export default ProUpdateCard;
