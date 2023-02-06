import styles from "../Editor.module.css";
import InputControl from "../../InputControl/InputControl";
import { useEditorContext } from "../../../Context/EditorProvider";
const OtherBody = () => {
  const { values, setValues } = useEditorContext();
  return (
    <div className={styles.detail}>
      <InputControl
        label="Other"
        value={values.other}
        placeholder="Enter something"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
  );
};

export default OtherBody;
