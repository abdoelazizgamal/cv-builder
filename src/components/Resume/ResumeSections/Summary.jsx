import { useEditorContext } from "../../../Context/EditorProvider";
import styles from "../Resume.module.css";
const Summary = ({ seTarget, setSource }) => {
  const { info } = useEditorContext();
  return (
    <div
      draggable
      onDragOver={() => seTarget(info.summary?.id)}
      onDragEnd={() => setSource(info.summary?.id)}
      className={`${styles.section} ${
        info.summary?.sectionTitle ? "" : styles.hidden
      }`}
    >
      <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
      <div className={styles.content}>
        <p className={styles.overview}>{info.summary?.detail}</p>
      </div>
    </div>
  );
};

export default Summary;
