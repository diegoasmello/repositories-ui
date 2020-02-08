import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import RepositoryDetail from "./pages/RepositoryDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/view/:owner/:repo" exact component={RepositoryDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
