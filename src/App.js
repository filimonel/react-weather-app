import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import moment from "moment";
import HeroPage from "./components/HeroPage";
import env from "react-dotenv";
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
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${env.API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    };
    fetchData(city);
  });

  // fetchWeather("Melbourne")

  return <HeroPage searchCity={(city) => setCity(city)} />;
}

export default App;
