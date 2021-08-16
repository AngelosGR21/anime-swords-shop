import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { DataProvider } from "./utils/DataProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/cart"></Route>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
