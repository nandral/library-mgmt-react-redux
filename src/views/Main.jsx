import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Books from "./Books/Books";
import Register from "./Register";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/books" component={Books} />
      <Route path="/register" component={Register} />
    </Switch>
  </main>
);

export default Main;
