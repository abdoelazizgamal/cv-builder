import { GitHub, Paperclip } from "react-feather";
import { useEditorContext } from "../../../Context/EditorProvider";
import styles from "../Resume.module.css";
const Project = ({ seTarget, setSource }) => {
  const { info } = useEditorContext();
  return (
    <div
      draggable
      onDragOver={() => seTarget(info.project?.id)}
      onDragEnd={() => setSource(info.project?.id)}
      className={`${styles.section} ${
        info.project?.sectionTitle ? "" : styles.hidden
      }`}
    >
      <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
      <div className={styles.content}>
        {info.project?.details?.map((item, index) => (
          <div className={`${styles.item} item`} key={index}>
            {item.title ? (
              <p className={styles.title}>{item.title}</p>
            ) : (
              <span />
            )}
            {item.link ? (
              <a className={`${styles.link} link`} href={item.link}>
                <Paperclip />
                {item.link}
              </a>
            ) : (
              <span />
            )}
            {item.github ? (
              <a className={`${styles.link} link`} href={item.github}>
                <GitHub />
                {item.github}
              </a>
            ) : (
              <span />
            )}
            {item.overview ? (
              <p className={styles.overview}>{item.overview} </p>
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

export default Project;
