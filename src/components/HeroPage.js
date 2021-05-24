import "./../styles/HeroPage.scss";
import "./../styles/WelcomeTxt.scss";
import "./../styles/Form.scss";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const HeroPage = ({ searchCity }) => {
  const [city, setCity] = useState("");
  
  // Input Validation & Passing data to parent
  const onSubmit = (e) => {
    e.preventDefault();

    if (!city) {
      alert("Please enter a city");
      return;
    }

    // Pass data to parent
    searchCity(city);

    // Return to default placeholder
    setCity("");

  };

  return (
    <div className="HeroPage">
      <div className="welcome-text">
        <h1>Welcome.</h1>
        <form className="flex-form" onSubmit={onSubmit}>
          <input
            type="search"
            placeholder="Where do you want to go?"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input type="submit" value="Go" />
        </form>
      </div>
    </div>
  );
};

export default HeroPage;
