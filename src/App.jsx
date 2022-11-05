import "./App.css";
import { WeatherSide } from "./components";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="wrapper">
        <div className="container">
          <WeatherSide />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
