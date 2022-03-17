import React from "react";

import Button from '@mui/material/Button'

const ResultPage = ({loading, currentWord, onBackClick}:any) => {
    return(
        <div>
        <Button variant="outlined" onClick={onBackClick}>Back to search</Button>
        {loading ? 
        <div>loading </ div> 
        : <>
            <div>Word: {currentWord.word}</div>
            </>}
        </div>
    )
}

export default ResultPage