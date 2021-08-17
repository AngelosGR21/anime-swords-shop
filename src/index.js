import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Home from "./Home";
import Cart from "./Cart";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { DataProvider } from "./utils/DataProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
