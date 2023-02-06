export const setValuesUtility = (setValues, activeInfo, activeDetailIndex) => {
  setValues({
    overview: activeInfo.details[activeDetailIndex]?.overview || "",
    link: activeInfo.details[activeDetailIndex]?.link || "",
    certificationLink:
      activeInfo.details[activeDetailIndex]?.certificationLink || "",
    companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
    location: activeInfo.details[activeDetailIndex]?.location || "",
    startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
    endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
    points: activeInfo.details[activeDetailIndex]?.points || "",
    title: activeInfo.details[activeDetailIndex]?.title || "",
    linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
    github: activeInfo.details[activeDetailIndex]?.github || "",
    college: activeInfo.details[activeDetailIndex]?.college || "",
  });
};
export const setBodyValuesUtilities = (setValues, activeInfo) => {
  setValues({
    name: activeInfo?.detail?.name || "",
    overview: activeInfo?.details ? activeInfo.details[0]?.overview || "" : "",
    link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
    certificationLink: activeInfo?.details
      ? activeInfo.details[0]?.certificationLink || ""
      : "",
    companyName: activeInfo?.details
      ? activeInfo.details[0]?.companyName || ""
      : "",
    college: activeInfo?.details ? activeInfo.details[0]?.college || "" : "",
    location: activeInfo?.details ? activeInfo.details[0]?.location || "" : "",
    startDate: activeInfo?.details
      ? activeInfo.details[0]?.startDate || ""
      : "",
    endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
    points: activeInfo?.details
      ? activeInfo.details[0]?.points
        ? [...activeInfo.details[0]?.points]
        : ""
      : activeInfo?.points
      ? [...activeInfo.points]
      : "",
    title: activeInfo?.details
      ? activeInfo.details[0]?.title || ""
      : activeInfo?.detail?.title || "",
    linkedin: activeInfo?.detail?.linkedin || "",
    github: activeInfo?.details
      ? activeInfo.details[0]?.github || ""
      : activeInfo?.detail?.github || "",
    phone: activeInfo?.detail?.phone || "",
    email: activeInfo?.detail?.email || "",
    summary: typeof activeInfo?.detail !== "object" ? activeInfo?.detail : "",
    other: typeof activeInfo?.detail !== "object" ? activeInfo?.detail : "",
  });
};
