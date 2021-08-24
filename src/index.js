import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Home from "./Home";
import Cart from "./Cart";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { DataProvider } from "./utils/DataProvider";
import theme from "./styles/theme";
import { ThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <DataProvider>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </DataProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
