import React, { useEffect, useState } from "react";
import styles from "../Resume.module.css";
import { sections } from "../../../utils/constants";
import { WorkExp, Project, Education, Achievement, Summary, Other } from "./";

const GenerateResumeSections = () => {
  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");
  const swapSourceTarget = (source, target) => {
    console.log(source, target);
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);

    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    swapSourceTarget(source, target);
    return () => {
      setSource(null);
      seTarget(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source, target]);

  useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);
  const sectionDiv = {
    [sections.workExp]: (
      <WorkExp key={"workexp"} seTarget={seTarget} setSource={setSource} />
    ),
    [sections.project]: (
      <Project key={"project"} seTarget={seTarget} setSource={setSource} />
    ),
    [sections.education]: (
      <Education key={"education"} seTarget={seTarget} setSource={setSource} />
    ),
    [sections.achievement]: (
      <Achievement
        key={"achievement"}
        seTarget={seTarget}
        setSource={setSource}
      />
    ),
    [sections.summary]: (
      <Summary key={"summary"} seTarget={seTarget} setSource={setSource} />
    ),
    [sections.other]: (
      <Other key={"other"} seTarget={seTarget} setSource={setSource} />
    ),
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.col1}>
          {columns[0].map((item) => sectionDiv[item])}
        </div>
        <div className={styles.col2}>
          {columns[1].map((item) => sectionDiv[item])}
        </div>
      </div>
    </>
  );
};

export default GenerateResumeSections;
