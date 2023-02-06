import { useEffect } from "react";
import { useEditorContext } from "../../../Context/EditorProvider";
import { sections } from "../../../utils/constants";
import { setBodyValuesUtilities } from "../../../utils/setValuesUtility";
import {
  BasicInfoBody,
  WorkExpBody,
  ProjectBody,
  EducationBody,
  OtherBody,
  SummaryBody,
  AchievementsBody,
} from "./";
const GenerateBody = () => {
  const { activeSectionKey, setValues, resumeInformation } = useEditorContext();
  useEffect(() => {
    const activeInfo = resumeInformation[sections[activeSectionKey]];
    setBodyValuesUtilities(setValues, activeInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSectionKey]);
  switch (sections[activeSectionKey]) {
    case sections.basicInfo:
      return <BasicInfoBody />;
    case sections.workExp:
      return <WorkExpBody />;
    case sections.project:
      return <ProjectBody />;
    case sections.education:
      return <EducationBody />;
    case sections.achievement:
      return <AchievementsBody />;
    case sections.summary:
      return <SummaryBody />;
    case sections.other:
      return <OtherBody />;
    default:
      return null;
  }
};

export default GenerateBody;
