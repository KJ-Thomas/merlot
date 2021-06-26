import React, { useState, useEffect } from "react";
import TwTable from "../components/tw-library/TwTable";
import Topbar from "../components/Topbar";

const TwLibrary = () => {
  const [twitters, setTwitters] = useState(null);
  const url = "/find_twitter_xinjiang?count=0";
  const searchTwitters = async () => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setTwitters(parsedData);
  };

  useEffect(() => {
    searchTwitters();
  }, []);

  return (
    <div>
      <Topbar path={"推特素材库 / 新疆"} />
      <div>
        {twitters &&
          twitters.map((t) => {
            return <TwTable data={t} />;
          })}
      </div>
    </div>
  );
};

export default TwLibrary;
