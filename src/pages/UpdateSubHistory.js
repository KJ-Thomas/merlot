import React, { useState, useEffect } from "react";
import SubTable from "../components/find-sub/SubTable";
import Topbar from "../components/Topbar";

const ProLibrary = () => {
  const [subTable, setSubTable] = useState(null);
  const url = "/find_twitter_xinjiang?count=0";
  const searchSubTable = async () => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setSubTable(parsedData);
  };

  useEffect(() => {
    searchSubTable();
  }, []);

  return (
    <div>
      <Topbar path={"子话题更新历史 / 新疆"} />
      <div class="sub-library">
        <div class="sub-library--container">
          <SubTable data={subTable} />
        </div>
      </div>
    </div>
  );
};

export default ProLibrary;
