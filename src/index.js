import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { registerSW } from "./swUtils";

ReactDOM.render(<App />, document.getElementById("root"));

registerSW();
