import React, { useEffect } from "react";
import { sections } from "../../utils/constants";
import { useEditorContext } from "../../Context/EditorProvider";
import InputControl from "../InputControl/InputControl";
import styles from "./Editor.module.css";
import GenerateBody from "./EditorSections/GenerateBody";
import { handleSubmitSwitchCases } from "../../utils/switchCases";
import { X } from "react-feather";
import { setValuesUtility } from "../../utils/setValuesUtility";
const Editor = ({ information }) => {
  const {
    values,
    activeSectionKey,
    setActiveSectionKey,
    setActiveInformation,
    sectionTitle,
    setSectionTitle,
    resumeInformation,
    setResumeInformation,
    activeDetailIndex,
    setActiveDetailIndex,
    activeInformation,
    setValues,
  } = useEditorContext();
  useEffect(() => {
    setActiveInformation(resumeInformation[sections[activeSectionKey]]);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSectionKey]);
  useEffect(() => {
    setActiveInformation(resumeInformation[sections[activeSectionKey]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resumeInformation]);
  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = resumeInformation[sections[activeSectionKey]];
    setValuesUtility(setValues, activeInfo, activeDetailIndex);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDetailIndex]);
  const handleSubmission = () => {
    handleSubmitSwitchCases(
      sections[activeSectionKey],
      values,
      setResumeInformation,
      resumeInformation,
      sectionTitle,
      activeDetailIndex
    );
  };
  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    setResumeInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...resumeInformation[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };
  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    details.splice(index, 1);
    setResumeInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...resumeInformation[sections[activeSectionKey]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            } `}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl
          label="Title"
          placeholder="Enter section title"
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />
        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === index ? styles.active : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <X
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteDetail(index);
                    }}
                  />
                </div>
              ))
            : ""}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className={styles.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>

        <GenerateBody />
        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
};

export default Editor;
