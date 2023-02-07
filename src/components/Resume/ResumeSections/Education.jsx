import { Calendar } from "react-feather";
import { useEditorContext } from "../../../Context/EditorProvider";
import { getFormattedDate } from "../../../utils/helpers";
import styles from "../Resume.module.css";
const Education = ({ seTarget, setSource }) => {
  const { info } = useEditorContext();
  return (
    <div
      draggable
      onDragOver={() => seTarget(info.education?.id)}
      onDragEnd={() => setSource(info.education?.id)}
      className={`${styles.section} ${
        info.education?.sectionTitle ? "" : styles.hidden
      }`}
    >
      <div className={styles.sectionTitle}>{info.education?.sectionTitle}</div>
      <div className={styles.content}>
        {info.education?.details?.map((item, index) => (
          <div className={styles.item} key={index}>
            {item.title ? (
              <p className={styles.title}>{item.title}</p>
            ) : (
              <span />
            )}
            {item.college ? (
              <p className={styles.subTitle}>Some college name</p>
            ) : (
              <span />
            )}
            {item.startDate && item.endDate ? (
              <div className={styles.date}>
                <Calendar /> {getFormattedDate(item.startDate)} -
                {getFormattedDate(item.endDate)}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
