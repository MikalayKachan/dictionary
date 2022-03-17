import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { wordSelector } from "../../redux/selectors";

import { updateWordAC } from "../../redux/homePageReducer";
import HomePage from "./HomePage";


const HomePageContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const word = useSelector(wordSelector); 

  const handleSearchClick = () => {
    setLoading(true);
    history.push(`/${word}`)
  };

  const onKeyPressHandler = (code: string | number) => {
        if (code === 13) {
           handleSearchClick()
        }
    }

  const onWordChange = (word: string) => {
   dispatch(updateWordAC(word))
 }

  return (
      <HomePage
        onSearchClick={handleSearchClick}
        onWordChange={onWordChange}
        onKeyPressHandler={onKeyPressHandler} 
        loading={loading}
        word={word}
      />
  );
};

export default HomePageContainer;
