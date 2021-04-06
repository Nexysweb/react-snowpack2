import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Sleep from "./sleep";

import Btn from "./button";
import Con from "./con";
import Breadcrumb from "./breadcrumb";

const App = ({ userId }: { userId: string }) => {
  return (
    <>
      <p>UserId: {userId}</p>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>{" "}
          <li>
            <Link to="/sleep">Sleep</Link>
          </li>
        </ul>
      </nav>

      <Btn />
      <Con />
      <Breadcrumb />

      <Switch>
        <Route path="/sleep">
          <Sleep />
        </Route>
        <Route path="/">
          <p>home</p>
        </Route>
      </Switch>
    </>
  );
};

export default App;
