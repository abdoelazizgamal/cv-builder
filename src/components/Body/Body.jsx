import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef } from "react";
import { ArrowDown } from "react-feather";
// import ReactToPrint from "react-to-print";
import { useEditorContext } from "../../Context/EditorProvider";
import { colors } from "../../utils/constants";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import styles from "./Body.module.css";

const Body = () => {
  const { activeColor, setActiveColor } = useEditorContext();
  const resumeRef = useRef();
  const exportPDF = () => {
     const el = document.getElementById("pdf-print");
    html2canvas(el,{
      width: el.clientWidth,
      height: el.clientHeight,
    }).then((canvas)=>{
      const imgData =  canvas.toDataURL('image/png');
      console.log(imgData);
      //   const pdf = new jsPDF({
      //     orientation: 'portrait',
      //   });
      // const imgProps= pdf.getImageProperties(imgData);
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      // pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      // // let pdf = new jsPDF('p','px',[900,900])
      // // pdf.save( 'cv.pdf' ) ;
  })
}
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
        {/* <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        /> */}
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
