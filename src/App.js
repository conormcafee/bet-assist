import React from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./assets/style";
import Compare from "./screens/Compare";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Compare />
    </Provider>
  );
};

export default App;
