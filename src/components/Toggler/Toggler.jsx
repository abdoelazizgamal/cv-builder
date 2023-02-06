import { useEffect } from "react";
import { useEditorContext } from "../../Context/EditorProvider";
import "./Toggler.css";

const Toggler = () => {
  const { mode, changeMode } = useEditorContext();
  useEffect(() => {
    mode === "light"
      ? document.body.classList.add("light")
      : document.body.classList.remove("light");
  }, [mode]);
  return (
    <div className="toggleWrapper">
      <input
        type="checkbox"
        className="dn"
        id="dn"
        onChange={changeMode}
        checked={mode === "dark"}
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
};

export default Toggler;
