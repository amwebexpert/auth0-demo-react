import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerGlobalMessagesListener } from "./utils/messaging-utils";

// Setup our messages receiver
registerGlobalMessagesListener();

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="amwebexpert.us.auth0.com"
      clientId="ofZTxqmsiHSIu9uLHjlevHRDKObDAhuP"
      redirectUri={window.location.href}
      audience="https://amwebexpert.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <HashRouter>
        <App />
      </HashRouter>
    </Auth0Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
