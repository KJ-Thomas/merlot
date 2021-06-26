import React, { useState, useEffect } from "react";
import Topbar from "../components/Topbar";
import GuideInfoCard from "../components/guide/GuideInfoCard";
import GuideUpdateCard from "../components/guide/GuideUpdateCard";
import GuideShowData from "../components/guide/GuideShowData";

const Guide = () => {
  const [waitForGuide, setWaitForGuide] = useState("");
  const [lastGuideTime, setLastGuideTime] = useState("");
  const [guidedTwitters, setGuidedTwitters] = useState("");
  const [subtopic, setSubtopic] = useState("");
  const [strategy, setStrategy] = useState("");

  const waitUrl = "/find_wait_guide_twitter/";
  const timeUrl = "/find_newest_nums_already_guide/";
  const loadUrl = "/find_guided_xinjiang/?count=2";

  const searchWaitForGuide = async () => {
    const dataFetch = await fetch(waitUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setWaitForGuide(parsedData);
  };

  const loadTime = async () => {
    const dataFetch = await fetch(timeUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setLastGuideTime(parsedData);
  };

  const searchGuidedTwitters = async () => {
    const dataFetch = await fetch(loadUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setGuidedTwitters(parsedData);
  };

  const toGuide = async () => {
    let guideUrl = `/insert_already_guide/?strategy=${strategy}&subtopic=${subtopic}&time=${waitForGuide.time}&username=${waitForGuide.username}&id=${waitForGuide.id}&text=${waitForGuide.text}&link=${waitForGuide.link}`;
    const dataFetch = await fetch(guideUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    console.log(guideUrl);
  };

  useEffect(() => {
    searchWaitForGuide();
    loadTime();
    searchGuidedTwitters();
  }, []);

  return (
    <div class="guide">
      <Topbar path={"推特引导 / 新疆"} />
      <div class="update-card">
        <GuideUpdateCard
          setSubtopic={setSubtopic}
          setStrategy={setStrategy}
          data={waitForGuide}
          guide={toGuide}
          search={searchGuidedTwitters}
          load={searchWaitForGuide}
        />
      </div>
      <div class="info-card">
        <GuideInfoCard data={lastGuideTime} />
      </div>
      <div class="show-card">
        <GuideShowData data={guidedTwitters} />
      </div>
    </div>
  );
};

export default Guide;
