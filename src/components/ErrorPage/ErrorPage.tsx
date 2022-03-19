import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@mui/material/Button";

import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.push("/");
  };

  return (
    <div className={styles.errorPage}>
      <div>ERROR</div>
      <div className={styles.text}>
        The word was not found or entered incorrectly.
      </div>
      <div className={styles.text}>Try again!</div>
      <Button variant="outlined" color="inherit" onClick={handleBackClick}>
        Back to search
      </Button>
    </div>
  );
};

export default React.memo(ErrorPage);
