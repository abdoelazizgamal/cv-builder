import { createContext, useContext, useEffect, useState } from "react";
import { colors, information, sections } from "../utils/constants";

const EditorContext = createContext({});

const EditorProvider = ({ children }) => {
  const [resumeInformation, setResumeInformation] = useState(information);
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  const [info, setInfo] = useState({
    workExp: resumeInformation[sections.workExp],
    project: resumeInformation[sections.project],
    achievement: resumeInformation[sections.achievement],
    education: resumeInformation[sections.education],
    basicInfo: resumeInformation[sections.basicInfo],
    summary: resumeInformation[sections.summary],
    other: resumeInformation[sections.other],
  });
  const [activeInformation, setActiveInformation] = useState(
    resumeInformation[sections[Object.keys(sections)[0]]]
  );
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });
  const [activeColor, setActiveColor] = useState(colors[0]);
  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };
  useEffect(() => {
    setInfo({
      workExp: resumeInformation[sections.workExp],
      project: resumeInformation[sections.project],
      achievement: resumeInformation[sections.achievement],
      education: resumeInformation[sections.education],
      basicInfo: resumeInformation[sections.basicInfo],
      summary: resumeInformation[sections.summary],
      other: resumeInformation[sections.other],
    });
  }, [resumeInformation]);
  return (
    <EditorContext.Provider
      value={{
        activeSectionKey,
        setActiveSectionKey,
        activeInformation,
        setActiveInformation,
        values,
        setValues,
        handlePointUpdate,
        sectionTitle,
        setSectionTitle,
        resumeInformation,
        setResumeInformation,
        activeDetailIndex,
        setActiveDetailIndex,
        info,
        activeColor,
        setActiveColor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
export const useEditorContext = () => useContext(EditorContext);
export default EditorProvider;
