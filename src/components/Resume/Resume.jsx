import { forwardRef } from "react";
import { GitHub, Linkedin, Mail, Phone } from "react-feather";
import { useEditorContext } from "../../Context/EditorProvider";

import styles from "./Resume.module.css";
import GenerateResumeSections from "./ResumeSections/GenerateResumeSections";

const Resume = forwardRef((props, ref) => {
  const { info } = useEditorContext();

  return (
    <div ref={ref} id="pdf-print">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.heading}>Name</p>
          <p className={styles.subHeading}>BlockChain Developer</p>
          <div className={styles.links}>
            {info.basicInfo?.detail?.email ? (
              <a className={styles.link} type="email" href="test">
                <Mail />
                {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.phone ? (
              <a className={styles.link} href="test">
                <Phone /> {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedin ? (
              <a className={styles.link} href="test">
                <Linkedin /> {info.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.github ? (
              <a className={styles.link} href="test">
                <GitHub /> {info.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>
        <GenerateResumeSections />
      </div>
    </div>
  );
});

export default Resume;
