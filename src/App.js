import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Login and logout through OAuth2 flow</div>
        <LoginButton />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
