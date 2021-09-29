import Launches from "./components/Launches";
import Launch from "./components/Launch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./spacex.png";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Switch>
          <Route path="/launch/:flight_number">
            <Launch />
          </Route>
          <Route path="/" exact>
            <Launches />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
