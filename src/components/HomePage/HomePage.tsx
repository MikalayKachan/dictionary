import React from "react";

import { TextField } from "@material-ui/core";
import { LoadingButton } from "@mui/lab";

import styles from './HomePage.module.css'

type HomePagePropsType = {
    word: string
    loading: boolean
    onSearchClick: () => void
    onWordChange: (word: string) => void
    onKeyPressHandler: (code: string | number) => void
}

const HomePage = ({loading, word, onSearchClick, onWordChange, onKeyPressHandler }:HomePagePropsType) =>  (
    <div className={styles.homePage}>
      <TextField
        id="outlined-value"
        label="Enter your word"
        variant="outlined"
        color="secondary"
        disabled={loading}
        value={word}
        onKeyPress={(event) => onKeyPressHandler(event.charCode)}
        onChange={(event) => onWordChange(event.target.value)}
      />
      <LoadingButton
        loading={loading}
        variant="outlined"
        color="secondary"
        size="small"
        onClick={onSearchClick}
      >
        search
      </LoadingButton>
    </div>
  );

export default HomePage;
