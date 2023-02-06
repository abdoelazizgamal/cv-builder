import { useEditorContext } from "../../../Context/EditorProvider";
import styles from "../Resume.module.css";
const Other = ({ seTarget, setSource }) => {
  const { info } = useEditorContext();
  return (
    <div
      draggable
      onDragOver={() => seTarget(info.other?.id)}
      onDragEnd={() => setSource(info.other?.id)}
      className={`${styles.section} ${
        info.other?.sectionTitle ? "" : styles.hidden
      }`}
    >
      <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
      <div className={styles.content}>
        <p className={styles.overview}>{info?.other?.detail}</p>
      </div>
    </div>
  );
};

export default Other;
