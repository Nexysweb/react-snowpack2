import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import * as Auth from "./auth/ui";

import { Loader } from "./utils-ui";

import Sleep from "./sleep/index";

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  if (typeof code === "string") {
    return (
      <Loader
        Component={() => <Redirect to={"/"} />}
        promise={() => Auth.getRedirect(code)}
      />
    );
  }

  const userId = window.localStorage.getItem("user_id");

  if (!userId) {
    return <Loader Component={Auth.ConnectUrl} promise={Auth.getUrl} />;
  }

  return (
    <>
      <div>
        <p>UserId:{userId}</p>
        <nav>
          <ul>
            <li>
              <Link to="/sleep">Sleep</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about"></Route>
          <Route path="/sleep">
            <Sleep />
          </Route>
          <Route path="/">
            <p>home</p>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
