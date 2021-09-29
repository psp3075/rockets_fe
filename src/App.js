import "./App.css";
import Launches from "./components/Launches";
import logo from "./spacex.png";

function App() {
  return (
    <div className="container">
      <img
        src={logo}
        alt="SpaceX"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
      <Launches />
    </div>
  );
}

export default App;
