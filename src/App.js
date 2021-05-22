import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeroPage from "./components/HeroPage";
import WeatherPage from "./components/WeatherPage";
import env from "react-dotenv";

function App() {
  // State
  const [city, setCity] = useState("Dhaka");
  const [name, setName] = useState("");
  const [temp, setTemp] = useState();
  const [conditions, setConditions] = useState("");
  const [path, setPath] = useState("/");
  const [className, setClassName] = useState("");

  // Fetch Weather Information
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${env.API_KEY}&units=metric`
      );
      const result = await res.json();

      console.log(result);
      const name = result["name"];
      const temp = Math.round(result["main"]["temp"]);
      const conditions = result["weather"][0]["description"];

      setName(name);
      setTemp(temp);
      setConditions(conditions);

      if (temp >= 30) {
        setClassName("hot-wrapper");
        setPath("/hot");
      }
    };
    fetchData();
  }, [city]);

  return (
    <Router>
      {city === "Melbourne" && (
        <Route
          path="/"
          exact
          render={() => <HeroPage searchCity={(city) => setCity(city)} />}
        />
      )}

      <Route
        path={path}
        exact
        render={() => (
          <WeatherPage
            className={className}
            location={name}
            temperature={temp}
            conditions={conditions}
          />
        )}
      />
    </Router>
  );
}

export default App;
