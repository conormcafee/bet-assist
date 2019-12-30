import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { GlobalStyle } from "./assets/style";
import Home from "./screens/Home";
import store from "./redux/store";
import { persistor } from "./redux/persistor";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
