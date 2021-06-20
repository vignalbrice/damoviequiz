import { produce } from "immer";
import TYPES from "../types/types";

const initialState = {
  score: 0,
  counter: 60,
  isPlay: false,
  currentQuestion: 0,
  highScores: [],
  showScore: false,
  questions: [],
};
const app = (state = initialState, action = {}) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TYPES.SET_QUESTIONS:
        draft.questions = action.questionsWithAnswers;
        break;
      case TYPES.SET_SCORE:
        draft.score = state.score + action.payload;
        break;
      case TYPES.SET_INIT_SCORE:
        draft.score = action.payload;
        break;
      case TYPES.IS_PLAY:
        draft.isPlay = action.payload;
        break;
      case TYPES.SET_SHOW_SCORE:
        draft.showScore = action.payload;
        break;
      case TYPES.SET_HIGHSCORE:
        draft.highScores = [...draft.highScores, action.payload];
        break;
      case TYPES.SET_COUNTER:
        draft.counter = action.payload;
        break;
      case TYPES.SET_CURRENT_QUESTION:
        draft.currentQuestion = action.payload;
        break;
      default:
        return state;
    }
  });

export default app;
