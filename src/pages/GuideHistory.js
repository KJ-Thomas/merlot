import React, { useState, useEffect } from "react";
import GuideTable from "../components/guide/GuideTable";
import Topbar from "../components/Topbar";

const GuideHistory = () => {
  const [guideTable, setGuideTable] = useState(null);
  const url = "/find_guided_xinjiang/?count=0";
  const searchGuideTable = async () => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setGuideTable(parsedData);
  };

  useEffect(() => {
    searchGuideTable();
  }, []);

  return (
    <div>
      <Topbar path={"推特引导历史 / 新疆"} />
      <div class="guide-history">
        <div class="guide-history--container">
          <GuideTable data={guideTable} />
        </div>
      </div>
    </div>
  );
};

export default GuideHistory;
