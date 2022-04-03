import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

console.log(Router, "look here");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
