import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Normalize } from "styled-normalize";

ReactDOM.render(
  <Fragment>
    <Normalize />
    <App />
  </Fragment>,
  document.getElementById("root")
);
