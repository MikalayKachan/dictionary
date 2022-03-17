import React from "react";
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button'

const ErrorPage = () => {
    const history = useHistory();

    const handleBackClick = () => {
        history.push("/")
    };

    return(
        <div>
            <div>ERROR</div>
            <Button variant="outlined" onClick={handleBackClick}>Back to search</Button>
        </div>
    )
}

export default ErrorPage