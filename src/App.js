import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import moment from "moment";
import HeroPage from "./components/HeroPage";
import Cold from "./components/Cold";
import Hot from "./components/Hot";
import Rain from "./components/Rain";
import Perfect from "./components/Perfect";

function App() {
  const [city, setCity] = useState("");

  return (
      <HeroPage searchCity={(city) => setCity(city)} />
  );
}

export default App;
