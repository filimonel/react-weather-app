import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeroPage from "./components/HeroPage";
import WeatherPage from "./components/WeatherPage";
import env from "react-dotenv";

function App() {
  // State
  const [city, setCity] = useState("Melbourne");
  const [name, setName] = useState("");
  const [temp, setTemp] = useState();
  const [conditions, setConditions] = useState("");
  const [path, setPath] = useState("/");

  // Fetch Weather Information
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${env.API_KEY}&units=metric`
      );
      const result = await res.json();

      console.log(result);
      setName(result["name"]);
      setTemp(Math.round(result["main"]["temp"]));
      setConditions(result["weather"][0]["description"]);
    };
    // fetchData();
  }, [city]);

  return (
    <Router>
      {city === "Melbourne" && (
        <Route
          path={path}
          exact
          render={() => <HeroPage searchCity={(city) => setCity(city)} />}
        />
      )}

      {/* {temp > 30 && ( */}
      <Route
        path="/hot"
        exact
        render={() => (
          <WeatherPage
            className="perfect-wrapper"
            location={name}
            temperature={temp}
            conditions={conditions}
          />
        )}
      />
      {/* )} */}
    </Router>
  );
}

export default App;
