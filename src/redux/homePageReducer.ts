import { getWord } from "../api/api"

const UPDATE_WORD = "UPDATE_WORD"
const SET_WORD_INFO = "SET_WORD_INFO"


export type UpdateWordActionType = {
    type: typeof UPDATE_WORD
    word: string
}

export type SetWordInfoActionType = {
    type: typeof SET_WORD_INFO
    wordInfo: Array<WordInfoType>
}

type WordInfoType = {
    license: LicenseType
    meanings: Array<MeaningsType>
    phonetic: string | null
    phonetics: Array<PhoneticsItemType> 
    sourceUrls: Array<string | null>
    word: string | null
}

type LicenseType = {
    name: string | null
    url: string | null
}

type MeaningsType = {
    antonyms: Array<string | null> 
    definitions: Array<DefinitionsType>
    partOfSpeech: string | null
    synonyms: Array<string | null> 
}

type DefinitionsType = {
    definition: string | null
    synonyms: Array<string | null> 
    antonyms: Array<string | null>
    example?: string | null
}

type PhoneticsItemType = {
    audio: string | null
    license: LicenseType
    sourceUrl: string | null
    text: string | null
}

/* type AntonymsType = {
    definition: string | null 
    example: string | null
} */

export const updateWordAC = (updatedWord: string): UpdateWordActionType => {
    return {
        type: UPDATE_WORD,
        word: updatedWord
    }
}

export const setWordInfoAC = (wordInfo: Array<WordInfoType>): SetWordInfoActionType => {
    return {
        type: SET_WORD_INFO,
        wordInfo: wordInfo
    }
}

type HomePageActionsType = UpdateWordActionType | SetWordInfoActionType

type HomePageStateType = {
    word: string,
    wordInfo: Array<WordInfoType>
}
const initialState = {
    word: "",
    wordInfo: [] as Array<WordInfoType>
}



const homePageReducer = (homePageState: HomePageStateType = initialState, action: HomePageActionsType) => {
    
    switch (action.type) {
        case UPDATE_WORD: {
            return {...homePageState, word: action.word}
        }
        case SET_WORD_INFO: {
            return {...homePageState, wordInfo: action.wordInfo}
        }
        default:
            return homePageState
    }
}

/* export const getWordInfoThunkCreator = (word: string) => {
    
  return (dispatch: any) => {
    getWord(word)
    .then((responce) => {
        dispatch(setWordInfoAC(responce.data))
            })
    .catch((error)=>{
        navigate('/error')
        });
    };
  };
 */
export default homePageReducer