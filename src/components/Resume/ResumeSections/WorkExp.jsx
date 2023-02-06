import { Calendar, MapPin, Paperclip } from "react-feather";
import { useEditorContext } from "../../../Context/EditorProvider";
import { getFormattedDate } from "../../../utils/helpers";
import styles from "../Resume.module.css";

const WorkExp = ({ seTarget, setSource }) => {
  const { info } = useEditorContext();

  return (
    <div
      draggable
      onDragOver={() => seTarget(info.workExp?.id)}
      onDragEnd={() => setSource(info.workExp?.id)}
      className={`${styles.section} ${
        info.workExp?.sectionTitle ? "" : styles.hidden
      }`}
    >
      <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
      <div className={styles.content}>
        {info.workExp?.details?.map((item) => (
          <div className={styles.item} key={item.title}>
            {item.title ? (
              <p className={styles.title}>{item.title}</p>
            ) : (
              <span />
            )}
            {item.companyName ? (
              <p className={styles.subTitle}>{item.companyName}</p>
            ) : (
              <span />
            )}
            {item.certificationLink ? (
              <a className={styles.link} href={item.certificationLink}>
                <Paperclip />
                {item.certificationLink}
              </a>
            ) : (
              <span />
            )}
            {item.startDate && item.endDate ? (
              <div className={styles.date}>
                <Calendar /> {getFormattedDate(item.startDate)}-
                {getFormattedDate(item.endDate)}
              </div>
            ) : (
              <div />
            )}
            {item.location ? (
              <p className={styles.date}>
                <MapPin /> Remote
              </p>
            ) : (
              <span />
            )}
            {item.points?.length > 0 ? (
              <ul className={styles.points}>
                {item.points?.map((elem, index) => (
                  <li className={styles.point} key={elem + index}>
                    {elem}
                  </li>
                ))}
              </ul>
            ) : (
              <span />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
