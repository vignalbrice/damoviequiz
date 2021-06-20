import TYPES from "../types/types";
import fetcher from "../../helpers/fetcher";
import axios from "axios";
import {
  generateRandomNumber,
  generateRandomQuestions,
} from "../../helpers/utils";

export const fetchQuestions = () => {
  return async (dispatch) => {
    try {
      let actors = {};
      const { data } = await fetcher.get(
        `/movie/now_playing?api_key=${process.env.REACT_APP_SECRET_KEY}`
      );
      const moviesData = data.results.map(({ id, title, poster_path }) => ({
        id,
        movie: title,
        poster: poster_path,
      }));
      try {
        actors = await axios.all(
          data.results?.map(async ({ id }) => {
            const cast = await fetcher.get(
              `movie/${id}/credits?api_key=${process.env.REACT_APP_SECRET_KEY}`
            );
            return {
              id,
              castId: cast.data.cast[0].id,
              actor: cast.data.cast[0].name,
              picture: cast.data.cast[0].profile_path,
            };
          })
        );
      } catch (error) {
        console.log("error", error);
      }

      const randomNumber = generateRandomNumber();
      const randomMarks = generateRandomQuestions(
        moviesData.length,
        randomNumber
      );

      const questionsData = actors.map((item, i) => {
        return Object.assign(
          {},
          item,
          moviesData[
            randomMarks[i] === true
              ? i
              : Math.floor(Math.random() * moviesData.length)
          ]
        );
      });
      const questionsWithAnswers = questionsData.map((item, index) => {
        return {
          ...item,
          answer: actors[index].id === item.id ? "vrai" : "faux",
        };
      });
      dispatch({
        type: TYPES.SET_QUESTIONS,
        questionsWithAnswers,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const setCounter = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.SET_COUNTER,
      payload,
    });
  };
};

export const setScore = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.SET_SCORE,
      payload,
    });
  };
};

export const setInitScore = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.SET_INIT_SCORE,
      payload,
    });
  };
};

export const setHighScore = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.SET_HIGHSCORE,
      payload,
    });
  };
};

export const setShowScore = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.SET_SHOW_SCORE,
      payload,
    });
  };
};

export const setIsPlay = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.IS_PLAY,
      payload,
    });
  };
};

export const setCurrentQuestion = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.SET_CURRENT_QUESTION,
      payload,
    });
  };
};
