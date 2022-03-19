import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getWordInfoThunkCreator,
  WordInfoType,
} from "../../redux/homePageReducer";
import { wordInfoSelector } from "../../redux/selectors";

import ResultPage from "./ResultPage";

const ResultPageContainer = () => {
  const dispatch = useDispatch();
  const stateWord = useSelector(wordInfoSelector);

  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState<Array<WordInfoType>>([]);

  const { word } = useParams<{ word: string }>();
  const history = useHistory();

  const handleBackClick = () => {
    history.push("/");
  };

  const onAudioPlayClick = (link: string | undefined) => {
    let audio = new Audio(link);
    audio.play();
  };

  const succesfullyCallback = (words: Array<WordInfoType>) => {
    setWords(words);
    setLoading(false);
  };

  const errorCallback = () => {
    history.push(`/${word}/error`);
  };

  useEffect(() => {
    if (stateWord && stateWord.length > 0 && stateWord[0].word === word) {
      setWords(stateWord);
      setLoading(false);
    } else {
      getWordInfoThunkCreator(
        word,
        succesfullyCallback,
        errorCallback,
        dispatch
      );
    }
  }, [word]);

  return (
    <ResultPage
      loading={loading}
      currentWord={words[0]}
      onAudioPlayClick={onAudioPlayClick}
      onBackClick={handleBackClick}
    />
  );
};

export default React.memo(ResultPageContainer);
