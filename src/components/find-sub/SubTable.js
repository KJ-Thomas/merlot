import React from "react";

const SubTable = ({ data }) => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th>加入时间</th>
          <th>子话题</th>
          <th>关键词</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((d) => {
            return (
              <tr>
                <td>{d.insert_time}</td>
                <td>{d.subtopic}</td>
                <td>
                  {d.keyword &&
                    d.keyword.map((k) => {
                      return <span>{k}</span>;
                    })}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default SubTable;
