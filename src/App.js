import logo from "./logo.svg";
import "./App.css";
import SignInForClient from "./pages/client/signin/SignInForClient";
import SignUpForClient from "./pages/client/signup/SignUpForClient";

function App() {
  return (
    <div className="App">
      <SignInForClient />
    </div>
  );
}

export default App;
