import styles from "../Editor.module.css";
import InputControl from "../../InputControl/InputControl";
import { useEditorContext } from "../../../Context/EditorProvider";
const SummaryBody = () => {
  const { values, setValues } = useEditorContext();
  return (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        value={values.summary}
        placeholder="Enter your objective/summary"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );
};

export default SummaryBody;
