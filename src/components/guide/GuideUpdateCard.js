import React from "react";

const GuideUpdateCard = ({
  setSubtopic,
  setStrategy,
  data,
  guide,
  search,
  load,
}) => {
  return (
    <div class="guide-update-card">
      <h2 class="title">待引导推特</h2>
      <p class="text">
        {data.username}：{data.text}
      </p>
      <a class="link" href={data.link} target="_blank">
        推文链接
      </a>
      <select
        class="form-select one"
        aria-label="Default select example"
        onChange={(e) => {
          setSubtopic(e.target.value);
        }}
      >
        <option selected>选择话题</option>
        <option value="general">general</option>
        <option value="cotton">cotton</option>
        <option value="genocide">genocide</option>
        <option value="muslim">terrorists</option>
        <option value="humanrights">humanrights</option>
        <option value="propaganda">propaganda</option>
      </select>
      <select
        class="form-select two"
        aria-label="Default select example"
        onChange={(e) => {
          setStrategy(e.target.value);
        }}
      >
        <option selected>选择策略</option>
        <option value="companion">同伴</option>
        <option value="irony">反话</option>
        <option value="auth_positive">权威正向</option>
        <option value="auth_negative">权威反向</option>
        <option value="natural_positive">自然正向</option>
        <option value="natural_negative">自然反向</option>
      </select>
      <button
        class="save"
        onClick={() => {
          guide();
          search();
          load();
        }}
      >
        引导
      </button>
      <button class="drop" onClick={load}>
        忽略
      </button>
    </div>
  );
};

export default GuideUpdateCard;
