import React, { useState, useEffect } from "react";
import SubFindInfo from "../components/find-sub/FindSubInfo";
import Topbar from "../components/Topbar";
import SubFindUpdate from "../components/find-sub/FindSubUpdate";
import SubFindShow from "../components/find-sub/FindSubShow";

const FindSub = () => {
  const [possibleSub, setPossibleSub] = useState("");
  const [subLastUpdateTime, setSubLastUpdateTime] = useState("");
  const [twitters, setTwitters] = useState(null);
  const waitUrl = "/find_possible_subtopic/";
  const timeUrl = "/find_newest_nums_twitter_xinjiang";
  const loadUrl = "/find_twitter_xinjiang?count=5";
  // const saveUrl = `insert_twitter_xinjiang/?subtopic=${possibleSub.subtopic}&keyword=[${possibleSub.keyword}]`;

  const searchPossibleSub = async () => {
    const dataFetch = await fetch(waitUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setPossibleSub(parsedData);
  };

  const loadTime = async () => {
    const dataFetch = await fetch(timeUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setSubLastUpdateTime(parsedData);
  };

  const searchTwitters = async () => {
    const dataFetch = await fetch(loadUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setTwitters(parsedData);
  };

  const saveSub = async () => {
    let keyword = possibleSub.keyword.map((value) => {
      return "'" + value + "'";
    });
    let saveUrl = `/insert_twitter_xinjiang/?subtopic=${possibleSub.subtopic}&keyword=[${keyword}]`;
    const dataFetch = await fetch(saveUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    console.log(dataFetch);
  };

  useEffect(() => {
    searchPossibleSub();
    loadTime();
    searchTwitters();
  }, []);

  return (
    <div class="update">
      <Topbar path={"子话题发现 / 新疆"} />
      <div class="update-card">
        <SubFindUpdate
          data={possibleSub}
          save={saveSub}
          search={searchPossibleSub}
          load={searchTwitters}
        />
      </div>
      <div class="info-card">
        <SubFindInfo data={subLastUpdateTime} />
      </div>
      <div class="show-card">
        <SubFindShow data={twitters} />
      </div>
    </div>
  );
};

export default FindSub;
