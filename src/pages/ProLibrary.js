import React, { useState, useEffect } from "react";
import ProTable from "../components/pro-library/ProTable";
import Topbar from "../components/Topbar";

const ProLibrary = () => {
  const [proTable, setProTable] = useState(null);
  const url = "/find_pro_xinjiang?count=0";
  const searchProTable = async () => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setProTable(parsedData);
  };

  useEffect(() => {
    searchProTable();
  }, []);

  return (
    <div>
      <Topbar path={"专家素材库 / 新疆"} />
      <div class="pro-library">
        <div class="pro-library--container">
          <ProTable data={proTable} />
        </div>
      </div>
    </div>
  );
};

export default ProLibrary;
