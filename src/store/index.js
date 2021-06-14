import thunk from "redux-thunk";
import app from "./selectors/app";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

export const storeConf = () => {
  const store = createStore(
    app,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return { store };
};
