import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import ViewRepository from "./components/ViewRepository";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/view/:id" exact component={ViewRepository} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
