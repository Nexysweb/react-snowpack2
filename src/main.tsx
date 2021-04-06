import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";
import * as Auth from "./auth/ui";

import { Loader } from "./utils-ui";

import AppConnected from "./app";

const App = () => {
  const [redirect, setRedirect] = React.useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  if (typeof code === "string" && redirect === false) {
    Auth.getRedirect(code).then(() => setRedirect(true));
    return <></>;
  }

  const userId = window.localStorage.getItem("user_id");

  if (!userId) {
    return <Loader Component={Auth.ConnectUrl} promise={Auth.getUrl} />;
  }

  return <AppConnected userId={userId} />;
};

export default () => (
  <Router>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </Router>
);
