import React from "react";

const findSubUpdate = ({ data, save, search, load }) => {
  return (
    <div class="sub-update-card">
      <h2 class="title">待筛子话题</h2>
      <div class="topic-name">{data.subtopic}</div>
      <div class="keywords">
        <div>关键词:</div>
        {data.keyword &&
          data.keyword.map((k) => {
            return <div>{k}</div>;
          })}
      </div>
      <button
        class="save"
        onClick={() => {
          save();
          search();
          load();
        }}
      >
        加入
      </button>
      <button class="drop" onClick={search}>
        舍弃
      </button>
    </div>
  );
};

export default findSubUpdate;
