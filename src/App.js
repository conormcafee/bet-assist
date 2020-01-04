import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import Home from "./screens/Home";
import NewLayout from "./components/NewLayout";
import store from "./redux/store";
import { persistor } from "./redux/persistor";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Home /> */}
        <NewLayout />
      </PersistGate>
    </Provider>
  );
};

export default App;
