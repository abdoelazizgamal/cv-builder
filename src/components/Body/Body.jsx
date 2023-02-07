import { useEffect, useRef } from "react";
import { ArrowDown } from "react-feather";
import { useEditorContext } from "../../Context/EditorProvider";
import { constraints } from "../../utils/captureScreen";
import { colors } from "../../utils/constants";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import styles from "./Body.module.css";

const Body = () => {
  const { activeColor, setActiveColor } = useEditorContext();
  const resumeRef = useRef();
  const exportPDF = async () => {
    const el = document.getElementById("pdf-print");
    el.scrollIntoView({ behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      const video = document.createElement("video");
      video.addEventListener("loadedmetadata", () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        video.play();
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        stream.getVideoTracks()[0].stop();
        const image = canvas.toDataURL("image/jpeg", 1.0);
        var link = document.createElement("a");
        link.href = image;
        link.download = "cv.jpeg";
        link.click();

        return image;
      });
      video.srcObject = stream;
    } catch (error) {
      alert("Failed to capture screenshot!");
    } finally {
      document.body.classList.remove("overflow-hidden");
    }
  };
  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", activeColor[0]);
    document.documentElement.style.setProperty(
      "--second-color",
      activeColor[1]
    );
  }, [activeColor]);
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{
                backgroundImage: `linear-gradient(to right, ${item[0]}, ${item[1]})`,
              }}
              className={`${styles.color} ${
                item === activeColor ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <button onClick={() => exportPDF()}>
          Download <ArrowDown />
        </button>
      </div>
      <div className={styles.main}>
        <Editor />
        <Resume ref={resumeRef} />
      </div>
    </div>
  );
};

export default Body;
