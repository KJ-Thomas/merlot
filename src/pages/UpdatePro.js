import React, { useState, useEffect } from "react";
import ProInfoCard from "../components/pro-library/ProInfoCard";
import Topbar from "../components/Topbar";
import ProUpdateCard from "../components/pro-library/ProUpdateCard";
import ProShowData from "../components/pro-library/ProShowData";

const UpdatePro = () => {
  const [proWait, setProWait] = useState({});
  const [proShow4, setProShow4] = useState([]);
  const [proLastUpdateTime, setProLastUpdateTime] = useState("");
  const waitUrl = "/find_wait_pro_xinjiang";
  const saveUrl = `/insert_pro_xinjiang/?time=${proWait.time}&expert=${proWait.expert}&title=${proWait.title}&text=${proWait.text}&link=${proWait.link}`;
  const loadUrl = "/find_pro_xinjiang?count=3";
  const timeUrl = "/find_newest_nums_pro_xinjiang";

  const searchProWait = async () => {
    const dataFetch = await fetch(waitUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    // console.log(parsedData);
    setProWait(parsedData);
    // console.log(dataFetch);
  };

  const savePro = async () => {
    const dataFetch = await fetch(saveUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    console.log(dataFetch);
  };

  const loadPro = async () => {
    const dataFetch = await fetch(loadUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    // console.log(dataFetch);
    let parsedData = await dataFetch.json();
    setProShow4(parsedData);
  };

  const loadTime = async () => {
    const dataFetch = await fetch(timeUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setProLastUpdateTime(parsedData);
  };

  useEffect(() => {
    searchProWait();
    loadPro();
    loadTime();
  }, []);

  return (
    <div class="update">
      <Topbar path={"专家素材库 / 新疆"} />
      <div class="update-card">
        <ProUpdateCard
          proWait={proWait}
          searchProWait={searchProWait}
          savePro={savePro}
          loadPro={loadPro}
        />
      </div>
      <div class="info-card">
        <ProInfoCard data={proLastUpdateTime} />
      </div>
      <div class="show-card">
        <ProShowData data={proShow4} />
      </div>
    </div>
  );
};

export default UpdatePro;
