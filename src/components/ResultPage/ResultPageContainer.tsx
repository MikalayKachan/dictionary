import { useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { getWord } from "../../api/api"

import { setWordInfoAC } from "../../redux/homePageReducer";
import {wordInfoSelector} from "../../redux/selectors"

import ResultPage from './ResultPage'

const ResultPageContainer = () => {
    const dispatch = useDispatch();
    const stateWord = useSelector(wordInfoSelector)

    const [loading, setLoading] = useState(true)
    const [words, setWords] = useState<any>([])

    const {word} = useParams<{word: string}>()
    const history = useHistory();

    const handleBackClick = () => {
        history.push("/")
    };

   const phonetics = stateWord.length > 0 ? stateWord[0].phonetics : [] 

    useEffect(()=>{
        if(stateWord && stateWord.length > 0 && stateWord[0].word === word){
            setWords(stateWord)
            setLoading(false)
        } else {
            getWord(word)
            .then((responce)=>{
                setWords(responce.data)
                setLoading(false)
                dispatch(setWordInfoAC(responce.data))
            })
            .catch((error)=>{
                history.push(`/${word}/error`)
        })
        }
    }  , [word])

    return (
      <ResultPage loading={loading} currentWord={words[0]} /* phonetics={phonetics} */ onBackClick={handleBackClick}/>
    )
}

export default ResultPageContainer