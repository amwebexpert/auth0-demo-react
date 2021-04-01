import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

import "./App.css";
import React from "react";

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  React.useEffect(() => {
    window.getValidAccessToken = getAccessTokenSilently;
  }, [getAccessTokenSilently]);

  return (
    <div className="app">
      <header className="app-header">
        <h3>SPA integrating Auth0 lib</h3>
        <div>Login and logout through OAuth2 flow</div>
      </header>

      <div className="actions">
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
      </div>

      <Profile />
    </div>
  );
}

export default App;
