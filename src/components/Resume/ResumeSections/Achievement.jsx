import { useEditorContext } from "../../../Context/EditorProvider";
import styles from "../Resume.module.css";
const Achievement = ({ seTarget, setSource }) => {
  const { info } = useEditorContext();
  return (
    <div
      draggable
      onDragOver={() => seTarget(info.achievement?.id)}
      onDragEnd={() => setSource(info.achievement?.id)}
      className={`${styles.section} ${
        info.achievement?.sectionTitle ? "" : styles.hidden
      }`}
    >
      <div className={styles.sectionTitle}>
        {info.achievement?.sectionTitle}
      </div>
      <div className={styles.content}>
        {info.achievement?.points?.length > 0 ? (
          <ul className={styles.numbered}>
            {info.achievement?.points?.map((elem, index) => (
              <li className={styles.point} key={elem + index}>
                {elem}
              </li>
            ))}
          </ul>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
};

export default Achievement;
