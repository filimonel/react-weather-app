import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeroPage from "./components/HeroPage";
import env from "react-dotenv";
// import Cold from "./components/Cold";
import Hot from "./components/Hot";
// import Rain from "./components/Rain";
// import Perfect from "./components/Perfect";

function App() {
  const [city, setCity] = useState("Adelaide");
  const [name, setName] = useState("");
  const [temp, setTemp] = useState();
  const [conditions, setConditions] = useState("");

  // Fetch Weather Information
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${env.API_KEY}&units=metric`
  //     );
  //     const result = await res.json();

  //     console.log(result);
  //     setName(result["name"]);
  //     setTemp(result["main"]["temp"]);
  //     setConditions(result["weather"][0]["description"]);
  //   };

  //   fetchData();
  // }, [city]);

  // fetchData()

  // console.log(name)

  return (
    <Router>
      <Route path="/" exact render={() => (
        <HeroPage searchCity={(city) => setCity(city)} />
      )}>
      
      </Route>
      
      <Route path="/Hot" exact render={() => (
        <>
        <Hot />
        </>
      )}/>
    </Router>

    
  );
}

export default App;
