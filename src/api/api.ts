import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
  },
);

export const getWord = (word:string | undefined) => {
    return instance.get(`${word}`);
  }