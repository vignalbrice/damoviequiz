import Home from "./views/Home";

import { Provider } from "react-redux";

import { storeConf } from "./store/index";

function App() {
  const { store } = storeConf();

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
