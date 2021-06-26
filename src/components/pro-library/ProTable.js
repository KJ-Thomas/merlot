import React from "react";

const ProTable = ({ data }) => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th>时间</th>
          <th>专家</th>
          <th>内容</th>
          <th>链接</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((d) => {
            return (
              <tr>
                <td>{d.time}</td>
                <td>{d.expert}</td>
                <td>{d.text}</td>
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

export default ProTable;
