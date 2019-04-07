import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import NameForm from "./Journal/NameForm";
import TableView from "./Journal/TableView";
import App from "./test/student card/App";
import Weather from "./test/weather";
import Greet from "./test/Greet";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
