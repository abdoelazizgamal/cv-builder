import styles from "./InputControl.module.css";

const InputControl = ({ label, ...props }) => {
  return (
    <div className={`${styles.container} inputs`}>
      {label && <label>{label}</label>}
      <input type="text" {...props} className="input" />
    </div>
  );
};

export default InputControl;
