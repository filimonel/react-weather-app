import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import moment from "moment";
import HeroPage from "./components/HeroPage";
// import Cold from "./components/Cold";
// import Hot from "./components/Hot";
// import Rain from "./components/Rain";
// import Perfect from "./components/Perfect";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  // Fetch Weather Information
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=461c8f52de807cb0365e617455bc1daf&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    };
    fetchData();
  }, [setWeatherData]);

  // fetchWeather("Melbourne")

  return <HeroPage searchCity={(city) => setCity(city)} />;
}

export default App;
