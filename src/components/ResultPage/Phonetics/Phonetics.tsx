import React from "react";
import IconButton from "@mui/material/IconButton";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

import styles from "./Phonetics.module.css";
import { PhoneticsItemType } from "../../../redux/homePageReducer";

type PhoneticsPropsType = {
  phoneticsData: Array<PhoneticsItemType>;
  onAudioPlayClick: (link: string | undefined) => void;
};

const Phonetics = ({ phoneticsData, onAudioPlayClick }: PhoneticsPropsType) => {
  const phoneticsToRender = phoneticsData.map((p) => (
    <div className={styles.phonetic}>
      <div className={styles.phoneticWord}>phonetic: </div> <div>{p.text}</div>
      {p.audio && p.audio?.length > 1 && (
        <div>
          <IconButton color="inherit" onClick={() => onAudioPlayClick(p.audio)}>
            <RecordVoiceOverIcon />
          </IconButton>
        </div>
      )}
    </div>
  ));
  return <div>{phoneticsToRender}</div>;
};

export default React.memo(Phonetics);
