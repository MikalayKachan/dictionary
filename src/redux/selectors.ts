import { StateType } from "./store";

export const wordSelector = (state: StateType) => state.homePage.word;
export const wordInfoSelector = (state: StateType) => state.homePage.wordInfo;
