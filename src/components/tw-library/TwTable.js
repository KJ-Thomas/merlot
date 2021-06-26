import React from "react";

const TwTable = ({ data }) => {
  let twitters = data.twitters.slice(0, 5);
  return (
    <div class="tw-table">
      <h2>{data.subtopic}</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>时间</th>
            <th>用户名</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {twitters.map((t) => {
            return (
              <tr>
                <td>{t.time}</td>
                <td>{t.username}</td>
                <td>{t.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TwTable;
