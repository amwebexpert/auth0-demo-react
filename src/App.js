import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h2>SPA - React app integrating Auth0 lib</h2>
        <div>Login and logout through OAuth2 flow</div>
      </header>

      <div className="actions">
        <LoginButton />
        <LogoutButton />
        <hr />
      </div>

      <Profile />
    </div>
  );
}

export default App;
