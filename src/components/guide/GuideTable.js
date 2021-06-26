import React from "react";

const GuideTable = ({ data }) => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th>时间</th>
          <th>用户名</th>
          <th>推特内容</th>
          <th>引导内容</th>
          <th>链接</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((d) => {
            return (
              <tr>
                <td>{d.time}</td>
                <td>{d.username}</td>
                <td>{d.text}</td>
                <td>{d.guided_content}</td>
                <td>
                  <a href={d.link} target="_blank">
                    查看
                  </a>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default GuideTable;
