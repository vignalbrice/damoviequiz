import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    counter: 60,
    title: null,
    actor: null,
  },
  reducers: {
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setActor: (state, action) => {
      state.actor = action.payload;
    },
  },
});

export const { setCounter, setTitle, setActor } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getCounter = (state) => state.counter;
export const getActor = (state) => state.actor;
export const getTitle = (state) => state.title;
export const getMovies = (state) => state.movies;
export const getActors = (state) => state.actors;

export default appSlice.reducer;
