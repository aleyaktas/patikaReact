import "./App.css";
import Home from "./components/Home/Home";
import { WeatherProvider } from "./context/Weather";

function App() {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
}

export default App;
