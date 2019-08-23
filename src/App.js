import React, { Fragment } from "react";
import { GlobalStyle } from "./assets/style";
import Compare from "./screens/Compare";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Compare />
    </Fragment>
  );
};

export default App;
