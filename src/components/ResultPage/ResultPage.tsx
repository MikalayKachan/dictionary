import React from "react";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { WordInfoType } from "../../redux/homePageReducer";
import Phonetics from "./Phonetics/Phonetics";
import Meanings from "./Meanings/Meanings";
import styles from "./ResultPage.module.css";

type ResultPagePropsType = {
  loading: boolean;
  currentWord: WordInfoType;
  onBackClick: () => void;
  onAudioPlayClick: (link: string | undefined) => void;
};

const ResultPage = ({
  loading,
  currentWord,
  onBackClick,
  onAudioPlayClick,
}: ResultPagePropsType) => {

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <div className={styles.info}>
            <div className={styles.word}>{currentWord.word?.toUpperCase()}</div>
            <div>
              <div className={styles.phonetics}>Phonetics</div>
              <Phonetics
                phoneticsData={currentWord.phonetics}
                onAudioPlayClick={onAudioPlayClick}
              />
              <div className={styles.meaningsWord}>Meanings</div>
              <Meanings meanings={currentWord.meanings} />
            </div>
          </div>
          <div className={styles.backgroundForButton}>
            <Button
              className={styles.button}
              variant="outlined"
              color="inherit"
              onClick={onBackClick}
            >
              Back to search
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ResultPage);
