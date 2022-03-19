import React from "react";
import { MeaningsType } from "../../../redux/homePageReducer";

import styles from "./Meanings.module.css";

type MeaningsPropsType = {
  meanings: Array<MeaningsType>;
};

const Meanings = ({ meanings }: MeaningsPropsType) => {
  const meaningsToRender = meanings.map((c) => (
    <div className={styles.partOfSpeech}>
      <div className={styles.part}>
        Part of speech:{" "}
        <span className={styles.partOfSpeechItem}>{c.partOfSpeech}</span>
      </div>
      {c.synonyms.length > 0 && (
        <div className={styles.part}>
          <span>Synonims:</span>{" "}
          <span className={styles.synonym}>
            {c.synonyms.join(", ").concat(".")}
          </span>
        </div>
      )}
      <div>Definitions:</div>
      <div className={styles.part}>
        {c.definitions.map((d) => (
          <li className={styles.definition}>
            <span className={styles.listText}>{d.definition}</span>
          </li>
        ))}
      </div>
    </div>
  ));
  return <div>{meaningsToRender}</div>;
};

export default React.memo(Meanings);
